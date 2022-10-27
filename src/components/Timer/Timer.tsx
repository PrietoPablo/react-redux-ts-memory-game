import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators, State } from '../../state';
import { startTimer } from '../../state/actionCreators';
import './Timer.scss';

function Timer() {
  // Redux Logic to access and manipulate state
  const dispatch = useDispatch();

  const { startTimer, runTimer, stopTimer, sendResult, isGameDone } = bindActionCreators(actionCreators, dispatch);
 
  const settings = useSelector((state: State) => state.settings);
  const memory = useSelector((state: State) => state.memory);
  const timer = useSelector((state: State) => state.timer);

  useEffect(() => {
    if (!timer.isOn) {
      startTimer()
    }
    // need to fix type of this
    let interval: string | number | NodeJS.Timer | undefined;

    if (timer.isOn) {
      interval = setInterval(() =>{
        runTimer(1000);
      }, 1000);
    }

    if (timer.timer >= settings.timeSubmitted) {
      stopTimer();
      sendResult("lost");

    }

    if ((timer.timer < settings.timeSubmitted && memory.gameAdvancement === "done")) {
      stopTimer();
      sendResult("win");
    }

    return () => {
      clearInterval(interval);
    }
    
  },[timer.isOn, timer.timer]);


  return (
    <>
      {memory.gameAdvancement === "ongoing" 
        ?
        <div className="timer">
          
          <div className="timer-filling" style={{width: `${timer.timer * 100 / settings.timeSubmitted}%`}} />
        </div>
        :
        <div className="completion">
          <h2 className="completion-message">COMPLETED ! </h2>
          {memory.gameResult === "win" ? <h2 className="completion-message">YOU WIN</h2> : null}
          {memory.gameResult === "lost" ? <h2 className="completion-message">TRY AGAIN</h2> : null}
        </div>
      }
      
    </>
  )
}

export default Timer;
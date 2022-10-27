import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators, State } from '../../state';
import { startTimer } from '../../state/actionCreators';
import './Timer.scss';

function Timer() {
  // Redux Logic to access and manipulate state
  const dispatch = useDispatch();

  const { startTimer, runTimer, stopTimer } = bindActionCreators(actionCreators, dispatch);
 
  const settings = useSelector((state: State) => state.settings);
  const memory = useSelector((state: State) => state.memory);
  const timer = useSelector((state: State) => state.timer);

  useEffect(() => {
    if (!timer.isOn) {
      startTimer()
    }
    
    let interval: string | number | NodeJS.Timer | undefined;

    if (timer.isOn) {
      interval = setInterval(() =>{
        runTimer(1000);
      }, 1000);
    }   
    if (timer.timer >= settings.timeSubmitted) {
      stopTimer();
    }
    return () => {
      clearInterval(interval);
    }
    
  },[timer.isOn, timer.timer]);


  return (
    <>
      <p>TimeSubmitted: {settings.timeSubmitted / 1000}</p>
      <p>Timer is {timer.isOn ? "on" : "off"}</p>
      <p>Timer: {timer.timer / 1000} seconds</p>
      {memory.gameAdvancement === "ongoing" ?
        <div className="timer">
          
          <div className="timer-filling" style={{width: "50.5%"}} />
        </div>
        :
        <div className="completion">
          <h2 className="completion-message">COMPLETED !</h2>
        </div>
      }
    </>
  )
}

export default Timer;
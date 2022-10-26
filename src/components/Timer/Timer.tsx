import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators, State } from '../../state';
import './Timer.scss';

function Timer() {
  // Redux Logic to access and manipulate state
  const dispatch = useDispatch();

  const { isMatched } = bindActionCreators(actionCreators, dispatch);
 
  // const settings = useSelector((state: State) => state.settings);
  const memory = useSelector((state: State) => state.memory);

  useEffect(() => {

  },[]);

  return (
    <>
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
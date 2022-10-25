import React from 'react'
import './Timer.scss';

function Timer() {
  return (
   <div className="timer">
      <div className="timer-filling" style={{width: "50.5%"}} />
      {/* <p>{memory.timer}</p> */}
   </div>
  )
}

export default Timer;
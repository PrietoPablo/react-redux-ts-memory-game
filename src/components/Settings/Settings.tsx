import React from 'react'
import './Settings.scss';

import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../state/index';

function Settings() {

   const dispatch = useDispatch();

   const { setTime, selectTime, setGame, startGame } = bindActionCreators(actionCreators, dispatch);

   const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      setTime();
      setGame(); // this part of the state seems unnecessary right now but will be used on a future commit
      startGame();
   }

   return (
      <div className="settings">
         <form action="submit" className="settings-form" onSubmit={handleSubmit}>
            <div className="settings-form-time">
               <h3>choose the time imparted</h3>
               <div className="settings-form-time-choice">
                  <input 
                     type="radio"
                     id="1"
                     name="time" 
                     className="settings-form-time-button" 
                     onClick={() => selectTime(60000)}
                  />
                  <label className="settings-form-time-label">1 minutes</label>
                  <input 
                     type="radio" 
                     id="2" 
                     name="time" 
                     className="settings-form-time-button" 
                     onClick={() => selectTime(40000)}
                  />
                  <label className="settings-form-time-label">40 seconds</label>
                  <input 
                     type="radio" 
                     id="3" 
                     name="time" 
                     className="settings-form-time-button" 
                     onClick={() => selectTime(25000)}
                  />
                  <label className="settings-form-time-label">25 seconds</label>
               </div>
            </div>
         <button className="settings-form-submit">Start the Game !</button>
         </form>
      </div>

   )
}

export default Settings;

import React from 'react'
import './Settings.scss';

import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators, State } from '../state/index';

function Settings() {

   const dispatch = useDispatch();

   const { setTime, selectTime, setGame } = bindActionCreators(actionCreators, dispatch);
   // const time = useSelector((state: State) => state.settings);

   const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      setTime();
      setGame();
   }

   return (
      <div className="settings">
      {/* <p>{time['timeSelected']} minutes selected</p>
      <p>{time['timeSubmitted']} minutes submitted</p> */}
         <form action="submit" className="settings-form" onSubmit={handleSubmit}>
            <div className="settings-form-tile">
               <h3>choose the number of tiles you want to play with</h3>
               <div className="settings-form-tile-choice">
                  <input 
                     type="radio" 
                     id="3" 
                     name="tile" 
                     className="settings-form-tile-button" 
                     onClick={() => console.log('setTilesNumber')}
                  />
                  <label className="settings-form-tile-label">16 tiles</label>
                  <input 
                     type="radio" 
                     id="2" 
                     name="tile" 
                     className="settings-form-tile-button" 
                     onClick={() => console.log('setTilesNumber')}
                  />
                  <label className="settings-form-tile-label">25 tiles</label>
                  <input 
                     type="radio" 
                     id="1" 
                     name="tile" 
                     className="settings-form-tile-button" 
                     onClick={() => console.log('setTilesNumber')}
                  />
                  <label className="settings-form-tile-label">36 tiles</label>
               </div>
            </div>
            <div className="settings-form-time">
               <h3>choose the time imparted</h3>
               <div className="settings-form-time-choice">
                  <input 
                     type="radio" 
                     id="3" 
                     name="time" 
                     className="settings-form-time-button" 
                     onClick={() => selectTime(3000)}
                  />
                  <label className="settings-form-time-label">3 minutes</label>
                  <input 
                     type="radio" 
                     id="2" 
                     name="time" 
                     className="settings-form-time-button" 
                     onClick={() => selectTime(2000)}
                  />
                  <label className="settings-form-time-label">2 minutes</label>
                  <input 
                     type="radio" 
                     id="1" 
                     name="time" 
                     className="settings-form-time-button" 
                     onClick={() => selectTime(1000)}
                  />
                  <label className="settings-form-time-label">1 minutes</label>
               </div>
            </div>
         <button className="settings-form-submit">Start</button>
         </form>
      </div>

   )
}

export default Settings;

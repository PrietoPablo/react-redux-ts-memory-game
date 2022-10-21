import './App.css';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators, State } from './state/index';

function App() {
  const dispatch = useDispatch();

  const { setTime, selectTime } = bindActionCreators(actionCreators, dispatch);
  const time = useSelector((state: State) => state.settings);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTime();
  }

  return (
    <div className="App">
      <h1>Memory</h1>
      <h2>{time['timeSelected']} minutes selected</h2>
      <h2>{time['timeSubmitted']} minutes submitted</h2>
      <form action="submit" className="settings" onSubmit={handleSubmit}>
        <div className="settings-time">
          <input type="radio" id="3" name="time" className="settings-time-button" onClick={() => selectTime(3)}/>
          <label htmlFor="" className="settings-time-label">3 minutes</label>
          <input type="radio" id="2" name="time" className="settings-time-button" onClick={() => selectTime(2)}/>
          <label htmlFor="" className="settings-time-label">2 minutes</label>
          <input type="radio" id="1" name="time" className="settings-time-button" onClick={() => selectTime(1)}/>
          <label htmlFor="" className="settings-time-label">1 minutes</label>
        </div>
        <button className="settings-submit">Start</button>
      </form>
    </div>
  );
}

export default App;

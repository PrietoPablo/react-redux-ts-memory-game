import './App.scss';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators, State } from '../state/index';

import Settings from '../Settings/Settings';

function App() {
  const dispatch = useDispatch();

  // const { setTime, selectTime } = bindActionCreators(actionCreators, dispatch);
  const settings = useSelector((state: State) => state.settings);
  console.log(settings);

  return (
    <div className="App">
      <h1>Memory</h1>
      {settings.isSetGame ? null : <Settings />}
      
    </div>
  );
}

export default App;

import './App.scss';
import { useSelector } from 'react-redux';
import { State } from '../../state/index';

import Settings from '../Settings/Settings';
import GameBoard from '../GameBoard/GameBoard';

function App() {
  const settings = useSelector((state: State) => state.settings);

  return (
    <div className="App">
      <h1>Memory</h1>
      {settings.isSetGame ? <GameBoard /> : <Settings />}
      
    </div>
  );
}

export default App;

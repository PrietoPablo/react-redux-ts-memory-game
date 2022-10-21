import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { State } from '../state/index';

function GameBoard() {
   const dispatch = useDispatch();

   // const { setTime, selectTime } = bindActionCreators(actionCreators, dispatch);
  const settings = useSelector((state: State) => state.settings);
  const memory = useSelector((state: State) => state.memory);

  const tiles = memory.tiles;

  return (
    <div className="gameboard">
      <div className="gameboard-tiles">
         {tiles.map(tile => (
            <img src={tile.src} key={tile.key} alt="logo"></img>
         ))}

      </div>
      <div className="gameboard-timer"></div>
      
    </div>
  )
}

export default GameBoard;

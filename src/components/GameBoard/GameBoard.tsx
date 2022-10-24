import React from 'react';
import './GameBoard.scss';
import { useDispatch, useSelector } from 'react-redux';
import { State } from '../../state/index';

import Tile from '../Tile/Tile';

function GameBoard() {
   const dispatch = useDispatch();

   // const { setTime, selectTime } = bindActionCreators(actionCreators, dispatch);
  const settings = useSelector((state: State) => state.settings);
  const memory = useSelector((state: State) => state.memory);

  const tiles = memory.tiles;

  return (
    <div className="Gameboard">
      <div className="Gameboard-tiles">
         {tiles.map(tile => (
            <Tile tile={tile} key={tile.key} />
            ))}
      </div>
      <div className="Gameboard-timer"></div>
      
    </div>
  )
}

export default GameBoard;

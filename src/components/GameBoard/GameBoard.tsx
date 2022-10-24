import './GameBoard.scss';

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { State, actionCreators } from '../../state';

import Tile from '../Tile/Tile';

function GameBoard() {
   const dispatch = useDispatch();

   const { resetChoices } = bindActionCreators(actionCreators, dispatch);
   
  const settings = useSelector((state: State) => state.settings);
  const memory = useSelector((state: State) => state.memory);

  const tiles = memory.tiles;

  // useEffect is a bit cloudy to explain right now
  useEffect(() => {
    if (memory.firstChoice && memory.secondChoice) {
      memory.firstChoice === memory.secondChoice 
      ? 
      console.log('match') 
      : 
      console.log('no match');

      resetChoices();
    }

  }, [memory.firstChoice, memory.secondChoice]);

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

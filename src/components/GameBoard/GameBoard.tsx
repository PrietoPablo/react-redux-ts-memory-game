/* eslint-disable react-hooks/exhaustive-deps */
import './GameBoard.scss';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { State, actionCreators } from '../../state';

import Tile from '../Tile/Tile';
import Timer from '../Timer/Timer';

function GameBoard() {
  // Redux Logic
   const dispatch = useDispatch();

   const { resetChoices, isMatched, isGameDone, disableChoices } = bindActionCreators(actionCreators, dispatch);
  

  const memory = useSelector((state: State) => state.memory);

  const tiles = memory.tiles;

  // Will make a new render each time there is a change on firstChoice and secondChoice
  // useEffect is a bit cloudy to explain right now
  useEffect(() => {
    if (memory.firstChoice && memory.secondChoice) {
      disableChoices();
      // it would have been more simple to register the all tiles for first and second choice
      const choices = tiles.filter(tile => tile.key === memory.firstChoice || tile.key === memory.secondChoice);
    
      // don't know if it's good practice
      if (choices[0] && choices[1]) {
        choices[0].id === choices[1].id && isMatched(choices[0].id);
      }
      // disableChoices();
      setTimeout(() => resetChoices(), 700);      
    }
    isGameDone();

  }, [memory.firstChoice, memory.secondChoice]);

  // There two re render after each useEffect and I don't know why
  // console.log(tiles);
  
  return (
    <div className="gameboard">
      <div className="gameboard-tiles">
         {tiles.map(tile => (
            <Tile
              tile={tile}
              key={tile.key}
              revealed={tile.key === memory.firstChoice || tile.key === memory.secondChoice || tile.isMatched} />
            ))}
      </div>
      <Timer />     
    </div>
  )
}

export default GameBoard;

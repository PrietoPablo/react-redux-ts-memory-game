import './Tile.scss';

import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators, State } from '../../state';

interface Props {
   tile: {
      name: string;
      src: string;
      id: number;
      isMatched: boolean;
      key: number;
   },
   revealed: boolean;
}
// Not quite sure if i follow redux correctly here with the Props
function Tile({ tile, revealed }: Props) {
   // Redux logic
   const dispatch = useDispatch();
   const { chooseTile } = bindActionCreators(actionCreators, dispatch);
   const memory = useSelector((state: State) => state.memory);

   const handleClick = () => {
      chooseTile(tile.key);
   }

  return (
   <div className="Tile">
      <div className={revealed ? "reveal" : ""}>
         <img 
            src={tile.src} 
            className="Tile-front"
            alt={`${tile.name} logo`}
         />
         <img
            src="images/cover.jpg"
            className="Tile-back"
            alt="tile back"
            onClick={handleClick}
         />
      </div>
   </div>
  )
}

export default Tile;

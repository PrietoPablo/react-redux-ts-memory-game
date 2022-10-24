import React from 'react'
import './Tile.scss';

import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../state';

interface Props {
   tile: {
      name: string;
      src: string;
      id: number;
      key?: number;
   }
}

function Tile({ tile }: Props) {
   const dispatch = useDispatch();

   const { chooseTile } = bindActionCreators(actionCreators, dispatch);

   const handleClick = () => {
      chooseTile(tile.id);
   }

  return (
   <div className="Tile">
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
  )
}

export default Tile;

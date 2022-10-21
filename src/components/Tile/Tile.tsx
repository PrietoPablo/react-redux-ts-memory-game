import React from 'react'
import './Tile.scss';

interface Props {
   tile: {
      name: string;
      src: string;
      id: number;
      key: number;
   }
}

function Tile({ tile }: Props) {
  return (
   <div className="Gameboard-tile">
      <img 
         src={tile.src} 
         key={tile.key} 
         alt={`${tile.name} logo`}
         className="Gameboard-tile-front"
      />
      <img className="Gameboard-tile-back" alt="tile back"/>
   </div>
  )
}

export default Tile;

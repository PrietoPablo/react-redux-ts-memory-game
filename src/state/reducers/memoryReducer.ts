import { 
   Action,
   } from '../actions/index';

type Tile = {
   name: string;
   src: string;
   id: number;
}

const Tiles: Tile[] = [
   {name: "aircall", src: "/images/aircall.jpg", id: 1},
   {name: "algolia", src: "/images/algolia.png", id: 2},
   {name: "blablacar", src: "/images/blablacar.png", id: 3},
   {name: "meero", src: "/images/meero.jpg", id: 4},
   {name: "payfit", src: "/images/payfit.png", id: 5},
   {name: "qonto", src: "/images/qonto.png", id: 6},
   {name: "sorare", src: "/images/sorare.jpg", id: 7},
   {name: "vestiaire", src: "/images/vestiaire.png", id: 8}
];

type shuffledTile = {
   name: string;
   src: string;
   id: number;
   key: number;
}

type Memory = {
   timer: number;
   gameAdvancement: string;
   result: boolean;
   tiles: shuffledTile[];
}

const initialState: Memory = {
   timer: 0,
   gameAdvancement: 'starting',
   result: false,
   tiles: [...Tiles, ...Tiles].sort(() => Math.random() - 0.5).map((tile) => ({...tile, key: Math.random()})),
};

const reducer = (state: Memory = initialState, action: Action) => {
   switch (action.type) {
      // case SET_TIME:
      //    return state = action.payload;
      default:
         return state;
   }
}

export default reducer;
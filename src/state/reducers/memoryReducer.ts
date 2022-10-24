import { 
   Action,
   CHOOSE_TILE,
   IS_MATCHED,
   RESET_CHOICES
   } from '../actions/index';

type Tile = {
   name: string;
   src: string;
   id: number;
   isMatched: boolean;
   key: number;
}
type Memory = {
   timer: number;
   gameAdvancement: string;
   result: boolean;
   tiles: Tile[];
   firstChoice: number | null;
   secondChoice: number | null;
}

const Tiles: Tile[] = [
   {name: "aircall", src: "/images/aircall.jpg", id: 1, isMatched: false, key: 0},
   {name: "algolia", src: "/images/algolia.png", id: 2, isMatched: false, key: 0},
   {name: "blablacar", src: "/images/blablacar.png", id: 3, isMatched: false, key: 0},
   {name: "meero", src: "/images/meero.jpg", id: 4, isMatched: false, key: 0},
   {name: "payfit", src: "/images/payfit.png", id: 5, isMatched: false, key: 0},
   {name: "qonto", src: "/images/qonto.png", id: 6, isMatched: false, key: 0},
   {name: "sorare", src: "/images/sorare.jpg", id: 7, isMatched: false, key: 0},
   {name: "vestiaire", src: "/images/vestiaire.png", id: 8, isMatched: false, key: 0}
];

const initialState: Memory = {
   timer: 0,
   gameAdvancement: 'starting',
   result: false,
   tiles: [...Tiles, ...Tiles].sort(() => Math.random() - 0.5).map((tile) => ({...tile, key: Math.random()})),
   firstChoice: null,
   secondChoice: null,
};

const reducer = (state: Memory = initialState, action: Action) => {
   switch (action.type) {
      case CHOOSE_TILE:
         if (!state.firstChoice) {
            return {
               ...state,
               firstChoice: action.payload
            }
         }
         else {
            return {
               ...state,
               secondChoice: action.payload,
            }
         }
      case RESET_CHOICES:
         return {
            ...state,
            firstChoice: null,
            secondChoice: null,
         } 
      case IS_MATCHED:
         return {
            ...state,
            tiles: state.tiles.map(tile => tile.id === action.payload ? {...tile, isMatched: true} : tile),
         }
      default:
         return state;
   }
}

export default reducer;
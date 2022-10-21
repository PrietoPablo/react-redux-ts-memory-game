import { 
   Action,
   // SET_TIME,
   } from '../actions/index';

type Memory = {
   tiles: number;
   timer: number;
   gameAdvancement: string;
   result: boolean;
}

const initialState = {
   tiles: 16,
   timer: 0,
   gameAdvancement: 'starting',
   result: false,
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
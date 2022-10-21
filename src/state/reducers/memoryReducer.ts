import { 
   Action,
   SET_TIME,
   } from '../actions/index';

const initialState = 0;

const reducer = (state: number = initialState, action: Action) => {
   switch (action.type) {
      // case SET_TIME:
      //    return state = action.payload;
      default:
         return state;
   }
}

export default reducer;
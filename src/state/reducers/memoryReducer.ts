// This reducer is meant to be basic as i want to familiarize myself with the use 
// of typescript in redux
// the actions in here don't represent the app proper fuctionality
import { 
   Action,
   ACTION_ONE,
   ACTION_TWO
   } from '../actions/index';

const initialState = 0;

const reducer = (state: number = initialState, action: Action) => {
   switch (action.type) {
      case ACTION_ONE:
         return state + action.payload;
      case ACTION_TWO:
         return state - action.payload;
      default:
         return state;
   }
}

export default reducer;
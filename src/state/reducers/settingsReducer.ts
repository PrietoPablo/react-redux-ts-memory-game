import { 
   Action,
   SET_TIME,
   SELECT_TIME
   } from '../actions/index';

type Settings = {
   timeSelected: number;
   timeSubmitted: number;
};

const initialState: Settings = {
   timeSelected: 2,
   timeSubmitted: 0
};

const reducer = (state: Settings = initialState, action: Action) => {
   switch (action.type) {
      case SET_TIME:
         return {
            ...state,
            timeSubmitted: state.timeSelected
         }
      case SELECT_TIME:
         console.log(action.payload);
         return {
            ...state,
            timeSelected: action.payload
         }
      default:
         return state;
   }
}

export default reducer;
import { 
   Action,
   SET_TIME,
   SELECT_TIME,
   SET_GAME
   } from '../actions/index';

type Settings = {
   isSetGame: boolean;
   timeSelected: number;
   timeSubmitted: number;
   tileAmountSelected: number;
};

const initialState: Settings = {
   isSetGame: false,
   timeSelected: 2,
   timeSubmitted: 0,
   tileAmountSelected: 16,
};

const reducer = (state: Settings = initialState, action: Action) => {
   switch (action.type) {
      case SET_TIME:
         return {
            ...state,
            timeSubmitted: state.timeSelected 
         }
      case SELECT_TIME:
         return {
            ...state,
            timeSelected: action.payload
         }
      case SET_GAME:
         return {
            ...state,
            isSetGame: true
         }
      default:
         return state;
   }
}

export default reducer;
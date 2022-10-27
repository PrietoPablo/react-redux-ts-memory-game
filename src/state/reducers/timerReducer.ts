import { 
   Action,
   START_TIMER,
   RUN_TIMER,
   STOP_TIMER,
   } from '../actions/index';

   type Timer = {
      isOn: boolean;
      timer: number;
   }

   const initialState: Timer = {
      isOn: false,
      timer: 0,
   };

const reducer = (state: Timer = initialState, action: Action) => {
   switch (action.type) {
      case START_TIMER:
         return {
            ...state,
            isOn: true,
         };
      case RUN_TIMER:
         return {
            ...state,
            timer: state.timer + action.payload,
         }
      case STOP_TIMER:
         return {
            ...state,
            isOn: false,
         }
      default:
         return state;
   }

}

export default reducer;
import { 
   Action,
   RUN_TIMER,
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
      case RUN_TIMER:
         return state;
      default:
         return state;
   }

}

export default reducer;
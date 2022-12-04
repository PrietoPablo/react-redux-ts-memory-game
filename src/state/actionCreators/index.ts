import { 
   Action,
   SET_TIME,
   SELECT_TIME,
   SET_GAME,
   CHOOSE_TILE,
   RESET_CHOICES,
   IS_MATCHED,
   START_TIMER,
   START_GAME,
   IS_GAME_DONE,
   RUN_TIMER,
   STOP_TIMER,
   SEND_RESULT,
   DISABLE_CHOICES,
} from "../actions";
import { Dispatch } from 'redux';

export const setTime = () => {
   return (dispatch: Dispatch<Action>) => {
      dispatch({
         type: SET_TIME,
      });
   }
}

export const selectTime = (time: number) => {
   return (dispatch: Dispatch<Action>) => {
      dispatch({
         type: SELECT_TIME,
         payload: time,
      });
   }
}

export const setGame = () => {
   return (dispatch: Dispatch<Action>) => {
      dispatch({
         type: SET_GAME,
      });
   }
}

export const startGame = () => {
   return (dispatch: Dispatch<Action>) => {
      dispatch({
         type: START_GAME,
      });
   }
}

export const chooseTile = (tileKey: number) => {
   return (dispatch: Dispatch<Action>) => {
      dispatch({
         type: CHOOSE_TILE,
         payload: tileKey,
      });
   }
}

export const resetChoices = () => {
   return (dispatch: Dispatch<Action>) => {
      dispatch({
         type: RESET_CHOICES,
      });
   }
}

export const isMatched = (matchedKey: number) => {
   return (dispatch: Dispatch<Action>) => {
      dispatch({
         type: IS_MATCHED,
         payload: matchedKey,
      });
   }
}

export const isGameDone = () => {
   return (dispatch: Dispatch<Action>) => {
      dispatch({
         type: IS_GAME_DONE,
      });
   }
}
// a toggle timer would be better here, instead of a start and stop actions
export const startTimer = () => {
   return (dispatch: Dispatch<Action>) => {
      dispatch({
         type: START_TIMER,
      });
   }
}

export const runTimer = (time: number) => {
   return (dispatch: Dispatch<Action>) => {
      dispatch({
         type: RUN_TIMER,
         payload: time,
      });
   }
}

export const stopTimer = () => {
   return (dispatch: Dispatch<Action>) => {
      dispatch({
         type: STOP_TIMER,
      });
   }
}

export const sendResult = (result: string) => {
   return (dispatch: Dispatch<Action>) => {
      dispatch({
         type: SEND_RESULT,
         payload: result
      });
   }
}

export const disableChoices = () => {
   return (dispatch: Dispatch<Action>) => {
      dispatch({
         type: DISABLE_CHOICES
      });
   }
}
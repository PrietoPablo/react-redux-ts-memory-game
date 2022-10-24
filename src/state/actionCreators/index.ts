import { 
   Action,
   SET_TIME,
   SELECT_TIME,
   SET_GAME,
   CHOOSE_TILE,
   RESET_CHOICES,
   IS_MATCHED,
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
         payload: time
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

export const chooseTile = (tileId: number) => {
   return (dispatch: Dispatch<Action>) => {
      dispatch({
         type: CHOOSE_TILE,
         payload: tileId,
      });
   }
}

export const resetChoices = () => {
   return (dispatch: Dispatch<Action>) => {
      dispatch({
         type: RESET_CHOICES
      });
   }
}

export const isMatched = (matchedId: number) => {
   return (dispatch: Dispatch<Action>) => {
      dispatch({
         type: IS_MATCHED,
         payload: matchedId
      });
   }
}
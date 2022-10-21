import { Action, SET_TIME, SELECT_TIME } from "../actions";
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
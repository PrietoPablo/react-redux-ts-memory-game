import { Action, ACTION_ONE, ACTION_TWO } from "../actions";
import { Dispatch } from 'redux';

export const actionOne = (amount: number) => {
   return (dispatch: Dispatch<Action>) => {
      dispatch({
         type: ACTION_ONE,
         payload: amount
      })
   }
}

export const actionTwo = (amount: number) => {
   return (dispatch: Dispatch<Action>) => {
      dispatch({
         type: ACTION_TWO,
         payload: amount
      })
   }
}
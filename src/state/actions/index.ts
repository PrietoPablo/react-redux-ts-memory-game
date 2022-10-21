export const SET_TIME = 'SET_TIME';
interface SetTime {
   type: typeof SET_TIME;
}

export const SELECT_TIME = 'SELECT_TIME';
interface SelectTime {
   type: typeof SELECT_TIME;
   payload: number;
}

export type Action = SetTime | SelectTime;
export const SET_TIME = 'SET_TIME';
interface SetTime {
   type: typeof SET_TIME;
}

export const SELECT_TIME = 'SELECT_TIME';
interface SelectTime {
   type: typeof SELECT_TIME;
   payload: number;
}

export const SET_GAME = 'SET_GAME';
interface SetGame {
   type: typeof SET_GAME;
}

export const CHOOSE_TILE = 'CHOOSE_TILE';
interface ChooseTile {
   type: typeof CHOOSE_TILE;
   payload: number;
}

export type Action = SetTime | SelectTime | SetGame | ChooseTile;
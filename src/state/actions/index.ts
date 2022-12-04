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

export const RESET_CHOICES = 'RESET_CHOICES';
interface ResetChoices {
   type: typeof RESET_CHOICES;
}

export const IS_MATCHED = 'IS_MATCHED';
interface IsMatched {
   type: typeof IS_MATCHED;
   payload: number;
}

export const START_TIMER = 'START_TIMER';
interface StartTimer {
   type: typeof START_TIMER;
}

export const START_GAME = 'START_GAME';
interface StartGame {
   type: typeof START_GAME;
}

export const RUN_TIMER = 'RUN_TIMER';
interface RunTimer {
   type: typeof RUN_TIMER;
   payload: number;
}

export const STOP_TIMER = 'STOP_TIMER';
interface StopTimer {
   type: typeof STOP_TIMER;
}

export const IS_GAME_DONE = 'IS_GAME_DONE';
interface IsGameDone {
   type: typeof IS_GAME_DONE;
}

export const SEND_RESULT = 'SEND_RESULT';
interface SendResult {
   type: typeof SEND_RESULT;
   payload: string;
}

export const DISABLE_CHOICES = 'DISABLE_CHOICES';
interface DisableChoices {
   type: typeof DISABLE_CHOICES;
}

// need to distrubute action in multiple file
export type Action = 
   SetTime |
   SelectTime |
   SetGame |
   ChooseTile |
   ResetChoices |
   IsMatched |
   StartTimer |
   StartGame |
   IsGameDone |
   RunTimer |
   StopTimer |
   SendResult |
   DisableChoices;

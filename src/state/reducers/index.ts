import { combineReducers } from 'redux';
import memoryReducer from "./memoryReducer";
import settingsReducer from "./settingsReducer";
import timerReducer from "./timerReducer";

const reducers = combineReducers({
   settings: settingsReducer,
   memory: memoryReducer,
   timer: timerReducer,
});

export default reducers;

export type State = ReturnType<typeof reducers>;
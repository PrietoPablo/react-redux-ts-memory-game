import { combineReducers } from 'redux';
import memoryReducer from "./memoryReducer";
import settingsReducer from "./settingsReducer";

const reducers = combineReducers({
   settings: settingsReducer,
   memory: memoryReducer
});

export default reducers;

export type State = ReturnType<typeof reducers>;
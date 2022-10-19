import { combineReducers } from 'redux';
import memoryReducer from "./memoryReducer"

const reducers = combineReducers({
   memory: memoryReducer
});

export default reducers;
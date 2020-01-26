import { combineReducers } from 'redux';
import uiReducer from './UI';
import gamesReducer from './gameReducer';

export const rootReducer = combineReducers({
  uiReducer,
  gamesReducer,
});

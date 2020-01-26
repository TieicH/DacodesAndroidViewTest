import { combineReducers } from 'redux';
import uiReducer from './UI';
import gamesReducer from './gameReducer';
import playersReducer from './playersReducer';

export const rootReducer = combineReducers({
  uiReducer,
  gamesReducer,
  playersReducer,
});

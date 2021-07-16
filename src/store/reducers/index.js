import { combineReducers } from 'redux';
import agregarReducer from './agregar';

export const rootReducer = combineReducers({
  agregarReducer,
});

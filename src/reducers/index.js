import { combineReducers } from 'redux';
//Import reducers
import booksReducer from './booksReducer';

const rootReducer = combineReducers({
  search: booksReducer,
});

export default rootReducer;

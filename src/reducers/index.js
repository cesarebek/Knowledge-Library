import { combineReducers } from 'redux';
//Import reducers
import booksReducer from './booksReducer';

const rootReducer = combineReducers({
  books: booksReducer,
});

export default rootReducer;

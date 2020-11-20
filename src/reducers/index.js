import { combineReducers } from 'redux';
//Import reducers
import booksReducer from './booksReducer';
import detailReducer from './detailReducer';

const rootReducer = combineReducers({
  books: booksReducer,
  details: detailReducer,
});

export default rootReducer;

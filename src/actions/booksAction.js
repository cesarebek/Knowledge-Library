import axios from 'axios';
//import URLs to fetch
import { searchedBooksURL } from '../api';

export const fetchBooks = (book_name) => async (dispatch) => {
  dispatch({
    type: 'BOOK_LOADING',
  });

  const searchedBooksData = await axios.get(searchedBooksURL(book_name));

  dispatch({
    type: 'FETCH_SEARCHED',
    payload: {
      searched: searchedBooksData.data.items,
    },
  });
};

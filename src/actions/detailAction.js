//Axios
import axios from 'axios';
//Api URL
import { bookDetailsURL } from '../api';

export const loadDetail = (id) => async (dispatch) => {
  dispatch({
    type: 'LOADING_DETAIL',
  });

  const bookDetailsData = await axios.get(bookDetailsURL(id));

  dispatch({
    type: 'GET_DETAIL',
    payload: {
      bookDetail: bookDetailsData.data,
    },
  });
};

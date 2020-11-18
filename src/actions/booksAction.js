import axios from 'axios';

export const loadDetails = () => async (dispatch) => {
  const searchedBooksData = await axios.get();

  dispatch({
    type: 'FETCH_SEARCHED',
    payload: {
      searched: searchedBooksData.data,
    },
  });
};

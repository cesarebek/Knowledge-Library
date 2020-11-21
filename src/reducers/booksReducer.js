const initState = { searched: [], bookLoading: true };

const bookReducer = (state = initState, action) => {
  switch (action.type) {
    case 'FETCH_SEARCHED':
      return {
        ...state,
        searched: action.payload.searched,
        bookLoading: false,
      };

    case 'BOOK_LOADING':
      return {
        ...state,
        bookLoading: true,
      };
    default:
      return {
        ...state,
      };
  }
};

export default bookReducer;

const initState = { searched: [] };

const bookReducer = (state = initState, action) => {
  switch (action.type) {
    case 'FETCH_SEARCHED':
      return {
        ...state,
        searched: action.payload.searched,
      };
    default:
      return {
        ...state,
      };
  }
};

export default bookReducer;

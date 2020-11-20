const initState = { bookDetail: [] };
const detailReducer = (state = initState, action) => {
  switch (action.type) {
    case 'GET_DETAIL':
      return {
        ...state,
        bookDetail: action.payload.bookDetail,
      };
    default:
      return { ...state };
  }
};

export default detailReducer;

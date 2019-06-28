const basketReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_BASKET":
      return state.concat(action.payload);
    case "DELETE_BASKET":
      return state.filter(product => product !== action.payload);
    default:
      return state;
  }
};

export default basketReducer;

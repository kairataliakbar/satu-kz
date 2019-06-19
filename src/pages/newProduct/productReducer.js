export default (state = [], action) => {
  switch (action.type) {
    case "NEW_PRODUCT":
      return state.concat(action.payload);
    default:
      return state;
  }
};

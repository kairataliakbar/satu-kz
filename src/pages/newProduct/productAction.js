export const addProduct = payload => dispatch =>
  dispatch({
    type: "ADD_PRODUCT",
    payload
  });

export const deleteProduct = payload => dispatch =>
  dispatch({
    type: "DELETE_PRODUCT",
    payload
  });

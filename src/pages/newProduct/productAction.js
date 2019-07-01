// eslint-disable-next-line import/prefer-default-export
export const addProduct = product => dispatch =>
  dispatch({
    type: "ADD_PRODUCT",
    payload: product
  });

export const deleteProduct = product => dispatch =>
  dispatch({
    type: "DELETE_PRODUCT",
    payload: product
  });

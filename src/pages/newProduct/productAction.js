// eslint-disable-next-line import/prefer-default-export
export const addProduct = product => dispatch =>
  dispatch({
    type: "ADD_PRODUCT",
    payload: product
  });

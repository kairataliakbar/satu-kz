const addProduct = payload => dispatch =>
  dispatch({
    type: "ADD_PRODUCT",
    payload
  });

export default addProduct;

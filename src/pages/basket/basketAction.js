// eslint-disable-next-line import/prefer-default-export
export const addBasket = basket => dispatch =>
  dispatch({
    type: "ADD_BASKET",
    payload: basket
  });

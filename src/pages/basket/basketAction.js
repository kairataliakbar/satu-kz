export const addBasket = basket => dispatch =>
  dispatch({
    type: "ADD_BASKET",
    payload: basket
  });

export const deleteBasket = basket => dispatch =>
  dispatch({
    type: "DELETE_BASKET",
    payload: basket
  });

export const addBasket = payload => dispatch =>
  dispatch({
    type: "ADD_BASKET",
    payload
  });

export const deleteBasket = payload => dispatch =>
  dispatch({
    type: "DELETE_BASKET",
    payload
  });

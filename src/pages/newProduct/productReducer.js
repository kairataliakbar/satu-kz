const data = [
  {
    title: "Смартфон Apple",
    code: 132123,
    heading: "Phone",
    model: "Apple",
    color: "black",
    data: 2018,
    price: 201232,
    textarea: "good",
    imgSrc: "img: src"
  }
];

const productReducer = (state = data, action) => {
  switch (action.type) {
    case "ADD_PRODUCT":
      return state.concat(action.payload);
    default:
      return state;
  }
};

export default productReducer;

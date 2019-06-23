const data = [
  {
    title: "Смартфон Apple iPhone 7, 32 GB, Black",
    code: 51263541,
    heading: "Смартфоны",
    model: "Apple",
    color: "Черный",
    data: 2018,
    price: 239890,
    textarea:
      "Стандарт связи: 2G, 3G (WCDMA/UMTS), 4G (LTE) | Разрешение дисплея, px: 750x1334 | Диагональ дисплея, дюйм: 4.7 | Стандарт защиты от пыли и влаги: IP67 | Объём встроенной памяти, ГБ: 32 | Объем оперативной памяти, ГБ: 2 | Количество SIM-карт: 1",
    imgSrc: "../../../../image/iPhone7.jpg"
  }
];

localStorage.setItem("products", JSON.stringify(data));
const product = JSON.parse(localStorage.getItem("products"));

const productReducer = (state = product, action) => {
  switch (action.type) {
    case "ADD_PRODUCT":
      return state.concat(action.payload);
    default:
      return state;
  }
};

export default productReducer;

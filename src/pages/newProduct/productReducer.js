const data = [
  {
    title: "Смартфон Apple iPhone 7, 32 GB, Black",
    code: "51263541",
    heading: "Смартфоны",
    model: "Apple",
    color: "Черный",
    data: "2018",
    price: "239890",
    textarea:
      "Стандарт связи: 2G, 3G (WCDMA/UMTS), 4G (LTE) | Разрешение дисплея, px: 750x1334 | Диагональ дисплея, дюйм: 4.7 | Стандарт защиты от пыли и влаги: IP67 | Объём встроенной памяти, ГБ: 32 | Объем оперативной памяти, ГБ: 2 | Количество SIM-карт: 1",
    imgSrc: "../../../../image/iPhone7.jpg"
  },
  {
    title: "Смартфон Samsung Galaxy S10 128 GB Green",
    code: "623648762",
    heading: "Смартфоны",
    model: "Samsung",
    color: "Зеленый",
    data: "2019",
    price: "349890",
    textarea:
      "Стандарт связи: 2G, 3G (WCDMA/UMTS), 4G (LTE) | Разрешение дисплея, px: 1440x3040 | Диагональ дисплея, дюйм: 6.1 | Стандарт защиты от пыли и влаги: IP68 | Объём встроенной памяти, ГБ: 128 | Объем оперативной памяти, ГБ: 8 | Операционная система: Android 9.0 (Pie) | Количество SIM-карт: 2",
    imgSrc: "../../../../image/samsung s10.jpg"
  },
  {
    title: "Смартфон Samsung Galaxy J5 (2017), 16 GB, Black",
    code: "643875683",
    heading: "Смартфоны",
    model: "Samsung",
    color: "Черный",
    data: "2017",
    price: "59890",
    textarea:
      "Стандарт связи: 2G, 3G (WCDMA/UMTS), 4G (LTE) | Разрешение дисплея, px: 720x1280 (HD/WXGA) | Диагональ дисплея, дюйм: 5.2 | Стандарт защиты от пыли и влаги: Нет | Объём встроенной памяти, ГБ: 16 | Объем оперативной памяти, ГБ: 2 | Операционная система: Android 7.0 (Nougat) | Количество SIM-карт: 2",
    imgSrc:
      "../../../../image/Смартфон Samsung Galaxy J5 (2017), 16 GB, Black.jpg"
  },
  {
    title: "Apple iPhone XS Max, 512 GB, Gold",
    code: "6829477349",
    heading: "Смартфоны",
    model: "Apple",
    color: "Золотой",
    data: "2018",
    price: "799890",
    textarea:
      "Стандарт связи: 4G (LTE) | Разрешение дисплея, px: 2688x1242 | Диагональ дисплея, дюйм: 6.5 | Стандарт защиты от пыли и влаги: IP68 | Объём встроенной памяти, ГБ: 512 | Объем оперативной памяти, ГБ: 4 | Операционная система: iOS 12 | Количество SIM-карт: 1",
    imgSrc: "../../../../image/Apple iPhone XS Max, 512 GB, Gold.jpg"
  },
  {
    title: "Смартфон Apple iPhone X, 256 GB, Space Gray",
    code: "6923402855",
    heading: "Смартфоны",
    model: "Apple",
    color: "Черный",
    data: "2018",
    price: "489890",
    textarea:
      "Стандарт связи: 4G (LTE) | Разрешение дисплея, px: 1125x2436 | Диагональ дисплея, дюйм: 5.8 | Стандарт защиты от пыли и влаги: IP67 | Объём встроенной памяти, ГБ: 256 | Объем оперативной памяти, ГБ: 3 | Операционная система: iOS 11 | Количество SIM-карт: 1",
    imgSrc: "../../../../image/Смартфон Apple iPhone X, 256 GB, Space Gray .jpg"
  }
];

const productReducer = (state = data, action) => {
  switch (action.type) {
    case "ADD_PRODUCT":
      return state.concat(action.payload);
    case "DELETE_PRODUCT":
      return state.filter(product => product.code !== action.payload.code);
    default:
      return state;
  }
};

export default productReducer;

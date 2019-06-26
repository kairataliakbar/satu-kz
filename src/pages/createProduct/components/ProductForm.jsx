import React from "react";
import { Link } from "react-router-dom";

import Select from "./Select";

class ProductForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      code: null,
      heading: "",
      model: "",
      color: "",
      data: null,
      price: null,
      textarea: "",
      imgSrc: ""
    };

    this.onInputChange = this.onInputChange.bind(this);
    this.imgSrcProduct = this.imgSrcProduct.bind(this);
    this.publish = this.publish.bind(this);
  }

  onInputChange(fieldName, fieldValue) {
    this.setState({ [fieldName]: fieldValue });
  }

  imgSrcProduct(e) {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.setState({ imgSrc: reader.result });
    };
  }

  publish() {
    if (localStorage.getItem("products")) {
      const products = JSON.parse(localStorage.getItem("products"));
      const arrayProducts = products.concat(this.state);
      localStorage.setItem("products", JSON.stringify(arrayProducts));
    } else {
      localStorage.setItem("products", JSON.stringify([this.state]));
    }
  }

  render() {
    const { imgSrc } = this.state;
    const headingTitle = "heading";
    const heading = [
      { value: "", name: "Рубрика" },
      { value: "phon", name: "Смартфоны" },
      { value: "pc", name: "Компьютеры" },
      { value: "tv audio and video", name: "ТВ, аудио и видио" },
      { value: "appliances", name: "Бытовая техника" },
      { value: "equipment for kitchen", name: "Техника для кухни" },
      { value: "home", name: "Дом" },
      { value: "auto products and transport", name: "Автотовары и транспорт" }
    ];
    const modelTitle = "model";
    const model = [
      { value: "", name: "Модель" },
      { value: "apple", name: "Apple" },
      { value: "samsung", name: "Samsung" },
      { value: "htc", name: "HTC" },
      { value: "huawei", name: "Huawei" },
      { value: "xiaomi", name: "Xiaomi" },
      { value: "lg", name: "LG" },
      { value: "lenova", name: "Lenova" },
      { value: "sony", name: "Sony" },
      { value: "meizu", name: "Meizu" },
      { value: "oppo", name: "Oppo" },
      { value: "acer", name: "Acer" },
      { value: "asus", name: "Asus" },
      { value: "hp", name: "HP" },
      { value: "tefal", name: "Tefal" },
      { value: "canon", name: "Canon" },
      { value: "philips", name: "Philips" },
      { value: "haier", name: "Haier" }
    ];
    const colorTitle = "color";
    const color = [
      { value: "", name: "Цвет" },
      { value: "black", name: "Черный" },
      { value: "white", name: "Белый" },
      { value: "gold", name: "Золотой" },
      { value: "yellow", name: "Желтый" },
      { value: "green", name: "Зеленый" },
      { value: "blue", name: "Синй" },
      { value: "brown", name: "Коричневый" }
    ];
    const dataTitle = "data";
    const data = [
      { value: "", name: "Год" },
      { value: "2014", name: "2014" },
      { value: "2015", name: "2015" },
      { value: "2016", name: "2016" },
      { value: "2017", name: "2017" },
      { value: "2018", name: "2018" },
      { value: "2019", name: "2019" }
    ];
    return (
      <form>
        <div className="title-container">
          <div className="left-tc">Заголовок:</div>
          <div className="right-tc">
            <input
              type="text"
              className="text-header"
              onChange={e => this.onInputChange("title", e.target.value)}
            />
          </div>
        </div>
        <div className="title-container">
          <div className="left-tc">Код товара:</div>
          <div className="right-tc">
            <input
              type="number"
              className="code-product"
              onChange={e => this.onInputChange("code", e.target.value)}
            />
          </div>
        </div>
        <div className="title-container">
          <div className="left-tc">Рубрика:</div>
          <div className="right-tc">
            <Select
              title={headingTitle}
              onInputChange={this.onInputChange}
              selectArray={heading}
            />
          </div>
        </div>
        <div className="title-container">
          <div className="left-tc">Модель:</div>
          <div className="right-tc">
            <Select
              title={modelTitle}
              onInputChange={this.onInputChange}
              selectArray={model}
            />
          </div>
        </div>
        <div className="title-container">
          <div className="left-tc">Цвет:</div>
          <div className="right-tc">
            <Select
              title={colorTitle}
              onInputChange={this.onInputChange}
              selectArray={color}
            />
          </div>
        </div>
        <div className="title-container">
          <div className="left-tc">Год выпуска:</div>
          <div className="right-tc">
            <Select
              title={dataTitle}
              onInputChange={this.onInputChange}
              selectArray={data}
            />
          </div>
        </div>
        <div className="title-container">
          <div className="left-tc">Цена:</div>
          <div className="right-tc">
            <input
              type="number"
              className="text-prices"
              onChange={e => this.onInputChange("price", e.target.value)}
            />
            _тг.
          </div>
        </div>
        <div className="title-container">
          <div className="left-tc">Описание и характеристика:</div>
          <div className="right-tc">
            <textarea
              name="text"
              className="text-area"
              cols="80"
              rows="1"
              onChange={e => this.onInputChange("textarea", e.target.value)}
            ></textarea>
          </div>
        </div>
        <div className="title-container">
          <div className="left-tc">Добавить фото:</div>
          <div className="right-tc">
            <div className="add-img">
              <input
                type="file"
                name="addImg"
                className="add-img-file"
                accept="image/jpeg,image/gif,image/png"
                onChange={this.imgSrcProduct}
              />
              <img src={imgSrc} alt="img" />
            </div>
          </div>
        </div>
        <div className="button-container">
          <Link to="/">
            <button type="button" className="backButton">
              Отмена
            </button>
          </Link>
          <input type="reset" className="resetButton" value="Сбросить все" />
          <Link to="/">
            <button type="button" className="nextButton" onClick={this.publish}>
              Опубликовать
            </button>
          </Link>
        </div>
      </form>
    );
  }
}

export default ProductForm;

/* eslint-disable no-console */
import React from "react";
import { Link } from "react-router-dom";

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
    console.log(this.state);
    return this.state;
  }

  render() {
    const { imgSrc } = this.state;
    return (
      <form>
        <div className="title-container">
          <div className="left-tc">Заголовок:</div>
          <div className="right-tc">
            <input
              type="text"
              className="text-header"
              onChange={e => this.onInputChange("title", e.target.value)}
              required
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
              required
            />
          </div>
        </div>
        <div className="title-container">
          <div className="left-tc">Рубрика:</div>
          <div className="right-tc">
            <select
              name="heading"
              className="heading-tc"
              onChange={e => this.onInputChange("heading", e.target.value)}
              required
            >
              <option value="">Рубрика</option>
              <option value="phon">Смартфоны</option>
              <option value="pc">Компьютеры</option>
              <option value="tv audio and video">ТВ, аудио и видио</option>
              <option value="appliances">Бытовая техника</option>
              <option value="equipment for kitchen">Техника для кухни</option>
              <option value="home">Дом</option>
              <option value="auto products and transport">
                Автотовары и транспорт
              </option>
            </select>
          </div>
        </div>
        <div className="title-container">
          <div className="left-tc">Модель:</div>
          <div className="right-tc">
            <select
              name="model"
              className="heading-tc"
              onChange={e => this.onInputChange("model", e.target.value)}
              required
            >
              <option value="">Mодель</option>
              <option value="apple">Apple</option>
              <option value="samsung">Samsung</option>
              <option value="htc">HTC</option>
              <option value="huawei">Huawei</option>
              <option value="xiaomi">Xiaomi</option>
              <option value="lg">LG</option>
              <option value="lenova">Lenova</option>
              <option value="sony">Sony</option>
              <option value="meizu">Meizu</option>
              <option value="oppo">OPPO</option>
              <option value="acer">Acer</option>
              <option value="asus">Asus</option>
              <option value="hp">HP</option>
              <option value="tefal">Tefal</option>
              <option value="canon">Canon</option>
              <option value="philips">Philips</option>
              <option value="haier">Haier</option>
            </select>
          </div>
        </div>
        <div className="title-container">
          <div className="left-tc">Цвет:</div>
          <div className="right-tc">
            <select
              name="color"
              className="heading-tc"
              onChange={e => this.onInputChange("color", e.target.value)}
              required
            >
              <option value="">Цвет</option>
              <option value="black">Черный</option>
              <option value="white">Белый</option>
              <option value="gold">Золотой</option>
              <option value="yellow">Желтый</option>
              <option value="green">Зеленый</option>
              <option value="blue">Синий</option>
              <option value="brown">Коричневый</option>
            </select>
          </div>
        </div>
        <div className="title-container">
          <div className="left-tc">Год выпуска:</div>
          <div className="right-tc">
            <select
              name="data"
              className="heading-tc"
              onChange={e => this.onInputChange("data", e.target.value)}
              required
            >
              <option value="">Год</option>
              <option value="2014">2014</option>
              <option value="2015">2015</option>
              <option value="2016">2016</option>
              <option value="2017">2017</option>
              <option value="2018">2018</option>
              <option value="2019">2019</option>
            </select>
          </div>
        </div>
        <div className="title-container">
          <div className="left-tc">Цена:</div>
          <div className="right-tc">
            <input
              type="number"
              className="text-prices"
              onChange={e => this.onInputChange("price", e.target.value)}
              required
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
              required
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
                required
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

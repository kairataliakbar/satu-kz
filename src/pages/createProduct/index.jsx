/* eslint-disable no-console */
import React from "react";
import { Link } from "react-router-dom";

class CreateProduct extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      cod: null,
      heading: "",
      model: "",
      color: "",
      data: null,
      price: null,
      textarea: "",
      imgSrc: ""
    };

    this.titleProduct = this.titleProduct.bind(this);
    this.codProduct = this.codProduct.bind(this);
    this.headingProduct = this.headingProduct.bind(this);
    this.modelProduct = this.modelProduct.bind(this);
    this.colorProduct = this.colorProduct.bind(this);
    this.dataProduct = this.dataProduct.bind(this);
    this.priceProduct = this.priceProduct.bind(this);
    this.textareaProduct = this.textareaProduct.bind(this);
    this.imgSrcProduct = this.imgSrcProduct.bind(this);
    this.publish = this.publish.bind(this);
  }

  titleProduct(e) {
    const { title } = this.state;
    this.setState({ title: e.target.value });
    console.log(title);
  }

  codProduct(e) {
    const { cod } = this.state;
    this.setState({ cod: e.target.value });
    console.log(cod);
  }

  headingProduct(e) {
    const { heading } = this.state;
    this.setState({ heading: e.target.value });
    console.log(heading);
  }

  modelProduct(e) {
    const { model } = this.state;
    this.setState({ model: e.target.value });
    console.log(model);
  }

  colorProduct(e) {
    const { color } = this.state;
    this.setState({ color: e.target.value });
    console.log(color);
  }

  dataProduct(e) {
    const { data } = this.state;
    this.setState({ data: e.target.value });
    console.log(data);
  }

  priceProduct(e) {
    const { price } = this.state;
    this.setState({ price: e.target.value });
    console.log(price);
  }

  textareaProduct(e) {
    const { textarea } = this.state;
    this.setState({ textarea: e.target.value });
    console.log(textarea);
  }

  imgSrcProduct(e) {
    const { imgSrc } = this.state;
    this.setState({ imgSrc: URL.createObjectURL(e.target.files[0]) });
    console.log(`${imgSrc} s`);
  }

  publish() {}

  render() {
    const { imgSrc } = this.state;
    return (
      <div className="main">
        <div className="top-main">Подать объявление на SATU.KZ</div>
        <div className="body-main">
          <form>
            <div className="title-container">
              <div className="left-tc">Заголовок:</div>
              <div className="right-tc">
                <input
                  type="text"
                  className="text-header"
                  onChange={this.titleProduct}
                />
              </div>
            </div>
            <div className="title-container">
              <div className="left-tc">Код товара:</div>
              <div className="right-tc">
                <input
                  type="text"
                  className="cod-product"
                  onChange={this.codProduct}
                />
              </div>
            </div>
            <div className="title-container">
              <div className="left-tc">Рубрика:</div>
              <div className="right-tc">
                <select
                  name="heading"
                  className="heading-tc"
                  defaultValue="Рубрика"
                  onChange={this.headingProduct}
                >
                  <option disabled value="Рубрика">
                    Рубрика
                  </option>
                  <option value="phon">Смартфоны</option>
                  <option value="pc">Компьютеры</option>
                  <option value="tv audio and video">ТВ, аудио и видио</option>
                  <option value="appliances">Бытовая техника</option>
                  <option value="equipment for kitchen">
                    Техника для кухни
                  </option>
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
                  defaultValue="Mодель"
                  onChange={this.modelProduct}
                >
                  <option disabled value="Mодель">
                    Mодель
                  </option>
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
                  defaultValue="Цвет"
                  onChange={this.colorProduct}
                >
                  <option disabled value="Цвет">
                    Цвет
                  </option>
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
                  defaultValue="Год"
                  onChange={this.dataProduct}
                >
                  <option disabled value="Год">
                    Год
                  </option>
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
                  type="text"
                  className="text-prices"
                  onChange={this.priceProduct}
                />
                тг.
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
                  onChange={this.textareaProduct}
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
              <button type="button" onClick={this.publish}>
                ОПУБЛИКОВАТЬ
              </button>
              <button type="button">
                <Link to="/">ОТМЕНА</Link>
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default CreateProduct;

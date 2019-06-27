import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import Select from "./Select";
import Constants from "./Constants";

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
      imgSrc: "../../../../image/camera_a.gif"
    };

    this.onInputChange = this.onInputChange.bind(this);
    this.imgSrcProduct = this.imgSrcProduct.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onInputChange(fieldName, fieldValue) {
    this.setState({ [fieldName]: fieldValue });
  }

  onSubmit() {
    const { onSubmit } = this.props;
    console.log(onSubmit);
    return onSubmit(this.state);
  }

  imgSrcProduct(e) {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.setState({ imgSrc: reader.result });
    };
  }

  render() {
    const { imgSrc } = this.state;
    const {
      heading,
      headingTitle,
      model,
      modelTitle,
      color,
      colorTitle,
      data,
      dataTitle
    } = Constants;
    const arrayHeading = heading;
    const titleHeading = headingTitle;
    const arrayModel = model;
    const titleModel = modelTitle;
    const arrayColor = color;
    const titleColor = colorTitle;
    const arrayData = data;
    const titleData = dataTitle;
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
              title={titleHeading}
              onInputChange={this.onInputChange}
              selectArray={arrayHeading}
            />
          </div>
        </div>
        <div className="title-container">
          <div className="left-tc">Модель:</div>
          <div className="right-tc">
            <Select
              title={titleModel}
              onInputChange={this.onInputChange}
              selectArray={arrayModel}
            />
          </div>
        </div>
        <div className="title-container">
          <div className="left-tc">Цвет:</div>
          <div className="right-tc">
            <Select
              title={titleColor}
              onInputChange={this.onInputChange}
              selectArray={arrayColor}
            />
          </div>
        </div>
        <div className="title-container">
          <div className="left-tc">Год выпуска:</div>
          <div className="right-tc">
            <Select
              title={titleData}
              onInputChange={this.onInputChange}
              selectArray={arrayData}
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
          <div className="left-tc">Описание:</div>
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
            <button
              type="button"
              className="nextButton"
              onClick={this.onSubmit}
            >
              Опубликовать
            </button>
          </Link>
        </div>
      </form>
    );
  }
}

ProductForm.propTypes = {
  onSubmit: PropTypes.func.isRequired
};

export default ProductForm;

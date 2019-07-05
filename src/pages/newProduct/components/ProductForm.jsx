import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { reduxForm, Field } from "redux-form";

import * as Constants from "./Constants";

const adaptFileEventToValue = delegate => e => delegate(e.target.files[0]);

const FileInput = ({
  input: { value: omitValue, onChange, onBlur, ...inputProps },
  meta: omitMeta,
  ...props
}) => (
  <input
    onChange={adaptFileEventToValue(onChange)}
    onBlur={adaptFileEventToValue(onBlur)}
    type="file"
    {...inputProps}
    {...props}
  />
);

const ProductForm = ({ handleSubmit, reset, valid, submitting, pristine }) => {
  const { heading, model, color, data } = Constants;
  return (
    <form onSubmit={handleSubmit(val => console.log(val))}>
      <div className="title-container">
        <div className="left-tc">Заголовок:</div>
        <div className="right-tc">
          <Field
            name="titleProduct"
            component="input"
            type="text"
            className="text-header"
          />
        </div>
      </div>
      <div className="title-container">
        <div className="left-tc">Код товара:</div>
        <div className="right-tc">
          <Field
            name="codeProduct"
            component="input"
            type="number"
            className="code-product"
          />
        </div>
      </div>
      <div className="title-container">
        <div className="left-tc">Рубрика:</div>
        <div className="right-tc">
          <Field
            name="headingProduct"
            component="select"
            className="heading-tc"
          >
            {heading.map(option => {
              return (
                <option key={option.value} value={option.value}>
                  {option.name}
                </option>
              );
            })}
          </Field>
        </div>
      </div>
      <div className="title-container">
        <div className="left-tc">Модель:</div>
        <div className="right-tc">
          <Field name="modelProduct" component="select" className="heading-tc">
            {model.map(option => {
              return (
                <option key={option.value} value={option.value}>
                  {option.name}
                </option>
              );
            })}
          </Field>
        </div>
      </div>
      <div className="title-container">
        <div className="left-tc">Цвет:</div>
        <div className="right-tc">
          <Field name="colorProduct" component="select" className="heading-tc">
            {color.map(option => {
              return (
                <option key={option.value} value={option.value}>
                  {option.name}
                </option>
              );
            })}
          </Field>
        </div>
      </div>
      <div className="title-container">
        <div className="left-tc">Год выпуска:</div>
        <div className="right-tc">
          <Field name="dataProduct" component="select" className="heading-tc">
            {data.map(option => {
              return (
                <option key={option.value} value={option.value}>
                  {option.name}
                </option>
              );
            })}
          </Field>
        </div>
      </div>
      <div className="title-container">
        <div className="left-tc">Цена:</div>
        <div className="right-tc">
          <Field
            name="priceProduct"
            component="input"
            type="number"
            className="text-prices"
          />
          _тг.
        </div>
      </div>
      <div className="title-container">
        <div className="left-tc">Описание:</div>
        <div className="right-tc">
          <Field
            name="textareaProduct"
            component="textarea"
            className="text-area"
            cols="80"
            rows="1"
          />
        </div>
      </div>
      <div className="title-container">
        <div className="left-tc">Добавить фото:</div>
        <div className="right-tc">
          <div className="add-img">
            <Field
              name="imageProduct"
              component={FileInput}
              type="file"
              className="add-img-file"
              accept="image/jpeg,image/gif,image/png"
            />
          </div>
        </div>
      </div>
      <div className="button-container">
        <Link to="/">
          <button type="button" className="backButton">
            Отмена
          </button>
        </Link>
        <button type="button" className="resetButton" onClick={reset}>
          Сбросить все
        </button>
        <button
          type="submit"
          className="nextButton"
          disabled={!valid || pristine || submitting}
        >
          Опубликовать
        </button>
      </div>
    </form>
  );
};

ProductForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired,
  valid: PropTypes.bool.isRequired,
  pristine: PropTypes.bool.isRequired
};

FileInput.propTypes = {
  meta: PropTypes.shape({
    omitMeta: PropTypes.func
  }).isRequired,
  input: PropTypes.shape({
    onChange: PropTypes.func.isRequired
  }).isRequired
};

export default reduxForm({
  form: "productForm"
})(ProductForm);

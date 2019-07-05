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

const validate = values => {
  const errors = {};
  if (!values.titleProduct) {
    errors.titleProduct = "Required";
  } else if (values.titleProduct.length < 10) {
    errors.titleProduct = "Must be 10 characters or less";
  }
  if (!values.codeProduct) {
    errors.codeProduct = "Required";
  } else if (Number.isNaN(values.codeProduct)) {
    errors.codeProduct = "Must be a number";
  } else if (Number(values.codeProduct.length) < 8) {
    errors.codeProduct = "Must be 8 characters or less";
  }
  if (!values.priceProduct) {
    errors.priceProduct = "Required";
  }
  if (!values.textareaProduct) {
    errors.textareaProduct = "Required";
  } else if (values.textareaProduct.length < 60) {
    errors.textareaProduct = "Must be 60 characters or less";
  }
  return errors;
};

const renderField = ({
  input,
  className,
  type,
  textarea,
  meta: { touched, error, warning }
}) => {
  const textareaType = (
    <textarea {...input} className={className} type={type} />
  );
  const inputType = <input {...input} className={className} type={type} />;
  return (
    <div>
      <div>
        {textarea ? textareaType : inputType}
        {touched &&
          ((error && <span style={{ color: "red" }}>{error}</span>) ||
            (warning && <span style={{ color: "red" }}>{warning}</span>))}
      </div>
    </div>
  );
};

const ProductForm = ({ handleSubmit, reset, valid, submitting, pristine }) => {
  const { heading, model, color, data } = Constants;
  return (
    <form onSubmit={handleSubmit(value => console.log(value))}>
      <div className="title-container">
        <div className="left-tc">Заголовок:</div>
        <div className="right-tc">
          <Field
            name="titleProduct"
            type="text"
            component={renderField}
            className="text-header"
          />
        </div>
      </div>
      <div className="title-container">
        <div className="left-tc">Код товара:</div>
        <div className="right-tc">
          <Field
            name="codeProduct"
            type="number"
            component={renderField}
            className="code-product"
          />
        </div>
      </div>
      <div className="title-container">
        <div className="left-tc">Рубрика:</div>
        <div className="right-tc">
          <Field
            name="headingProduct"
            type="select"
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
          <Field
            name="modelProduct"
            type="select"
            component="select"
            className="heading-tc"
          >
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
          <Field
            name="colorProduct"
            type="select"
            component="select"
            className="heading-tc"
          >
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
          <Field
            name="dataProduct"
            type="select"
            component="select"
            className="heading-tc"
          >
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
            type="number"
            component={renderField}
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
            type="textarea"
            component={renderField}
            className="text-area"
            cols="80"
            rows="1"
            textarea
          />
        </div>
      </div>
      <div className="title-container">
        <div className="left-tc">Добавить фото:</div>
        <div className="right-tc">
          <div className="add-img">
            <Field
              name="imageProduct"
              type="file"
              component={FileInput}
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
    onChange: PropTypes.func
  }).isRequired
};

renderField.propTypes = {
  input: PropTypes.shape({
    name: PropTypes.string
  }).isRequired,
  className: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  textarea: PropTypes.bool,
  meta: PropTypes.shape({
    touched: PropTypes.bool.isRequired
  }).isRequired
};

renderField.defaultProps = {
  textarea: false
};

export default reduxForm({
  form: "productForm",
  validate
})(ProductForm);

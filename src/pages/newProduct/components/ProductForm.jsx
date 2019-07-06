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
  const requiredMassage = " Required";
  if (!values.title) {
    errors.title = requiredMassage;
  } else if (values.title.length < 10) {
    errors.title = "Must be 10 characters or less";
  }
  if (!values.code) {
    errors.code = requiredMassage;
  } else if (Number.isNaN(values.code)) {
    errors.code = "Must be a number";
  } else if (Number(values.code.length) < 8) {
    errors.code = "Must be 8 characters or less";
  }
  if (!values.price) {
    errors.price = requiredMassage;
  }
  if (!values.textarea) {
    errors.textarea = requiredMassage;
  } else if (values.textarea.length < 60) {
    errors.textarea = "Must be 60 characters or less";
  }
  if (values.heading === "_") {
    errors.heading = requiredMassage;
  }
  if (values.model === "_") {
    errors.model = requiredMassage;
  }
  if (values.color === "_") {
    errors.color = requiredMassage;
  }
  if (values.data === "_") {
    errors.data = requiredMassage;
  }
  return errors;
};

const renderField = ({
  input,
  className,
  type,
  textarea,
  children,
  select,
  meta: { touched, error, warning }
}) => {
  const textareaTypes = (
    <textarea {...input} className={className} type={type} />
  );
  const selectTypes = (
    <select {...input} className={className} type={type}>
      {children}
    </select>
  );
  const inputTypes = <input {...input} className={className} type={type} />;
  const result = select ? selectTypes : inputTypes;
  return (
    <div style={{ display: "flex", alignItems: "baseline" }}>
      {textarea ? textareaTypes : result}
      {touched &&
        ((error && (
          <span style={{ color: "red", paddingLeft: "5px" }}>
            <i className="fas fa-exclamation-circle"></i>
            {error}
          </span>
        )) ||
          (warning && (
            <span style={{ color: "red", paddingLeft: "5px" }}>
              <i className="fas fa-exclamation-circle"></i>
              {warning}
            </span>
          )))}
    </div>
  );
};

const ProductForm = ({
  handleSubmitAddProduct,
  handleSubmit,
  reset,
  valid,
  submitting,
  pristine
}) => {
  const { heading, model, color, data } = Constants;
  return (
    <form
      onSubmit={handleSubmit(value => {
        return handleSubmitAddProduct(value);
      })}
    >
      <div className="title-container">
        <div className="left-tc">Заголовок:</div>
        <div className="right-tc">
          <Field
            name="title"
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
            name="code"
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
            name="heading"
            type="select"
            component={renderField}
            className="heading-tc"
            select
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
            name="model"
            type="select"
            component={renderField}
            className="heading-tc"
            select
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
            name="color"
            type="select"
            component={renderField}
            className="heading-tc"
            select
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
            name="data"
            type="select"
            component={renderField}
            className="heading-tc"
            select
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
        <div className="left-tc">Цена(тг):</div>
        <div className="right-tc">
          <Field
            name="price"
            type="number"
            component={renderField}
            className="text-prices"
          />
        </div>
      </div>
      <div className="title-container">
        <div className="left-tc">Описание:</div>
        <div className="right-tc">
          <Field
            name="textarea"
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
              name="image"
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
  handleSubmitAddProduct: PropTypes.func.isRequired,
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
  select: PropTypes.bool,
  children: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string
    })
  ),
  meta: PropTypes.shape({
    touched: PropTypes.bool.isRequired
  }).isRequired
};

renderField.defaultProps = {
  textarea: false,
  select: false,
  children: []
};

export default reduxForm({
  form: "productForm",
  validate
})(ProductForm);

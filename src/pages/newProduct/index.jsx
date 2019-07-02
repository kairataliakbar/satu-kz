import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import ProductForm from "./components/ProductForm";
import { addProduct } from "./productAction";

const NewProduct = ({ addInAction }) => {
  const handleSubmit = values => addInAction(values);

  return (
    <div className="main">
      <div className="top-main">Подать объявление на SATU.KZ</div>
      <div className="body-main">
        <ProductForm onSubmit={handleSubmit} />
      </div>
    </div>
  );
};

NewProduct.propTypes = {
  addInAction: PropTypes.func.isRequired
};

export default connect(
  null,
  { addInAction: addProduct }
)(NewProduct);

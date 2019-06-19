/* eslint-disable no-console */
import React from "react";
import { connect } from "react-redux";

import ProductForm from "./components/ProductForm";
import productAction from "./action";

const NewProduct = props => {
  console.log(props);
  return (
    <div className="main">
      <div className="top-main">Подать объявление на SATU.KZ</div>
      <div className="body-main">
        <ProductForm />
      </div>
    </div>
  );
};

function mapDispatchToProps(dispatch) {
  return {
    productState: state => {
      dispatch(productAction(state));
    }
  };
}

export default connect(mapDispatchToProps)(NewProduct);

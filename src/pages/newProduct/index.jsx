import React from "react";
import { connect } from "react-redux";

import ProductForm from "./components/ProductForm";

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

export default connect(state => state)(NewProduct);

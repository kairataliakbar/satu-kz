import React from "react";
import { connect } from "react-redux";

import PageProduct from "./components/pageProduct";

const ProductDetales = props => {
  const productCode = props.match.params.code;
  const { products } = props;
  const code = parseInt(productCode, 10);
  return (
    <div className="main">
      {products.map(product => {
        if (product.code === code) {
          return <PageProduct product={product} />;
        }
        return null;
      })}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    products: state.products
  };
};

export default connect(mapStateToProps)(ProductDetales);

import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import PageProduct from "./components/PageProduct";

const ProductDetails = ({ match, products }) => {
  const { code } = match.params;
  return (
    <div className="main">
      {products.map(product => {
        if (product.code === code) {
          return <PageProduct key={code} product={product} />;
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

ProductDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      code: PropTypes.node
    }).isRequired
  }).isRequired,
  products: PropTypes.arrayOf(
    PropTypes.shape({
      code: PropTypes.string.isRequired
    })
  ).isRequired
};

export default connect(mapStateToProps)(ProductDetails);

import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import PageProduct from "./components/pageProduct";

const ProductDetales = props => {
  const { match } = props;
  const { products } = props;
  const code = parseInt(match.params.code, 10);
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

ProductDetales.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      cod: PropTypes.node
    }).isRequired
  }).isRequired,
  products: PropTypes.arrayOf(
    PropTypes.shape({
      code: PropTypes.number.isRequired
    })
  ).isRequired
};

export default connect(mapStateToProps)(ProductDetales);

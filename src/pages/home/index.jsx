import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import Products from "./components/products";

const Home = ({ products }) => {
  return (
    <div className="main">
      <div className="bottom-main">
        <div className="top-bottom-main">Популярные товары прямо сейчас</div>
        <Products products={products} />
      </div>
    </div>
  );
};

Home.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      imgSrc: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired
    })
  ).isRequired
};

const mapStateToProps = state => {
  return {
    products: state.products
  };
};

export default connect(mapStateToProps)(Home);

import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import Products from "./components/products";
import addBasket from "../basket/basketAction";

const Home = ({ products, props }) => {
  const hendalBasketSubmit = value => props.addBasket(value);
  return (
    <div className="main">
      <div className="bottom-main">
        <div className="top-bottom-main">Популярные товары прямо сейчас</div>
        <Products onSubmit={hendalBasketSubmit} products={products} />
      </div>
    </div>
  );
};

Home.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({})).isRequired
};

const mapStateToProps = state => {
  return {
    products: state.products
  };
};

export default connect(
  mapStateToProps,
  { addBasket }
)(Home);

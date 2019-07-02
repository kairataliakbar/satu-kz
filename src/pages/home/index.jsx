import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addBasket } from "../basket/basketAction";

import Products from "./components/Products";

const Home = ({ inBasket, products }) => {
  const hendalSubmit = values => inBasket(values);

  return (
    <div className="main">
      <div className="bottom-main">
        <div className="top-bottom-main">Популярные товары прямо сейчас</div>
        <Products onSubmit={hendalSubmit} products={products} />
      </div>
    </div>
  );
};

Home.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  inBasket: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  return {
    products: state.products
  };
};

export default connect(
  mapStateToProps,
  { inBasket: addBasket }
)(Home);

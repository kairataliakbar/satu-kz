import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import Products from "./components/Products";
import { addBasket } from "../basket/basketAction";

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
  products: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired
    })
  ).isRequired,
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

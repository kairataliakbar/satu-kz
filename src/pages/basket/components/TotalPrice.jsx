import React from "react";
import PropTypes from "prop-types";

const TotalPrice = props => {
  const { products } = props;
  const arrays = products.map(product => parseInt(product.price, 10));
  return (
    <div className="basket-container-total">
      <div className="container-total-prices">
        <div className="container-total">ИТОГО</div>
        <div className="total-prices">
          {arrays.reduce((total, num) => total + num, 0)} ₸
        </div>
      </div>
      <div className="total-prices-button">
        <button type="button"></button>
      </div>
    </div>
  );
};

TotalPrice.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({})).isRequired
};

export default TotalPrice;

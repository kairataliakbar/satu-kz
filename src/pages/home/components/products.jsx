import React from "react";
import PropTypes from "prop-types";

const Products = ({ products }) => {
  return (
    <div className="container-bottom-main">
      {products.map(product => (
        <div key={product.title} className="forvord-container">
          <div className="forvord-container-img">
            <img src={product.imgSrc} alt={product.title} />
            <div className="forvord-container-text">{product.title}</div>
          </div>
          <div className="forvord-container-button">
            <div className="summa">{product.price}</div>
            <button type="button">В корзину</button>
            <button type="button">Купить в кредит</button>
          </div>
        </div>
      ))}
    </div>
  );
};

Products.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      imgSrc: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired
    })
  ).isRequired
};

export default Products;

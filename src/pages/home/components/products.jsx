import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Products = ({ products }) => {
  return (
    <div className="container-bottom-main">
      {products.map(product => (
        <div key={product.code} className="forvord-container">
          <Link to={`/product-detales/${product.code}`}>
            <div className="forvord-container-img">
              <img src={product.imgSrc} alt={product.title} />
              <div className="forvord-container-text">{product.title}</div>
              <div className="summa">{product.price} ₸</div>
            </div>
          </Link>
          <div className="forvord-container-button">
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
      price: PropTypes.string.isRequired,
      code: PropTypes.string.isRequired
    })
  ).isRequired
};

export default Products;

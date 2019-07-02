import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

class Products extends React.PureComponent {
  render() {
    const { products, onSubmit } = this.props;
    return (
      <div className="container-bottom-main">
        {products.map(product => (
          <div key={product.code} className="forvord-container">
            <Link to={`/product-details/${product.code}`}>
              <div className="forvord-container-img">
                <img src={product.imgSrc} alt={product.title} />
                <div className="forvord-container-text">{product.title}</div>
                <div className="summa">{product.price} ₸</div>
              </div>
            </Link>
            <div className="forvord-container-button">
              <button
                type="button"
                onClick={() => {
                  return onSubmit(product);
                }}
              >
                В корзину
              </button>
              <button type="button">Купить в кредит</button>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

Products.propTypes = {
  onSubmit: PropTypes.func.isRequired,
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

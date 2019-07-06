import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

class Products extends React.Component {
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e, product) {
    const { onSubmit } = this.props;
    return onSubmit(product);
  }

  render() {
    const { products } = this.props;
    return (
      <div className="container-bottom-main">
        {products.map(product => (
          <div key={product.code} className="forvord-container">
            <Link to={`/product-detales/${product.code}`}>
              <div className="forvord-container-img">
                <img src={product.image} alt={product.title} />
                <div className="forvord-container-text">{product.title}</div>
                <div className="summa">{product.price} ₸</div>
              </div>
            </Link>
            <div className="forvord-container-button">
              <button type="button" onClick={e => this.onSubmit(e, product)}>
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
      image: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      code: PropTypes.string.isRequired
    })
  ).isRequired
};

export default Products;

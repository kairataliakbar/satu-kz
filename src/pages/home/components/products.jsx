import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

class Products extends React.Component {
  constructor(props) {
    super(props);

    this.state = { basket: "" };

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit() {
    const { onSubmit } = this.props;
    const { basket } = this.state;
    return onSubmit(basket);
  }

  render() {
    const { products } = this.props;
    return (
      <div className="container-bottom-main">
        {products.map(product => (
          <div key={product.code} className="forvord-container">
            {this.setState({ basket: product })}
            <Link to={`/product-detales/${product.code}`}>
              <div className="forvord-container-img">
                <img src={product.imgSrc} alt={product.title} />
                <div className="forvord-container-text">{product.title}</div>
                <div className="summa">{product.price} ₸</div>
              </div>
            </Link>
            <div className="forvord-container-button">
              <button type="button" onClick={this.onSubmit}>
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

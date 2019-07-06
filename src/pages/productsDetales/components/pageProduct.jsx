import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { deleteProduct } from "../../newProduct/productAction";
import { addBasket } from "../../basket/basketAction";

class PageProduct extends React.Component {
  constructor(props) {
    super(props);

    this.onClick = this.onClick.bind(this);
    this.onAddBasket = this.onAddBasket.bind(this);
  }

  onClick() {
    const { product, deleteInProduct } = this.props;
    deleteInProduct(product);
  }

  onAddBasket() {
    const { product, addInBasket } = this.props;
    addInBasket(product);
  }

  render() {
    const { product } = this.props;
    return (
      <div className="product-detales-container">
        <div className="container-product">
          <div className="image-product-container">
            <img alt="product" src={product.image} />
          </div>
        </div>
        <div className="right-container-product">
          <div className="bottom-container-product">
            <Link className="link-button" to="/">
              <button type="button" onClick={this.onClick}>
                Удалить
              </button>
            </Link>
            <button type="button">Редактировать</button>
          </div>
          <div className="headline-conatiner">{product.title}</div>
          <div className="prices-product">
            <div className="prices-product-container">{product.price} ₸</div>
          </div>
          <div className="bottom-container-product">
            <button type="button" onClick={this.onAddBasket}>
              В корзину
            </button>
            <button type="button">Купить в кредит</button>
          </div>
          <div className="text-area-container">{product.textarea}</div>
        </div>
      </div>
    );
  }
}

PageProduct.propTypes = {
  deleteInProduct: PropTypes.func.isRequired,
  addInBasket: PropTypes.func.isRequired,
  product: PropTypes.shape({
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    textarea: PropTypes.string.isRequired
  }).isRequired
};

export default connect(
  null,
  { deleteInProduct: deleteProduct, addInBasket: addBasket }
)(PageProduct);

import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import Modal from "react-responsive-modal";
import TotalPrice from "./components/TotalPrice";
import { deleteBasket } from "./basketAction";

class Basket extends React.Component {
  constructor(props) {
    super(props);

    this.state = { showModal: false, deleteProduct: "" };

    this.onClick = this.onClick.bind(this);
    this.exitModal = this.exitModal.bind(this);
    this.hendalSubmitDelete = this.hendalSubmitDelete.bind(this);
  }

  onClick(product) {
    this.setState({ showModal: true, deleteProduct: product });
  }

  hendalSubmitDelete() {
    const { deleteProduct } = this.state;
    const { deleteInBasket } = this.props;
    deleteInBasket(deleteProduct);
    this.setState({ showModal: false });
  }

  exitModal(e) {
    e.preventDefault();
    this.setState({ showModal: false });
  }

  render() {
    const { showModal } = this.state;
    const { baskets } = this.props;
    return (
      <div className="main">
        <div className="top-bottom-main">Корзина - ОФОРМЛЕНИЕ ЗАКАЗА</div>
        <div className="basket-container">
          {baskets.map(product => (
            <div key={product.code}>
              <div className="basket-container-product">
                <img
                  src={product.image}
                  alt={product.code}
                  className="basket-img"
                />
                <div className="basket-container-text">
                  <div className="basket-headline">{product.title}</div>
                  <div className="basket-codProduct">
                    Код товара: {product.code}
                  </div>
                  <div className="basket-prices">
                    Цена товара: {product.price} ₸
                  </div>
                </div>
                <div className="basket-button-container">
                  <span>
                    <input
                      type="button"
                      className="button-delete-basket"
                      onClick={() => this.onClick(product)}
                      value="&times;"
                    />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <TotalPrice products={baskets} />
        <Modal open={showModal} onClose={this.exitModal}>
          <div className="modal-basket-text">
            Вы действительно хотите удалить данный продукт с корзины?
          </div>
          <div className="modal-basket-button">
            <button
              type="button"
              className="close-basket-button"
              onClick={this.exitModal}
            >
              <i className="far fa-times-circle"></i>
            </button>
            <button
              type="button"
              className="delete-basket-button"
              onClick={this.hendalSubmitDelete}
            >
              <i className="far fa-check-circle"></i>
            </button>
          </div>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    basket: state.basket
  };
};

Basket.propTypes = {
  deleteInBasket: PropTypes.func.isRequired,
  baskets: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string.isRequired,
      code: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired
    })
  ).isRequired
};

export default connect(
  mapStateToProps,
  { deleteInBasket: deleteBasket }
)(Basket);

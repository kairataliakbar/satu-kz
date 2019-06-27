import React from "react";

import Modal from "react-responsive-modal";
import { connect } from "react-redux";
import PropTypes from "prop-types";

class Basket extends React.Component {
  constructor(props) {
    super(props);

    this.state = { showModal: false };

    this.onClick = this.onClick.bind(this);

    this.exitModal = this.exitModal.bind(this);
  }

  onClick() {
    this.setState({ showModal: true });
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
          {baskets.map(basket => (
            <div key={basket.code}>
              <div className="basket-container-product">
                <img
                  src={basket.imgSrc}
                  alt={basket.code}
                  className="basket-img"
                />
                <div className="basket-container-text">
                  <div className="basket-headline">{basket.title}</div>
                  <div className="basket-codProduct">
                    Код товара: {basket.code}
                  </div>
                  <div className="basket-prices">
                    Цена товара: {basket.price} ₸
                  </div>
                </div>
                <div className="basket-button-container">
                  <span>
                    <input
                      type="button"
                      className="button-delete-basket"
                      onClick={this.onClick}
                      value="&times;"
                    />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="basket-container-total">
          <div className="container-total-prices">
            <div className="container-total">ИТОГО</div>
            <div className="total-prices"></div>
          </div>
          <div className="total-prices-button">
            <button type="button"></button>
          </div>
        </div>
        <Modal open={showModal} onClose={this.exitModal}>
          <div className="modal-basket-text">
            Вы действительно хотите удалить данное объявление с корзины?
          </div>
          <div className="modal-basket-button">
            <button
              type="button"
              className="close-basket-button"
              onClick={this.exitModal}
            >
              <i className="far fa-times-circle"></i>
            </button>
            <button type="button" className="delete-basket-button">
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
    baskets: state.baskets
  };
};

Basket.propTypes = {
  baskets: PropTypes.arrayOf(
    PropTypes.shape({
      imgSrc: PropTypes.string.isRequired,
      code: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired
    })
  ).isRequired
};

export default connect(mapStateToProps)(Basket);

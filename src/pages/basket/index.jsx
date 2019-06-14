/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable import/no-unresolved */
import React from "react";
import Modal from "../../components/Modal";

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
    return (
      <div className="main">
        <div className="top-bottom-main" onClick={this.onClick}>
          Корзина - ОФОРМЛЕНИЕ ЗАКАЗА
        </div>
        <div className="basket-container"></div>
        <div className="basket-container-total">
          <div className="container-total-prices">
            <div className="container-total">ИТОГО</div>
            <div className="total-prices"></div>
          </div>
          <div className="total-prices-button">
            <button></button>
          </div>
        </div>
        {this.state.showModal && (
          <Modal>
            <div className="modal-win" onClick={this.exitModal}>
              <div
                className="modal-basket-container"
                onClick={e => e.stopPropagation()}
              >
                <div className="modal-basket-text">
                  Вы действительно хотите удалить данное объявление с корзины?
                </div>
                <div className="modal-basket-button">
                  <button className="close-basket-button">
                    <i
                      className="far fa-times-circle"
                      onClick={this.exitModal}
                    ></i>
                  </button>
                  <button className="delete-basket-button">
                    <i className="far fa-check-circle"></i>
                  </button>
                </div>
              </div>
            </div>
          </Modal>
        )}
      </div>
    );
  }
}

export default Basket;

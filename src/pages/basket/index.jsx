import React from "react";
import Modal from "react-responsive-modal";

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
    return (
      <div className="main">
        <div className="top-bottom-main">Корзина - ОФОРМЛЕНИЕ ЗАКАЗА</div>
        <div className="basket-container"></div>
        <div className="basket-container-total">
          <div className="container-total-prices">
            <div className="container-total">ИТОГО</div>
            <div className="total-prices"></div>
          </div>
          <div className="total-prices-button">
            <button type="button" onClick={this.onClick}></button>
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

export default Basket;

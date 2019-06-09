import React from 'react';
import Modal from '../../components/Modal.jsx';

class Basket extends React.Component {
  constructor(props) {
    super(props);

    this.state = { showModal: false };

    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({ showModal: true });
  }

  render() {
    return(
      <div className="main">
        <div className="top-bottom-main" onClick={this.onClick}>Корзина - ОФОРМЛЕНИЕ ЗАКАЗА</div>
        <div className="basket-container">
        </div>
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
            <div className="modal-win">
              <div className="modal-basket-container">
                <div className="modal-basket-text">Вы действительно хотите удалить данное объявление с корзины?</div>
                <div className="modal-basket-button">
                  <button className="close-basket-button"><i class="far fa-times-circle"></i></button>
                  <button className="delete-basket-button"><i class="far fa-check-circle"></i></button>
                </div>
              </div>
            </div>
          </Modal>
        )}
      </div>
    )
  }
}

export default Basket;
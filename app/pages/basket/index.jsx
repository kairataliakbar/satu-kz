import React from 'react';

class Basket extends React.Component {
  render() {
    return(
      <div className="main">
        <div className="top-bottom-main">Корзина - ОФОРМЛЕНИЕ ЗАКАЗА</div>
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
      </div>
    )
  }
}

export default Basket;
import React from "react";

const ProductDetales = () => {
  return (
    <div className="main">
      <div className="container-product">
        <div className="image-product-container">
          <img alt="product" />
        </div>
      </div>
      <div className="right-container-product">
        <div className="button-admin-product">
          <button>Удалить</button>
          <button>Редактировать</button>
        </div>
        <div className="headline-conatiner"></div>
        <div className="prices-product">
          <div className="prices-product-container"></div>
        </div>
        <div className="bottom-container-product">
          <button>В корзину</button>
          <button>Купить в кредит</button>
        </div>
        <div className="text-area-container"></div>
      </div>
    </div>
  );
};

module.exports = ProductDetales;

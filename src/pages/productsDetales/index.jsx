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
          <button type="button">Удалить</button>
          <button type="button">Редактировать</button>
        </div>
        <div className="headline-conatiner"></div>
        <div className="prices-product">
          <div className="prices-product-container"></div>
        </div>
        <div className="bottom-container-product">
          <button type="button">В корзину</button>
          <button type="button">Купить в кредит</button>
        </div>
        <div className="text-area-container"></div>
      </div>
    </div>
  );
};

export default ProductDetales;

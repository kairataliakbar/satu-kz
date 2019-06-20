import React from "react";
import ProductForm from "./components/productForm";

const CreateProduct = () => {
  return (
    <div className="main">
      <div className="top-main">Подать объявление на SATU.KZ</div>
      <div className="body-main">
        <ProductForm />
      </div>
    </div>
  );
};

export default CreateProduct;

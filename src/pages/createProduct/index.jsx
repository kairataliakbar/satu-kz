import React from "react";
import Form from "./components/productForm";

const CreateProduct = () => {
  return (
    <div className="main">
      <div className="top-main">Подать объявление на SATU.KZ</div>
      <div className="body-main">
        <Form />
      </div>
    </div>
  );
};

export default CreateProduct;

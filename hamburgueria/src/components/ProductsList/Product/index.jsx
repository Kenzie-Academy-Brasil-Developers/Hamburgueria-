import React from "react";

import "./Product.css";

const Product = ({ product, buttonAdd }) => {
  return (
    <li className="cardapio">
      <figure>
        <img src={product.img} alt={product.name} />
      </figure>
      <div className="container">
        <div className="descricao">
          <h2>{product.name}</h2>
          <p className="Body-600">{product.category}</p>
          <h3 className="Heading3">R$ {product.price}</h3>
          <button className="button1" onClick={() => buttonAdd(product)}>
            Adicionar
          </button>
        </div>
      </div>
    </li>
  );
};

export default Product;

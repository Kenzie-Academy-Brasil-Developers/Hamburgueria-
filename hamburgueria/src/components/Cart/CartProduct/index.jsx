import React from "react";
import "./CartProduct.css";

const CartProduct = ({ cart, buttonRemove }) => {
  return (
    <li className="itensCart">
      <figure className="figureCart">
        <img src={cart.img} alt={cart.name} />
      </figure>
      <div className="descricaoCart">
        <h3>{cart.name}</h3>
        <p>{cart.category}</p>
      </div>
      <button className="btnRemover" onClick={() => buttonRemove(cart)}>
        Remover
      </button>
    </li>
  );
};

export default CartProduct;

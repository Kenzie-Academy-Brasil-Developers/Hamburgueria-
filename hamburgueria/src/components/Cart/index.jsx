import React from "react";
import CartProduct from "./CartProduct";
import "./Cart.css";

const Cart = ({ cartItems, buttonRemove, removeAll }) => {
  const totalPrice = cartItems.reduce((valorAnterior, itemAtual) => {
    return itemAtual.price + valorAnterior;
  }, 0);
  return (
    <aside className="containerCarrinho">
      <div className="titulo">
        <h2 className="Heading2">Carrinho de compras</h2>
      </div>
      {cartItems.length ? (
        <>
          <div className="itens">
            {cartItems.map((cart) => (
              <CartProduct
                cart={cart}
                key={cart.id}
                buttonRemove={buttonRemove}
              />
            ))}
          </div>
          <div className="containerSoma">
            <div className="totalSoma">
              <h4>TOTAL:</h4>
              <p>R${totalPrice}</p>
            </div>

            <button className="button2" onClick={() => removeAll()}>
              Remover Todos
            </button>
          </div>
        </>
      ) : (
        <div className="cartItemsVazio">
          <h3>Sua sacola está vazia</h3>
          <p>adicione itens</p>
        </div>
      )}
    </aside>
  );
};

export default Cart;

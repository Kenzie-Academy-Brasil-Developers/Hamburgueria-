/* eslint-disable no-restricted-globals */
import { useState, useEffect } from "react";
import Cart from "./components/Cart";
import Header from "./components/Header";
import ProductsList from "./components/ProductsList";
import api from "./services/api";
import "./App.css";
import "./styles/reset.css";
import "../src/styles/global.css";
function App() {
  const [products, setProducts] = useState([]);

  /*   const [filtered, setFiltered] = useState("");
  console.log(filtered); */

  useEffect(() => {
    api
      .get("products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const [cartItems, setCartItems] = useState([]);

  function buttonAdd(product) {
    if (!cartItems.find((cart) => cart.id === product.id)) {
      setCartItems([...cartItems, product]);
    } else {
      alert("Este item já foi adicionado.");
    }
  }

  function buttonRemove(ItemCard) {
    const newCardItems = cartItems.filter((cart) => cart !== ItemCard);

    if (confirm("Deseja excluir mesmo este item?")) {
      setCartItems(newCardItems);
    }
  }

  function removeAll() {
    setCartItems([]);
  }

  return (
    <>
      <header>
        <Header />
        {/*   <Search
          value={filtered}
          onChange={(event) => setFiltered(event.target.value)}
        /> */}
      </header>
      <div className="containerApp">
        <section>
          <ProductsList
            products={products}
            cartItems={cartItems}
            buttonAdd={buttonAdd}
          />
        </section>
        <aside>
          <Cart
            key={cartItems.id}
            cartItems={cartItems}
            buttonAdd={buttonAdd}
            buttonRemove={buttonRemove}
            removeAll={removeAll}
          />
        </aside>
      </div>
    </>
  );
}

export default App;

import React from "react";
import Logo from "../../assets/logo.png";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <img src={Logo} alt="Burguer Kenzie" />
      <form className="containerPesq">
        <input placeholder="Digitar Pesquisa" />
        <button className="button1">Pesquisar</button>
      </form>
    </header>
  );
};

export default Header;

import React from "react";
import "./Search.css";

const Search = ({ valor, setSearch, search }) => {
  return (
    <form className="containerPesq">
      <input
        placeholder="Buscar por..."
        type="search"
        onChange={(event) => setSearch(event.target.value, ...search)}
      />
      <button className="button1" type="submit">
        Pesquisar
      </button>
    </form>
  );
};

export default Search;

import React from "react";

const Search = ({ value, onChange }) => {
  return <input type="search" value={value} onChange={onChange} />;
};

export default Search;

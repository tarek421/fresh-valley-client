import React from "react";

const SearchBar = () => {
  const buttonStyle = {
    margin: "0",
    padding: "0 28px",
    background: "#56a956",
  };
  const searchStyle = {
    maxWidth: "100%",
    width: "350px",
    margin: "auto",
  };
  return (
    <div style={searchStyle} className="input-group search-bar">
      <div class="form-outline">
        <input type="search" id="form1" className="form-control" />
      </div>
      <button style={buttonStyle} type="button" className="btn btn-primary">
        Search
      </button>
    </div>
  );
};

export default SearchBar;

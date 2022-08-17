import React from "react";
import "./SearchBox.scss";

const SearchBox = (props) => {
  const { searchTerm, handleInput } = props;

  return (
    <div className="searchBox">
      <input
        type="text"
        value={searchTerm}
        onChange={handleInput}
        placeholder="Choose Your Weakness..."
      />
    </div>
  );
};

export default SearchBox;

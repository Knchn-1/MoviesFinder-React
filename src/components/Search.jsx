
import React from "react";
import "./Search.css";

function Search({ onSearchInput }) {
  const handleInputChange = (event) => {
    const query = event.target.value;
    onSearchInput(query);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search for a Movie..."
        className="search"
        onChange={handleInputChange}
      />
    </div>
  );
}

export default Search;


import React from "react";

function Search({plantSearch, onSearchChange}) {
  // SearchByName step 4. accept the props
  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        // SearchByName step 5. set value to plantSearch and create a function that on change would send the onSearchChange to the e.target.value 
        onChange ={(e) => onSearchChange(e.target.value)}
        value = {plantSearch}
      />
    </div>
  );
}

export default Search;

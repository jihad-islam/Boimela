import React from "react";
import PropTypes from "prop-types";

function Search({ searchTerm, onSearchBook }) {
  return (
    <form>
      <input
        type="text"
        placeholder="Search Books..."
        value={searchTerm}
        onChange={(event) => onSearchBook(event.target.value)} // This is the change
        className="mb-4 border rounded-md p-1 w-full"
      />
    </form>
  );
}

Search.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  onSearchBook: PropTypes.func.isRequired,
};
export default Search;

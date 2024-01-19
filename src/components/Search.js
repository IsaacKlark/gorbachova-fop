import React from "react";
import PropTypes from "prop-types";
import { ReactComponent as SearchIcon } from "../assets/images/search.svg";

const Search = ({ search, setSearch }) => {
  return (
    <div className="search">
      <SearchIcon />
      <input
        type="text"
        name="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search"
      />
    </div>
  )
}

Search.propTypes = {
  search: PropTypes.string.isRequired,
  setSearch: PropTypes.func.isRequired,
};

export default Search;

import React from "react";

const FilterBar = ({ onFilterChange }) => {
  return (
    <div className="filter-bar">
      <button onClick={() => onFilterChange("favorites")}>Favorites</button>
      <button onClick={() => onFilterChange("read")}>Read</button>
      <button onClick={() => onFilterChange("unread")}>Unread</button>
    </div>
  );
};

export default FilterBar;

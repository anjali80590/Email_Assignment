
import React from "react";

const Filters = ({ activeFilter, onFilterChange }) => {
  return (
    <div className="flex p-4 bg-background">
      <span className="mr-4 font-medium mt-2 text-text">Filter By:</span>
      {["Unread", "Read", "Favorites"].map((filter) => (
        <button
          key={filter}
          onClick={() => onFilterChange(filter.toLowerCase())}
          className={`px-4 py-2 mx-2 text-sm rounded-2xl font-medium ${
            activeFilter === filter.toLowerCase()
              ? " bg-gray-200 text-black" 
              : " text-gray-600 " 
          } border border-border`}
        >
          {filter}
        </button>
      ))}
    </div>
  );
};

export default Filters;

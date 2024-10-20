// // src/components/Filters.js
// import React from "react";

// const Filters = ({ activeFilter, onFilterChange }) => {
//   return (
//     <div className="flex p-4 bg-gray-100">
//       <span className="mr-4 font-bold">Filter By:</span>
//       {["Unread", "Read", "Favorites"].map((filter) => (
//         <button
//           key={filter}
//           onClick={() => onFilterChange(filter.toLowerCase())}
//           className={`px-4 py-2 mx-2 text-sm rounded ${
//             activeFilter === filter.toLowerCase()
//               ? "bg-gray-300 text-black"
//               : "bg-white text-gray-600"
//           }`}
//         >
//           {filter}
//         </button>
//       ))}
//     </div>
//   );
// };

// export default Filters;
// src/components/Filters.js
// import React from 'react';

// const Filters = ({ activeFilter, onFilterChange }) => {
//   return (
//     <div className="flex p-4 bg-background">
//       <span className="mr-4 font-bold">Filter By:</span>
//       {['Unread', 'Read', 'Favorites'].map((filter) => (
//         <button
//           key={filter}
//           onClick={() => onFilterChange(filter.toLowerCase())}
//           className={`px-4 py-2 mx-2 text-sm rounded ${
//             activeFilter === filter.toLowerCase()
//               ? 'bg-filterButton text-black'
//               : 'bg-white text-gray-600'
//           }`}
//         >
//           {filter}
//         </button>
//       ))}
//     </div>
//   );
// };

// export default Filters;
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
              ? " bg-gray-200 text-black" // When active
              : " text-gray-600 " // Inactive state
          } border border-border`}
        >
          {filter}
        </button>
      ))}
    </div>
  );
};

export default Filters;

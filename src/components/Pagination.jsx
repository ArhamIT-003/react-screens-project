import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const handleClick = (page) => {
    // Prevent navigating to invalid pages
    if (page < 1 || page > totalPages) {
      return;
    }
    onPageChange(page);
  };

  const pagesToDisplay = () => {
    let pages = [];
    if (currentPage > 1) {
      pages.push(currentPage - 1); // Previous page
    }
    pages.push(currentPage); // Current page
    if (currentPage < totalPages) {
      pages.push(currentPage + 1); // Next page
    }
    return pages;
  };

  return (
    <ul className="pagination flex justify-center mt-4">
      {currentPage > 5 && (
        <li className="mr-2">
          <button
            onClick={() => handleClick(currentPage - 5)}
            className="px-3 py-1 bg-white text-gray-800 hover:bg-gray-100 focus:outline-none focus:border-blue-300 focus:ring focus:ring-blue-200"
          >
            &laquo; Skip 5
          </button>
        </li>
      )}
      {pagesToDisplay().map((page, index) => (
        <li key={index} className="mr-2">
          <button
            onClick={() => handleClick(page)}
            className={`w-8 h-8 text-xs rounded-full border border-gray-300 ${
              currentPage === page
                ? "bg-blue-600 text-white"
                : "bg-white text-black hover:bg-gray-100"
            }`}
          >
            {page}
          </button>
        </li>
      ))}
      {currentPage <= (totalPages - 5) && (
        <li>
          <button
            onClick={() => handleClick(currentPage + 5)}
            className="px-3 py-1 bg-white text-gray-800 hover:bg-gray-100 focus:outline-none focus:border-blue-300 focus:ring focus:ring-blue-200"
          >
            Skip 5 &raquo;
          </button>
        </li>
      )}
    </ul>
  );
};

export default Pagination;

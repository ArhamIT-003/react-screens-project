const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const handleClick = (page) => {
    // Prevent navigating to invalid pages
    if (page < 1 || page > totalPages) {
      return;
    }
    // Call the onPageChange function with the new page number
    onPageChange(page);
  };

  return (
    <ul className="pagination flex justify-center mt-4">
      <li className="mr-2">
        <button
          onClick={() => handleClick(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-3 py-1 bg-white text-gray-800 hover:bg-gray-100 focus:outline-none focus:border-blue-300 focus:ring focus:ring-blue-200 disabled:opacity-50"
        >
          &laquo;
        </button>
      </li>
      {[...Array(totalPages).keys()].map((page) => (
        <li key={page} className="mr-2">
          <button
            onClick={() => handleClick(page + 1)}
            className={`w-8 h-8 text-xs rounded-full border border-gray-300 bg-blue-500 text-white hover:bg-gray-100 `}
          >
            {page + 1}
          </button>
        </li>
      ))}
      <li>
        <button
          onClick={() => handleClick(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-3 py-1 bg-white text-gray-800 hover:bg-gray-100 focus:outline-none focus:border-blue-300 focus:ring focus:ring-blue-200 disabled:opacity-50"
        >
          &raquo;
        </button>
      </li>
    </ul>
  );
};

export default Pagination;

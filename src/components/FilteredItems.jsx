import React, { useState } from "react";
import { useAuth } from "../providers/AuthProvider";
import useRFQs from "../hooks/useRFQs";
import FilterCard from "./FilterCard";
import Pagination from "./Pagination";

const ITEMS_PER_PAGE = 3;

const FilteredItems = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { user } = useAuth();

  // Fetch RFQs using the custom hook
  const rfqs = useRFQs(user.token, currentPage, ITEMS_PER_PAGE);
  const totalRFQs = rfqs?.length || 0;
  const totalPages = Math.ceil(totalRFQs / ITEMS_PER_PAGE);

  const onPageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="p-2">
      <h1 className="text-gray-900 font-semibold text-lg">Materials Requested</h1>
      <div className="flex flex-col gap-4">
        {rfqs && rfqs.map((rfq, index) => (
          <FilterCard key={index} data={rfq} />
        ))}
        {!rfqs && <p>Loading RFQs...</p>}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={onPageChange}
      />
    </div>
  );
};

export default FilteredItems;

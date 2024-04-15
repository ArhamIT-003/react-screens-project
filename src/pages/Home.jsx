import React, { useState, useEffect } from "react";
import Filter from "../components/Filter";
import FilteredItems from "../components/FilteredItems";
import { filterRFQs } from "../api/filter";
import { useAuth } from "../providers/AuthProvider";

const Home = () => {
  const { user } = useAuth();
  const [rfqs, setRFQs] = useState([]); // This will now store only the list of RFQs
  const [totalRFQs, setTotalRFQs] = useState(0); // New state for the total count of RFQs
  const [currentPage, setCurrentPage] = useState(1);
  const [filters, setFilters] = useState({}); // New state for filters [1/2
  const ITEMS_PER_PAGE = 5;

  // Function to update the list of RFQs, with or without filters
  const updateRFQs = async (filters, page = 1) => {
    setFilters(filters); // Update the filters state
    setCurrentPage(page); // Update the current page state
    const response = await filterRFQs(user.token, filters, page, ITEMS_PER_PAGE);
    if (response.data) {
      setRFQs(response.data.rfqs); // Update to handle the new response structure
      setTotalRFQs(response.data.total_count); // Set the total count of RFQs
    }
  };

  // Initial fetch without filters
  useEffect(() => {
    updateRFQs(filters, currentPage);
  }, [currentPage, user.token]);  // Re-fetch when page changes or user logs in/out

  return (
    <div className="w-full flex gap-4 m-4">
      <div className="flex-1 h-full border-2 border-gray-200 rounded-lg">
        <Filter onFilterSubmit={updateRFQs} />
      </div>
      <div className="flex-[4] h-full">
        <FilteredItems rfqs={rfqs} currentPage={currentPage} totalPages={Math.ceil(totalRFQs / ITEMS_PER_PAGE)} onPageChange={setCurrentPage} />
      </div>
    </div>
  );
};

export default Home;

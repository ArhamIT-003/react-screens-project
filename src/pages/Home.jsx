import React, { useState, useEffect } from "react";

import Filter from "../components/Filter";
import FilteredItems from "../components/FilteredItems";
import { filterRFQs } from "../api/filter";
import { useAuth } from "../providers/AuthProvider";

const Home = () => {
  const { user } = useAuth();
  const [rfqs, setRFQs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const ITEMS_PER_PAGE = 3;

  // Function to update the list of RFQs, with or without filters
  const updateRFQs = async (filters) => {
    const response = await filterRFQs(user.token, filters, currentPage, ITEMS_PER_PAGE);
    setRFQs(response.data || []);
  };

  // Initial fetch without filters
  useEffect(() => {
    updateRFQs({});
  }, [currentPage, user.token]);  // Re-fetch when page changes or user logs in/out

  return (
    <div className="w-full flex gap-4 m-4">
      <div className="flex-1 h-full border-2 border-gray-200 rounded-lg">
        <Filter onFilterSubmit={updateRFQs} />
      </div>
      <div className="flex-[4] h-full">
        <FilteredItems rfqs={rfqs} currentPage={currentPage} totalPages={Math.ceil(rfqs.length / ITEMS_PER_PAGE)} onPageChange={setCurrentPage} />
      </div>
    </div>
  );
};


export default Home;

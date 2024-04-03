import { useState } from "react";
import { filterCardData } from "../assets/data";
import FilterCard from "./FilterCard";
import Pagination from "./Pagination";

const ITEMS_PER_PAGE = 3;

const FilteredItems = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
  const indexofFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
  const currentItems = filterCardData.slice(indexofFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(filterCardData.length / ITEMS_PER_PAGE);

  const onPageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="p-2">
      <h1 className="text-gray-900 font-semibold text-lg">
        Materials Requested{" "}
      </h1>
      <div className="flex flex-col gap-4">
        {currentItems.map((item, index) => (
          <FilterCard key={index} data={item} />
        ))}
      </div>
      <div>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={onPageChange}
        />
      </div>
    </div>
  );
};

export default FilteredItems;

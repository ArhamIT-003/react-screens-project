import FilterCard from "./FilterCard";
import Pagination from "./Pagination";

const FilteredItems = ({ rfqs, currentPage, totalPages, onPageChange }) => {
  return (
    <div className="p-2">
      <h1 className="text-gray-900 font-semibold text-lg">Materials Requested</h1>
      <div className="flex flex-col gap-4">
        {rfqs && rfqs.map((rfq, index) => (
          <FilterCard key={index} rfq={rfq} />
        ))}
        {rfqs.length === 0 && <p>No RFQs found.</p>}
      </div>
      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={onPageChange} />
    </div>
  );
};


export default FilteredItems;

import { useState } from "react";

const Filter = ({ onFilterSubmit, resetToPage = 1 }) => {
  const [filterData, setFilterData] = useState({
    company: "",
    rfq_date: "",
    deadline: "",
    delivery_date: "",
    status: "", // single field to represent the status
  });

  const handleInputChange = (e) => {
    const { name, value, type } = e.target;
    setFilterData((prevData) => {
      // If the input is a radio button, we want to update the status field
      if (type === "radio" && e.target.checked) {
        return {
          ...prevData,
          status: value,
        };
      }
      // For other inputs, handle as before
      return {
        ...prevData,
        [name]: value,
      };
    });
  };

  const handleFilterSubmit = async () => {
    // Send a request to your API endpoint with the filterData
    console.log("Filter data:", filterData);
    onFilterSubmit(filterData, resetToPage);
  };

  const handleClear = () => {
    const clearedFilters = {
      company: "",
      rfq_date: "",
      deadline: "",
      delivery_date: "",
      status: "",
    };
  
    setFilterData(clearedFilters);
    onFilterSubmit(clearedFilters, resetToPage); // Use the clearedFilters directly
  };

  return (
    <div className="flex-1 p-4">
      <div className="flex flex-col gap-2">
        <h1 className="text-lg text-black font-normal">RFQ Information</h1>
        {/*Filter Input*/}
        <div>
          <div className="m-1">
            <label htmlFor="" className="text-xs text-gray-600">
              Company
            </label>
            <input
              type="text"
              name="company"
              value={filterData.company}
              className="border-2 border-gray-300 w-full mt-1 px-2 rounded-lg outline-none placeholder:text-sm"
              placeholder="ABC Company"
              onChange={handleInputChange}
            />
          </div>
          <div className="m-1">
            <label htmlFor="" className="text-xs text-gray-600">
              RFQ Fetch Date
            </label>
            <input
              type="date"
              name="rfq_date"
              value={filterData.rfq_date}
              className="border-2 border-gray-300 text-gray-400 text-sm w-full mt-2 px-2 rounded-lg outline-none"
              style={{ color: (filterData.rfq_date ? 'black' : 'gray') }}
              onChange={handleInputChange}
            />
          </div>
          <div className="m-1">
            <label htmlFor="" className="text-xs text-gray-600">
              Deadline
            </label>
            <input
              type="date"
              name="deadline"
              value={filterData.deadline}
              className="border-2 border-gray-300 text-gray-400 text-sm w-full mt-2 px-2 rounded-lg outline-none"
              style={{ color: (filterData.deadline ? 'black' : 'gray') }}
              onChange={handleInputChange}
            />
          </div>
          <div className="m-1">
            <label htmlFor="" className="text-xs text-gray-600">
              Delivery Date
            </label>
            <input
              type="date"
              name="delivery_date"
              value={filterData.delivery_date}
              className="border-2 border-gray-300 text-gray-400 text-sm w-full mt-2 px-2 rounded-lg outline-none"
              style={{ color: (filterData.delivery_date ? 'black' : 'gray') }}
              onChange={handleInputChange}
            />
          </div>
        </div>
        {/*Filter selection*/}
        <div className="flex items-center justify-between">
          <h1 className="text-black text-lg font-normal">Opciones</h1>
          <p
            className="text-xs font-normal text-gray-400 cursor-pointer underline"
            onClick={handleClear}
          >
            Clear
          </p>
        </div>

        <div className="space-y-4 my-2">
          <div className="flex items-center gap-10">
            <input
              type="radio"
              name="status"
              value="new"
              checked={filterData.status === "new"}
              onChange={handleInputChange}
              className="w-4 h-4"
              id="new"
            />
            <label htmlFor="new" className="text-xs text-gray-600">
              New
            </label>
          </div>

          <div className="flex items-center gap-10">
            <input
              type="radio"
              name="status"
              value="reserved"
              checked={filterData.status === "reserved"}
              onChange={handleInputChange}
              className="w-4 h-4"
              id="reserved"
            />
            <label htmlFor="reserved" className="text-xs text-gray-600">
              Reserved
            </label>
          </div>

          <div className="flex items-center gap-10">
            <input
              type="radio"
              name="status"
              value="sold"
              checked={filterData.status === "sold"}
              onChange={handleInputChange}
              className="w-4 h-4"
              id="sold"
            />
            <label htmlFor="sold" className="text-xs text-gray-600">
              Sold
            </label>
          </div>

          <div className="flex items-center gap-10">
            <input
              type="radio"
              name="status"
              value="offered"
              checked={filterData.status === "offered"}
              onChange={handleInputChange}
              className="w-4 h-4"
              id="offered"
            />
            <label htmlFor="offered" className="text-xs text-gray-600">
              Offered
            </label>
          </div>
        </div>

        <div className="w-full mt-4">
          <button
            className="text-white bg-blue-700 w-full px-4 py-2 rounded-lg font-medium text-xs uppercase"
            onClick={handleFilterSubmit}
          >
            Filtrar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Filter;

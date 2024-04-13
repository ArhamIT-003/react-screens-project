import axios from "axios";
import { useState } from "react";
import { useAuth } from "../providers/AuthProvider";

import { getFilteredRFQs } from "../hooks/useRFQ";

const Filter = () => {
  const { user } = useAuth();
  const [filterData, setFilterData] = useState({
    Company_Name: "",
    RFQ_Date: "",
    Deadline: "",
    Delivery_Date: "",
    new_status: "", // single field to represent the status
  });

  const handleInputChange = (e) => {
    const { name, value, type } = e.target;
    setFilterData((prevData) => {
      // If the input is a radio button, we want to update the new_status field
      if (type === "radio" && e.target.checked) {
        return {
          ...prevData,
          new_status: value,
        };
      }
      // For other inputs, handle as before
      return {
        ...prevData,
        [name]: value,
      };
    });
  };

  const handleFilterSubmit = () => {
    // Send a request to your API endpoint with the filterData
    console.log("Filter data:", filterData);
    const filteredRFQs = getFilteredRFQs(user.token, filterData);
    console.log("Filtered RFQs:", filteredRFQs)
  };

  const handleClear = () => {
    setFilterData({
      Company_Name: "",
      RFQ_Date: "",
      Deadline: "",
      Delivery_Date: "",
      new_status: "", // single field to represent the status
    });
    reloadComponent();
  };

  const reloadComponent = () => {
    // Reload the component here
    window.location.reload();
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
              name="Company_Name"
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
              name="RFQ_Date"
              className="border-2 border-gray-300 text-gray-400 text-sm w-full mt-2 px-2 rounded-lg outline-none"
              onChange={handleInputChange}
            />
          </div>
          <div className="m-1">
            <label htmlFor="" className="text-xs text-gray-600">
              Deadline Date
            </label>
            <input
              type="date"
              name="Deadline"
              className="border-2 border-gray-300 text-gray-400 text-sm w-full mt-2 px-2 rounded-lg outline-none"
              onChange={handleInputChange}
            />
          </div>
          <div className="m-1">
            <label htmlFor="" className="text-xs text-gray-600">
              Delivery Date
            </label>
            <input
              type="date"
              name="Delivery_Date"
              className="border-2 border-gray-300 text-gray-400 text-sm w-full mt-2 px-2 rounded-lg outline-none"
              onChange={handleInputChange}
            />
          </div>
        </div>
        {/*Filter selection*/}
        <div className="flex items-center justify-between">
          <h1 className="text-black text-lg font-normal">Opciones</h1>
          <p
            className="text-xs font-normal text-gray-400 cursor-pointer"
            onClick={handleClear}
          >
            Clear
          </p>
        </div>

        <div className="space-y-4 my-2">
          <div className="flex items-center gap-10">
            <input
              type="radio"
              name="new_status"
              value="new"
              checked={filterData.new_status === "new"}
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
              name="new_status"
              value="reserved"
              checked={filterData.new_status === "reserved"}
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
              name="new_status"
              value="sold"
              checked={filterData.new_status === "sold"}
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
              name="new_status"
              value="offered"
              checked={filterData.new_status === "offered"}
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

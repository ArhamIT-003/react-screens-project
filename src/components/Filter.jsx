import axios from "axios";
import { useState } from "react";

const Filter = () => {
  const [filterData, setFilterData] = useState({
    cliente: "",
    fetchaRFQ: "",
    deadlineDate: "",
    deliveryDate: "",
    vigente: false,
    reservada: false,
    parte: false,
    vendido: false,
    ofertado: false,
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFilterData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleFilterSubmit = () => {
    // Send a request to your API endpoint with the filterData
    axios
      .post("/api/filter", filterData)
      .then((response) => {
        // Handle the response data here
        console.log(response.data);
      })
      .catch((error) => {
        // Handle error
        console.error("Error filtering data:", error);
      });
  };
  return (
    <div className="flex-1 p-4">
      <div className="flex flex-col gap-2">
        <h1 className="text-lg text-black font-normal">RFQ Information</h1>
        {/*Filter Input*/}
        <div>
          <div className="m-1">
            <label htmlFor="" className="text-xs text-gray-600">
              Cliente
            </label>
            <input
              type="text"
              className="border-2 border-gray-300 w-full mt-1 px-2 rounded-lg outline-none placeholder:text-sm"
              placeholder="ABC Company"
              onChange={handleInputChange}
            />
          </div>
          <div className="m-1">
            <label htmlFor="" className="text-xs text-gray-600">
              Fetcha RFQ
            </label>
            <input
              type="date"
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
              className="border-2 border-gray-300 text-gray-400 text-sm w-full mt-2 px-2 rounded-lg outline-none"
              onChange={handleInputChange}
            />
          </div>
        </div>
        {/*Filter selection*/}
        <div className="flex items-center justify-between">
          <h1 className="text-black text-lg font-normal">Opciones</h1>
          <p className="text-xs font-normal text-gray-400 cursor-pointer">
            Clear
          </p>
        </div>

        <div className="space-y-4 my-2">
          <div className="flex items-center gap-10">
            <input
              type="checkbox"
              className="w-4 h-4"
              id="vigente"
              onChange={handleInputChange}
            />
            <label htmlFor="vigente" className="text-xs text-gray-600">
              Vigente
            </label>
          </div>
          <div className="flex items-center gap-10">
            <input
              type="checkbox"
              className="w-4 h-4"
              id="reservada"
              onChange={handleInputChange}
            />
            <label htmlFor="reservada" className="text-xs text-gray-600">
              No reservada
            </label>
          </div>
          <div className="flex items-center gap-10">
            <input
              type="checkbox"
              className="w-4 h-4"
              id="parte"
              onChange={handleInputChange}
            />
            <label htmlFor="parte" className="text-xs text-gray-600">
              Numero de Parte
            </label>
          </div>
          <div className="flex items-center gap-10">
            <input
              type="checkbox"
              className="w-4 h-4"
              id="vendido"
              onChange={handleInputChange}
            />
            <label htmlFor="vendido" className="text-xs text-gray-600">
              Vendido
            </label>
          </div>
          <div className="flex items-center gap-10">
            <input
              type="checkbox"
              className="w-4 h-4"
              id="ofertado"
              onChange={handleInputChange}
            />
            <label htmlFor="ofertado" className="text-xs text-gray-600">
              Ofertado
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

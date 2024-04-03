const Filter = () => {
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
            />
          </div>
          <div className="m-1">
            <label htmlFor="" className="text-xs text-gray-600">
              Fetcha RFQ
            </label>
            <input
              type="date"
              className="border-2 border-gray-300 text-gray-400 text-sm w-full mt-2 px-2 rounded-lg outline-none"
            />
          </div>
          <div className="m-1">
            <label htmlFor="" className="text-xs text-gray-600">
              Deadline Date
            </label>
            <input
              type="date"
              className="border-2 border-gray-300 text-gray-400 text-sm w-full mt-2 px-2 rounded-lg outline-none"
            />
          </div>
          <div className="m-1">
            <label htmlFor="" className="text-xs text-gray-600">
              Delivery Date
            </label>
            <input
              type="date"
              className="border-2 border-gray-300 text-gray-400 text-sm w-full mt-2 px-2 rounded-lg outline-none"
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
            <input type="checkbox" className="w-4 h-4" id="vigente" />
            <label htmlFor="vigente" className="text-xs text-gray-600">
              Vigente
            </label>
          </div>
          <div className="flex items-center gap-10">
            <input type="checkbox" className="w-4 h-4" id="reservada" />
            <label htmlFor="reservada" className="text-xs text-gray-600">
              No reservada
            </label>
          </div>
          <div className="flex items-center gap-10">
            <input type="checkbox" className="w-4 h-4" id="parte" />
            <label htmlFor="parte" className="text-xs text-gray-600">
              Numero de Parte
            </label>
          </div>
          <div className="flex items-center gap-10">
            <input type="checkbox" className="w-4 h-4" id="vendido" />
            <label htmlFor="vendido" className="text-xs text-gray-600">
              Vendido
            </label>
          </div>
          <div className="flex items-center gap-10">
            <input type="checkbox" className="w-4 h-4" id="ofertado" />
            <label htmlFor="ofertado" className="text-xs text-gray-600">
              Ofertado
            </label>
          </div>
        </div>

        <div className="w-full mt-4">
          <button className="text-white bg-blue-700 w-full px-4 py-2 rounded-lg font-medium text-xs uppercase">
            Filtrar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Filter;

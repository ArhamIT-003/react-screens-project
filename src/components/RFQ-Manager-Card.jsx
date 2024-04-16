const RFQManagerCard = ({ data }) => {
  return (
    <div className="border border-gray-300 p-4 rounded-lg">
      <div className="flex justify-between">
        <div className="flex-[10]">
          <h1 className="text-balance text-lg font-medium tracking-wider text-black">
            {data.Material_Description}
          </h1>
          <div className="w-1/2 flex gap-16 items-center">
            <span className="text-xs text-gray-500 flex items-center">
              Part Number:
              <span
                className={`w-4 h-4 ${
                  data.port == "running" && "bg-green-500"
                } ${
                  data.port == "pending" && "bg-yellow-500"
                } rounded-full inline-block ml-4`}
              ></span>
              <span className="text-black text-xs ml-2">{data.Part_Number}</span>
            </span>
            <span className="text-xs text-gray-500">
              Marca: <span className="text-black text-xs ml-5">Siemens</span>
            </span>
            <span>
              <button className="p-2 border-blue-600 text-blue-600 text-xs font-normal border rounded-md">
                Confirmar
              </button>
            </span>
          </div>
          {/*Cantidad*/}
          <div className="w-1/2 flex items-center">
            <span className="text-xs text-gray-500">
              Cantidad Solicitada:
              <span className="text-black text-xs ml-4">{data.Quantity_Required}</span>
            </span>
          </div>
          {/*description*/}
          <div className="mt-5">
            <p className="text-xs text-gray-500">{data.notes}</p>
            <p className="text-xs text-gray-500">
              {data.description?.shortName}
            </p>
            <p className="text-xs text-gray-500">
              ShortName: {data.description?.shortName}
            </p>
            <p className="text-xs text-gray-500">{data.description?.item1}</p>
            <p className="text-xs text-gray-500">{data.description?.item2}</p>
            <p className="text-xs text-gray-500">{data.description?.item3}</p>
            <p className="text-xs text-gray-500">{data.description?.item4}</p>
          </div>
        </div>
        <div className="flex-1 w-full">
          <div className="flex flex-col gap-4 justify-">
            <button className="px-8 py-1 border-blue-600 text-blue-600 text-sm font-normal border rounded-md">
              Historia
            </button>
            <button className="px-8 py-1 border-blue-600 text-blue-600 text-sm font-normal border rounded-md">
              Catalogo
            </button>
            <button className="px-8 py-1 bg-blue-600 text-white text-sm font-normal border rounded-md">
              Cotizar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RFQManagerCard;

import Input from "./Input";
import { IoMdAdd } from "react-icons/io";
import Table from "./Table";

const RFQDetails = ({ data }) => {
  const { data: rfqData } = data;

  return (
    <div className="border-2 border-gray-300 px-4 py-2 rounded-lg">
      <div className="">
        <div className="flex flex-col gap-2">
          <div className="flex justify-between">
            {rfqData.map((item, index) => (
              <div key={index}>
                <h1 className="text-lg tracking-wider text-balance font-normal">
                  {item.title}
                </h1>
                <p className="text-xs text-gray-900">
                  <span className="text-xs text-gray-600">Port Number: </span>
                  {item.portNumber}
                </p>
              </div>
            ))}
            <div className="flex gap-1 items-center">
              <label htmlFor="checkbox" className="text-xs">
                No Ofertar
              </label>
              <input type="checkbox" name="" id="checkbox" className="" />
            </div>
          </div>
          <div className="flex items-center">
            <Input id="proveedar" Label="Proveedar" />

            <Input id="Precio" Label="Precio Unitario" />

            <Input id="cantidad" Label="Cantidad" />

            <Input id="maneda" Label="Maneda" />

            <Input id="costo" Label="Costo total" />

            <Input id="Oferta" Label="Oferta" />

            <Input id="Maneda Oferta" Label="Maneda" />

            <div className="w-10 h-10 flex items-center justify-center bg-blue-500 rounded-full">
              <button className="text-white">
                <IoMdAdd size={20} />
              </button>
            </div>
          </div>
          {/*table with Data */}
          <div className="my-5">
            <Table data={rfqData[1].collections} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RFQDetails;

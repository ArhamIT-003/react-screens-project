import { useMemo } from "react";
import { filterCardData } from "../assets/data";
import Modal from "../components/Modal";

const View = ({ isOpen, onClose, id }) => {
  console.log(id);

  const foundData = useMemo(
    () => filterCardData.find((item) => item.id === id),
    [id]
  );

  console.log(foundData);
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="space-y-8">
        {/*Heading Container*/}
        <div className="flex gap-4 items-center">
          <div className="">
            <img
              src={foundData.img}
              alt="view-img"
              className="w-24 h-16 object-cover rounded-lg"
            />
          </div>
          <h1 className="w-[60%] text-black text-base font-normal">
            {foundData.title}
          </h1>
        </div>
        {/*Description Container 1*/}
        <div className="space-y-4">
          <h1 className="text-base font-medium text-black">
            LINER,WEAR,NONMTL,PL,CARB
          </h1>
          <p className="text-xs text-gray-500 capitalize">
            Part Number:{" "}
            <span className="text-xs text-black">
              {foundData.first.partNumber}
            </span>
          </p>
          <div>
            <p className="text-xs text-gray-500">
              {foundData.first.description}
            </p>
            <p className="text-xs text-gray-500">{foundData.first.details}</p>
          </div>
        </div>
        {/*Description Container 2*/}
        <div className="space-y-4">
          <h1 className="text-base font-medium text-black">
            MODULE,A/I,PLC,GE IC693ALG220
          </h1>
          <p className="text-xs text-gray-500 capitalize">
            Part Number:{" "}
            <span className="text-xs text-black">
              {foundData.second.partNumber}
            </span>
          </p>
          <div>
            <p className="text-xs text-gray-500">
              {foundData.second.description}
            </p>
          </div>
        </div>
        {/*Description Container 3*/}
        <div className="space-y-4">
          <h1 className="text-base font-medium text-black">
            PROCESSOR,GATEWAY,PROFINET-IO,2 P,24V DC
          </h1>
          <p className="text-xs text-gray-500 capitalize pb-2">
            Part Number:{" "}
            <span className="text-xs text-black">
              {foundData.third.partNumber}
            </span>
          </p>
          <div className="">
            <p className="text-xs text-gray-500">{foundData.third.name}</p>
            <p className="text-xs text-gray-500">
              Short Name {foundData.third.shortName}
            </p>
            <p className="text-xs text-gray-500">Type {foundData.third.type}</p>
            <p className="text-xs text-gray-500">
              Number of ports {foundData.third.numberofPorts}
            </p>
            <p className="text-xs text-gray-500">
              Voltage rating {foundData.third.voltageRating}
            </p>
          </div>
        </div>

        <div className="flex items-center justify-center gap-6 pb-5">
          <button className="bg-none border border-blue-500 px-8 py-2 text-blue-500 font-normal capitalize rounded-md">
            Siguiente
          </button>
          <button className="bg-none border border-blue-500 px-8 py-2 text-blue-500 font-normal capitalize rounded-md">
            Abrir
          </button>
          <button className="bg-blue-500 px-4 py-2 text-white font-normal capitalize rounded-md">
            Reservar
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default View;

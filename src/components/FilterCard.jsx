import cardImg from "../assets/card.png";
import Avatar from "../assets/avatar.jpeg";
import { useState } from "react";
import View from "../pages/View";

const FilterCard = ({ data }) => {
  const handleView = (id) => {
    console.log("view", id);
    setIsModalOpen(true);
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="border-2 border-gray-200 p-4 rounded-lg">
      <div className="flex gap-4 items-center justify-between">
        <div className="flex gap-6">
          <div className="border-2 border-gray-200 p-2 rounded-md ">
            <img src={cardImg} alt="" className="w-24 h-16 object-cover" />
          </div>
          <div className="space-y-6">
            <h1 className="text-black font-normal text-lg">{data.title}</h1>
            <div className="flex gap-8 items-center justify-center">
              <p className="text-xs text-gray-400 pr-4 border-r-2 border-gray-300">
                Deadline: {data.deadlineDate}
              </p>
              <p className="text-xs text-gray-400 pr-4 border-r-2 border-gray-300">
                Delivery Date: {data.deliveryDate}
              </p>
              <p className="text-xs text-gray-400">RFQ Date: {data.rfqDate}</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2 max-w-fit justify-between items-center">
          {!data.assigned.email && (
            <>
              <button className="bg-blue-700 px-8 py-2 rounded-md text-white text-xs uppercase">
                Reservar
              </button>
            </>
          )}
          {data.assigned.email && (
            <div className="flex items-center gap-2">
              <p className="text-xs">{data.assigned.email}</p>
              <img
                src={Avatar}
                alt=""
                className="w-10 h-10 rounded-full object-cover border-2 border-black"
              />
            </div>
          )}
          <button
            className="bg-blue-700 px-7 py-2 rounded-md text-white text-xs uppercase"
            onClick={() => handleView(data.id)}
          >
            Quick View
          </button>
          <button className="bg-blue-700 px-10 font-semibold py-2 rounded-md text-white text-xs capitalize">
            {data.assigned.email ? "Un Assign" : "Assign"}
          </button>
        </div>
        {/* Modal */}
        <View isOpen={isModalOpen} onClose={handleCloseModal} id={data.id} />
      </div>
    </div>
  );
};

export default FilterCard;

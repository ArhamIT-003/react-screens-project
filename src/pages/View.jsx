import React, { useEffect } from "react";
import Modal from "../components/Modal";
import { useAuth } from "../providers/AuthProvider";
import { getRFQ } from "../hooks/useRFQ";

const View = ({ isOpen, onClose, id }) => {
  const { user } = useAuth();
  const rfq = getRFQ(user.token, id);

  // Effect to handle escape key press
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        onClose();  // Call onClose if the escape key is pressed
      }
    };

    if (isOpen) {
      window.addEventListener('keydown', handleEscape);
    }

    return () => {
      window.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);  // Dependencies include isOpen to set and clean up the listener based on the modal state

  // Conditional rendering based on the fetched data
  if (!rfq) {
    // Show loading state if no RFQ data is available yet
    return (
      <Modal isOpen={isOpen} onClose={onClose}>
        <div className="flex justify-center items-center p-5">
          <p>Loading...</p>
        </div>
      </Modal>
    );
  }

  // Render the component if data is available
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="space-y-8">
        {/*Heading Container*/}
        <div className="flex gap-4 items-center">
          <div>
            <img
              src={"https://assets.api.uizard.io/api/cdn/stream/ef8cd4e2-0965-4425-a5c2-156eedaec45c.png"}
              alt="view-img"
              className="w-24 h-16 object-cover rounded-lg"
            />
          </div>
          <h1 className="w-[60%] text-black text-base font-normal">
            {rfq.RFQ_Name}
          </h1>
        </div>
        {/*Description Containers*/}
        {rfq.materials && rfq.materials.map((material, index) => (
          <div className="space-y-4" key={index}>
            <h1 className="text-base font-medium text-black">
              {material.Part_Number}
            </h1>
            <p className="text-xs text-gray-500 capitalize">
              Part Number: <span className="text-xs text-black">{material.Part_Number}</span>
            </p>
            <div>
              <p className="text-xs text-gray-500">{material.Material_Description}</p>
              <p className="text-xs text-gray-500">{material.Notes}</p>
              <p className="text-xs text-gray-500">
                Quantity Required: {material.Quantity_Required}
              </p>
            </div>
          </div>
        ))}
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

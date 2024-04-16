import React, { useState, useEffect } from "react";
import cardImg from "../assets/card.png";
import Avatar from "../assets/avatar.jpeg";
import View from "../pages/View";
import { Link } from "react-router-dom";
import DropdownArrow from "../assets/down-arrow.svg";

import { getUser, getUsers } from "../hooks/useUser";
import { reserveRFQ, assignRFQ, releaseRFQ } from "../hooks/useRFQ";
import { useAuth } from "../providers/AuthProvider";

const FilterCard = ({ rfq: rfq }) => {
  const { user } = useAuth();
  const handleView = (id) => {
    console.log("view", id);
    setIsModalOpen(true);
  };

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  // const [users, setUsers] = useState([]);

  // Function to fetch users
  const users = getUsers(user);

  const rfqAssignee = getUser(user.token, rfq.User_id);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleReserve = () => {
    console.log("reserve", rfq.RFQ_ID);
    reserveRFQ(user.token, rfq.RFQ_ID);
  };

  const handleRelease = () => {
    releaseRFQ(user.token, rfq.RFQ_ID);
  };

  const handleAssignToUser = (userId) => {
    assignRFQ(user.token, rfq.RFQ_ID, userId);
    setIsDropdownOpen(false); // Close the dropdown after assignment
  };

  return (
    <div className="border-2 border-gray-200 p-4 rounded-lg">
      <div className="flex gap-4 items-center justify-between">
      <Link to={`/rfq/${rfq.RFQ_ID}`} >
          <div className="flex gap-6">
            <div className="border-2 border-gray-200 p-2 rounded-md ">
              <img src={cardImg} alt="" className="w-24 h-16 object-cover" />
            </div>
            <div className="space-y-6">
              <h1 className="text-black font-normal text-lg">
                {rfq.RFQ_Name}
              </h1>
              <div className="flex gap-8 items-center justify-center">
                <p className="text-xs text-gray-400 pr-4 border-r-2 border-gray-300">
                  Deadline: {rfq.Deadline}
                </p>
                <p className="text-xs text-gray-400 pr-4 border-r-2 border-gray-300">
                  Delivery Date: {rfq.Delivery_Date}
                </p>
                <p className="text-xs text-gray-400">
                  RFQ Date: {rfq.RFQ_Date}
                </p>
              </div>
            </div>
          </div>
        </Link>
        <div className="flex flex-col gap-2 max-w-fit justify-between items-center">
          {!rfq.User_id && (
            <button
              className="bg-blue-700 w-32 py-2 rounded-md text-white text-xs uppercase whitespace-nowrap"
              onClick={handleReserve}
            >
              Reservar
            </button>
          )}
          {rfq.User_id && (
            <div className="flex items-center gap-2">
              <p className="text-xs">
                {rfqAssignee ? rfqAssignee.first_name : "loading..."}
              </p>
              <img
                src={Avatar}
                alt=""
                className="w-10 h-10 rounded-full object-cover border-2 border-black"
              />
            </div>
          )}
          <button
            className="bg-blue-700 w-32 py-2 rounded-md text-white text-xs uppercase whitespace-nowrap"
            onClick={() => handleView(rfq.RFQ_ID)}
          >
            Quick View
          </button>
          {rfq.User_id && (
            <button
              className="bg-blue-700 w-32 py-2 rounded-md text-white text-xs capitalize whitespace-nowrap"
              onClick={handleRelease}
            >
              Release
            </button>
          )}
          {!rfq.User_id && user.is_staff && (
            <div className="relative">
              <button
                className="bg-blue-700 w-32 py-2 rounded-md text-white text-xs capitalize whitespace-nowrap flex align-center justify-center"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                ASSIGN
                <img src={DropdownArrow} alt="Dropdown" className="ml-2" />
              </button>
              {isDropdownOpen && (
                <ul className="absolute bg-white border border-gray-300 rounded-md mt-1 z-10">
                  {users.map((user) => (
                    <li
                      key={user.id}
                      className="p-2 hover:bg-gray-100 cursor-pointer"
                      onClick={() => handleAssignToUser(user.id)}
                    >
                      {user.first_name} {user.last_name}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )}
        </div>
        {/* Modal */}
        <View
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          id={rfq.RFQ_ID}
        />
      </div>
    </div>
  );
};

export default FilterCard;

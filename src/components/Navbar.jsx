import { GiHamburgerMenu } from "react-icons/gi";
import { Link, useLocation } from "react-router-dom";
import { rfqManagerLinks } from "../assets/data";
import { IoMdNotificationsOutline } from "react-icons/io";
import { AiOutlineMail } from "react-icons/ai";
import { FaAngleDown } from "react-icons/fa6";
import Logo from "../assets/logo.png";
import Avatar from "../assets/avatar.jpeg";
import { useState } from "react";

const Navbar = ({ isOpen, setIsOpen }) => {
  const [isDrop, setIsDrop] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleDropDown = () => {
    setIsDrop(!isDrop);
  };

  const { pathname } = useLocation();

  let condition = pathname === "/" || pathname === "/rfq";

  return (
    <div className="h-12 w-full shadow-lg">
      <div className="flex justify-between items-center px-8 py-2">
        <div className="flex items-center gap-4">
          <div className="cursor-pointer" onClick={handleClick}>
            <GiHamburgerMenu size={20} />
          </div>
          {pathname === "/" && (
            <div className="w-full flex items-center">
              <img src={Logo} alt="" className="h-8 object-cover" />
            </div>
          )}
          {pathname === "/rfq" && (
            <h2 className="font-semibold text-xl">RFQ</h2>
          )}

          {pathname === "/rfq-manager" && (
            <h2 className="font-semibold text-xl">RFQ Manager</h2>
          )}
        </div>
        <div className="flex gap-4">
          {condition && (
            <div className="flex items-center gap-4">
              <IoMdNotificationsOutline size={20} />
              <AiOutlineMail size={20} />
              <div className="flex gap-4 items-center ml-5">
                <img
                  src={Avatar}
                  alt="avatar-img"
                  className="h-8 object-cover border rounded-full border-black "
                />
                <span
                  className="text-sm text-gray-900 flex items-center gap-4 cursor-pointer"
                  onClick={handleDropDown}
                >
                  max@gmail.com
                  <span>
                    <FaAngleDown />
                  </span>
                </span>
                {isDrop && (
                  <div className="absolute top-10 right-4 bg-white border border-gray-300 rounded-lg text-sm shadow-md w-48">
                    <div className="p-2 hover:bg-gray-100 cursor-pointer">
                      <h1 className="text-gray-800">Name: Glen Maxwell</h1>
                    </div>
                    <hr />
                    <div className="p-2 hover:bg-gray-100 cursor-pointer">
                      <h1 className="text-gray-800">Logout</h1>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {/*

          {pathname === "/rfq" &&
            navLinks.map((item, index) => (
              <Link
                key={index}
                to={item.path}
                className="text-gray-600 text-sm font-normal cursor-pointer"
              >
                {item.name}
              </Link>
            ))}*/}
          {pathname === "/rfq-manager" &&
            rfqManagerLinks.map((item, index) => (
              <Link
                key={index}
                to={item.path}
                className="text-gray-600 text-sm font-normal cursor-pointer"
              >
                {item.name}
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;

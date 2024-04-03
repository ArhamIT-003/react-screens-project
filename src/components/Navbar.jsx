import { GiHamburgerMenu } from "react-icons/gi";
import { Link, useLocation } from "react-router-dom";
import { navLinks, rfqManagerLinks } from "../assets/data";
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

  const location = useLocation();

  const pathname = location.pathname;

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
          {pathname === "/" && (
            <div className="flex items-center gap-4">
              <IoMdNotificationsOutline size={20} />
              <AiOutlineMail size={20} />
              <div className="flex gap-4 items-center">
                <img
                  src={Avatar}
                  alt="avatar-img"
                  className="h-8 object-cover border-2 rounded-full border-black "
                />
                <span
                  className="text-sm text-gray-900 flex items-center gap-2 cursor-pointer"
                  onClick={handleDropDown}
                >
                  max@gmail.com{" "}
                  <span>
                    <FaAngleDown />
                  </span>
                </span>
                {isDrop && (
                  <div className="absolute top-9 right-4 bg-white border-2 border-black rounded-lg text-xs">
                    <h1 className="hover:bg-gray-700 hover:text-white px-2 py-1 cursor-pointer">
                      name: Glen Maxewell
                    </h1>
                    <p className="hover:bg-gray-700 hover:text-white px-2 py-1 cursor-pointer">
                      Logout
                    </p>
                  </div>
                )}
              </div>
            </div>
          )}
          {pathname === "/rfq" &&
            navLinks.map((item, index) => (
              <Link
                key={index}
                to={item.path}
                className="text-gray-600 text-sm font-normal cursor-pointer"
              >
                {item.name}
              </Link>
            ))}
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

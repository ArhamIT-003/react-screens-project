import { GiHamburgerMenu } from "react-icons/gi";
import { Link, useLocation } from "react-router-dom";
import { navLinks } from "../assets/data";
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
    <div className="h-12 w-full border-b-2 border-gray-400">
      <div className="flex justify-between items-center px-8 py-2">
        <div className="flex items-center gap-4">
          <div className="cursor-pointer" onClick={handleClick}>
            <GiHamburgerMenu size={20} />
          </div>
          {pathname === "/" && (
            <div className="w-full">
              <img src={Logo} alt="" className="h-8 object-cover" />
            </div>
          )}
          {pathname === "/rfq" && (
            <h2 className="font-semibold text-xl">RFQ</h2>
          )}
        </div>
        <div className="flex gap-4">
          {pathname === "/rfq" &&
            navLinks.map((item, index) => (
              <Link
                key={index}
                to={item.path}
                className="text-gray-500 text-sm font-semibold cursor-pointer"
              >
                {item.name}
              </Link>
            ))}
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
        </div>
      </div>
    </div>
  );
};

export default Navbar;

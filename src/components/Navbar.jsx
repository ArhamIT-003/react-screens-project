import { GiHamburgerMenu } from "react-icons/gi";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { rfqManagerLinks } from "../assets/data";
import { IoMdNotificationsOutline } from "react-icons/io";
import { AiOutlineMail } from "react-icons/ai";
import { FaAngleDown } from "react-icons/fa6";
import Logo from "../assets/logo.png";
import Avatar from "../assets/avatar.jpeg";
import { useState } from "react";

import { useAuth } from "../providers/AuthProvider";

const Navbar = ({ isOpen, setIsOpen }) => {
  const [isDrop, setIsDrop] = useState(false);
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleDropDown = () => {
    setIsDrop(!isDrop);
  };

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const handleHome = () => {
    navigate("/");
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
          <img src={Logo} alt="" className="h-8 object-cover cursor-pointer" onClick={handleHome} />
        </div>
        <div className="flex gap-4">
          {true && user && (
            <div className="flex items-center gap-4">
              <IoMdNotificationsOutline size={20} />
              <AiOutlineMail size={20} />
              <div className="flex gap-4 items-center ml-5">
                <img src={Avatar} alt="avatar-img" className="h-8 object-cover border rounded-full border-black" />
                <span className="text-sm text-gray-900 flex items-center gap-4 cursor-pointer" onClick={handleDropDown}>
                  {user.email}
                  <FaAngleDown />
                </span>
                {isDrop && (
                  <div className="absolute top-10 right-4 bg-white border border-gray-300 rounded-lg text-sm shadow-md w-48">
                    <div className="p-2 hover:bg-gray-100 cursor-pointer">
                      <h1 className="text-gray-800">Name: {user.first_name + " " + user.last_name}</h1>
                    </div>
                    <hr />
                    <div className="p-2 hover:bg-gray-100 cursor-pointer" onClick={handleLogout}>
                      <button className="text-gray-800">Logout</button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
          {pathname === "/rfq-manager" &&
            rfqManagerLinks.map((item, index) => (
              <Link key={index} to={item.path} className="text-gray-600 text-sm font-normal cursor-pointer">
                {item.name}
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;


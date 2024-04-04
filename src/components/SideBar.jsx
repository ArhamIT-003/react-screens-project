import { Link, useLocation } from "react-router-dom";
import Logo from "../assets/new-Logo.png";
import { IoLogOutOutline } from "react-icons/io5";
import { CiSettings } from "react-icons/ci";
import { sideBarLinks } from "../assets/data";

import { GrNotes, GrOverview } from "react-icons/gr";
import { FaChalkboardTeacher } from "react-icons/fa";
import { BsCardChecklist } from "react-icons/bs";
import { CgPerformance } from "react-icons/cg";
import { CiHome } from "react-icons/ci";

const iconMap = {
  CiHome: <CiHome />,
  GrOverview: <GrOverview />,
  GrNotes: <GrNotes />,
  BsCardChecklist: <BsCardChecklist />,
  CgPerformance: <CgPerformance />,
  FaChalkboardTeacher: <FaChalkboardTeacher />,
};

const SideBar = ({ isOpen, setOpen }) => {
  const handleClose = () => {
    setOpen(false);
  };
  const { pathname } = useLocation();

  return (
    <div
      className={`h-full bg-slate-900 absolute top-0 bottom-0 ${
        isOpen ? "w-56" : "w-0"
      } transition-all duration-300`}
    >
      <div className="flex flex-col gap-4 h-full" onClick={handleClose}>
        <div className="flex-1">
          <div className="h-full flex items-center ml-6">
            <img src={Logo} alt="" className="h-8 text-white" />
          </div>
        </div>
        <div className="flex-[8]">
          <div className="flex flex-col m-4 gap-4 justify-center">
            {sideBarLinks.map((item, index) => (
              <Link
                key={index}
                className={`text-white items-center flex gap-4 p-2 text-sm font-normal ${
                  pathname === item.link && "bg-blue-700"
                } rounded-md`}
                to={item.link}
              >
                {iconMap[item.icon]} {/* Render the icon dynamically */}
                {item.name}
              </Link>
            ))}
          </div>
        </div>
        <div className="m-4 flex-1">
          <div className="flex flex-col gap-4 justify-center">
            <Link
              className="text-white items-center flex gap-4 text-sm font-normal"
              to={"/"}
            >
              <CiSettings size={20} />
              Settings
            </Link>
            <Link
              className="text-white flex items-center gap-4 text-sm font-normal"
              to={"/"}
            >
              <IoLogOutOutline size={20} />
              Log out
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;

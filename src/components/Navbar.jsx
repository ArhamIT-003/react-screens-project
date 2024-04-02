import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
import { navLinks } from "../assets/data";

const Navbar = ({ isOpen, setIsOpen }) => {
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="h-12 w-full border-b-2 border-gray-400">
      <div className="flex justify-between items-center px-8 py-2">
        <div className="flex items-center gap-4">
          <div className="cursor-pointer" onClick={handleClick}>
            <GiHamburgerMenu size={20} />
          </div>
          <h2 className="font-semibold text-xl">RFQ</h2>
        </div>
        <div className="flex gap-4">
          {navLinks.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className="text-gray-500 text-sm font-semibold cursor-pointer"
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

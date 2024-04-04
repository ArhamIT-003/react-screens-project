import { FaRegCopyright } from "react-icons/fa6";
import { useLocation } from "react-router-dom";

const Footer = () => {
  const { pathname } = useLocation();
  const year = new Date().getFullYear();

  const managerLinks = ["Home", "RFQ Management", "Materials", "User Profile"];

  const footerLinks = [
    "Terms of Service",
    "Privacy Policy",
    "Contact Us",
    "Help Center",
  ];

  return (
    <div className="h-10 w-full border-t border-gray-400">
      {pathname === "/" && (
        <div className="flex justify-between items-center px-8 py-2">
          <div>
            <p className="text-gray-400 text-sm font-semibold cursor-pointer flex gap-2 items-center">
              <FaRegCopyright />
              {year} RFQ Manager. All right reserved.
            </p>
          </div>
          <div className="flex gap-4">
            {footerLinks.map((item, index) => (
              <p
                key={index}
                className="text-gray-400 text-sm font-semibold cursor-pointer"
              >
                {item}
              </p>
            ))}
          </div>
        </div>
      )}
      {pathname === "/rfq" && (
        <div className="flex justify-between items-center px-8 py-2">
          <div>
            <p className="text-gray-400 text-sm font-semibold cursor-pointer flex gap-2 items-center">
              <FaRegCopyright />
              {year} RFQ Manager. All right reserved.
            </p>
          </div>
          <div className="flex gap-4">
            {footerLinks.map((item, index) => (
              <p
                key={index}
                className="text-gray-400 text-sm font-semibold cursor-pointer"
              >
                {item}
              </p>
            ))}
          </div>
        </div>
      )}
      {pathname === "/rfq-manager" && (
        <div className="flex items-center justify-around gap-4 pt-2">
          {managerLinks.map((item, index) => (
            <p
              key={index}
              className="text-gray-500 text-sm font-semibold cursor-pointer"
            >
              {item}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

export default Footer;

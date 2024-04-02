import { FaRegCopyright } from "react-icons/fa6";

const Footer = () => {
  const year = new Date().getFullYear();

  const footerLinks = [
    "Terms of Service",
    "Privacy Policy",
    "Contact Us",
    "Help Center",
  ];
  return (
    <div className="h-10 w-full border-t-2 border-gray-400">
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
    </div>
  );
};

export default Footer;

import { Link } from "react-router-dom";

const RFQCard = () => {
  return (
    <div className="w-full h-48 border-2 rounded-lg border-gray-300">
      <h3 className="px-4 py-2 border-b-2 font-semibold text-xl border-gray-300">
        RFQ Overview
      </h3>
      <div className="flex gap-2 md:gap-1">
        <div className="flex-1 flex flex-col gap-2 border-r-2 border-gray-300 my-6 mx-2">
          <div className="flex gap-36 px-8">
            <h4 className="text-sm font-semibold text-gray-500">RFQ ID:</h4>
            <span className="text-sm font-semibold text-gray-900">#12345</span>
          </div>
          <div className="flex gap-36 px-8">
            <h4 className="text-sm font-semibold text-gray-500">Name:</h4>
            <span className="text-sm font-semibold text-gray-900">
              Sample RFQ
            </span>
          </div>
          <div className="flex gap-36 px-8">
            <h4 className="text-sm font-semibold text-gray-500">Fecha:</h4>
            <span className="text-sm font-semibold text-gray-900">
              2023-12-01
            </span>
          </div>
          <div className="flex gap-32 px-8">
            <h4 className="text-sm font-semibold text-gray-500">Company:</h4>
            <span className="text-sm font-semibold text-gray-900">
              ABC Company
            </span>
          </div>
        </div>
        <div className="flex-1 gap-2 ">
          <div className="flex flex-col gap-2 my-6 mx-2">
            <div className="flex gap-36 px-8">
              <h4 className="text-sm font-semibold text-gray-500">Portal:</h4>
              <span className="text-sm font-semibold text-gray-900">
                Supplier Portal
              </span>
            </div>
            <div className="flex gap-32 px-8">
              <h4 className="text-sm font-semibold text-gray-500">Deadline:</h4>
              <span className="lg:text-sm text-xs font-semibold text-gray-900">
                2024-1-01
              </span>
            </div>
            <div className="flex gap-24 px-8">
              <h4 className="text-sm font-semibold text-gray-500">
                Delivery Date:
              </h4>
              <span className="md:text-sm text-xs font-semibold text-gray-900">
                2023-12-01
              </span>
            </div>
            <div className="flex gap-36 px-8">
              <h4 className="text-sm font-semibold text-gray-500">URL:</h4>
              <span className="text-sm font-semibold underline text-blue-800">
                www.sample-url.com
              </span>
            </div>
          </div>
        </div>
        <div className="flex-1 flex px-4 py-2 justify-end">
          <div className="flex flex-col gap-2 max-w-fit">
            <button className="text-blue-500 text-base text font-bold border-blue-500 border-2 px-4 py-2 rounded-lg">
              Confirmar
            </button>
            <Link
              to="/rfq/2"
              className="bg-blue-500 text-base text-center font-bold text-white px-4 py-2 rounded-lg"
            >
              Vavler
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RFQCard;

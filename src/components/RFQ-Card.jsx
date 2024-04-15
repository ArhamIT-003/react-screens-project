import { Link, useLocation } from "react-router-dom";

const RFQCard = ({ rfq }) => {
  const { pathname } = useLocation();

  return (
    <div className="w-full h-48 border rounded-lg border-gray-300">
      <h3 className="px-4 py-2 border-b font-semibold text-xl border-gray-300">
        RFQ Overview
      </h3>
      <div className="flex gap-2 md:gap-1">
        <div className="flex-1 flex flex-col gap-2 border-r-2 border-gray-300 my-6 mx-2">
          <div className="flex gap-36 px-8">
            <h4 className="text-sm font-normal text-gray-500">RFQ ID:</h4>
            <span className="text-sm font-normal text-black">#12345</span>
          </div>
          <div className="flex gap-36 px-8">
            <h4 className="text-sm font-normal text-gray-500">Name:</h4>
            <span className="text-sm font-normal text-black">Sample RFQ</span>
          </div>
          <div className="flex gap-36 px-8">
            <h4 className="text-sm font-normal text-gray-500">Fecha:</h4>
            <span className="text-sm font-normal text-black">2023-12-01</span>
          </div>
          <div className="flex gap-32 px-8">
            <h4 className="text-sm font-normal text-gray-500">Company:</h4>
            <span className="text-sm font-normal text-black">ABC Company</span>
          </div>
        </div>
        <div className="flex-1 gap-2 ">
          <div className="flex flex-col gap-2 my-6 mx-2">
            <div className="flex gap-36 px-8">
              <h4 className="text-sm font-normal text-gray-500">Portal:</h4>
              <span className="text-sm font-normal text-black">
                Supplier Portal
              </span>
            </div>
            <div className="flex gap-32 px-8">
              <h4 className="text-sm font-normal text-gray-500">Deadline:</h4>
              <span className="lg:text-sm text-xs font-normal text-black">
                {rfq.Deadline}
              </span>
            </div>
            <div className="flex gap-24 px-8">
              <h4 className="text-sm font-normal text-gray-500">
                Delivery Date:
              </h4>
              <span className="md:text-sm text-xs font-normal text-black">
                {rfq.Delivery_Date}
              </span>
            </div>
            <div className="flex gap-36 px-8">
              <h4 className="text-sm font-normal text-gray-500">URL:</h4>
              <span className="text-sm font-normal underline text-blue-800">
                www.sample-url.com
              </span>
            </div>
          </div>
        </div>
        <div className="flex-1 flex px-4 py-2 justify-end">
          <div className="flex flex-col gap-4 max-w-fit">
            {pathname === "/rfq" && (
              <>
                <button className="text-blue-600 text-sm font-normal border-blue-600 border px-8 py-1 rounded-lg">
                  Confirmar
                </button>
                <Link
                  to="/rfq/2"
                  className="bg-blue-600 text-sm text-center font-normal text-white px-8 py-2 rounded-lg"
                >
                  Vavler
                </Link>
              </>
            )}
            {pathname === "/rfq-manager" && (
              <>
                <button className="text-blue-600 text-sm font-normal border-blue-600 border px-8 py-1 rounded-lg">
                  Oferta
                </button>
                <Link
                  to="/rfq/2"
                  className="bg-blue-600 text-sm text-center font-normal text-white px-8 py-2 rounded-lg"
                >
                  Liberar
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RFQCard;

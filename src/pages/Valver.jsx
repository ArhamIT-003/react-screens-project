import { FaArrowLeftLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
import ValverTable from "../components/valver-table";
import { valverData } from "../assets/data";

const Valver = () => {
  return (
    <div className="my-5">
      <div className="flex flex-col gap-6">
        <Link
          to={"/rfq"}
          className="flex items-center gap-2 max-w-fit cursor-pointer"
        >
          <div className="text-blue-600">
            <FaArrowLeftLong size={15} />
          </div>
          <p className="text-blue-600 text-base">Valver</p>
        </Link>
        <div>
          <ValverTable data={valverData} />
        </div>
      </div>
    </div>
  );
};

export default Valver;

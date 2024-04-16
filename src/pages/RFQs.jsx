import { Data } from "../assets/data";
import RFQCard from "../components/RFQ-Card";
import RFQDetails from "../components/RFQ-Details";

const RFQs = () => {
  return (
    <div className="flex flex-col gap-4 mx-8 my-2 overflow-y-auto">
      <div className="mt-4">
        {/* <RFQCard /> */}
      </div>
      {Data.map((item, index) => (
        <div className="mb-2" key={index}>
          <RFQDetails data={item} />
        </div>
      ))}
    </div>
  );
};

export default RFQs;

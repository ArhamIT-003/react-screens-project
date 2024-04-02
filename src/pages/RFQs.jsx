import { Data } from "../assets/data";
import RFQCard from "../components/RFQ-Card";
import RFQDetails from "../components/RFQ-Details";

const RFQs = () => {
  return (
    <div className="mx-8 my-2 overflow-y-auto">
      <div className="mb-2">
        <RFQCard />
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

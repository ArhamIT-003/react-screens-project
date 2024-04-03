import { managerCardData } from "../assets/data";
import RFQCard from "../components/RFQ-Card";
import RFQManagerCard from "../components/RFQ-Manager-Card";

const RFQManager = () => {
  return (
    <div className="mx-12 my-6 space-y-6">
      <div className="mb-2">
        <RFQCard />
      </div>
      <div className="space-y-6">
        {managerCardData.map((item, index) => (
          <RFQManagerCard key={index} data={item} />
        ))}
      </div>
    </div>
  );
};

export default RFQManager;

import { useParams } from "react-router-dom";
import { managerCardData } from "../assets/data";
import RFQCard from "../components/RFQ-Card";
import RFQManagerCard from "../components/RFQ-Manager-Card";
import { getRFQ } from "../hooks/useRFQ";
import { useAuth } from "../providers/AuthProvider";

const RFQManager = () => {
  const { rfqId } = useParams();
  const { user } = useAuth();

  const rfq = getRFQ(user.token, rfqId);

  const materials = rfq?.materials;

  return (
    <div className="mx-12 my-6 space-y-6">
      {rfq && (
        <>
          <div className="mb-2">
            <RFQCard rfq={rfq} />
          </div>
          <div className="space-y-6">
            {materials.map((item, index) => (
              <RFQManagerCard key={index} data={item} />
            ))}
          </div>
        </>
      )}
      {!rfq && <p>Loading...</p>}
    </div>
  );
};

export default RFQManager;

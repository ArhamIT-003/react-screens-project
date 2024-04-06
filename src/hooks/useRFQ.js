import React, { useEffect, useState } from 'react';
import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;

const useRFQ = (token, rfqId) => {
  const [rfq, setRFQ] = useState(null);

  useEffect(() => {
    const fetchRFQ = async () => {
      try {
        const response = await axios.get(`${API_URL}/rfq/?rfq_id=${rfqId}`, {
          headers: { Authorization: `Token ${token}` },
        });
        setRFQ(response.data);
      } catch (error) {
        console.error('Failed to fetch RFQ:', error);
      }
    };

    if (token) {
      fetchRFQ();
    }
  }, [token, rfqId]);

  return rfq;
}

export default useRFQ;
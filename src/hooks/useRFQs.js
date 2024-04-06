import React, { useEffect, useState } from 'react';
import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

const useRFQs = (token) => {
  const [rfqs, setRFQs] = useState(null);

  useEffect(() => {
    const fetchRFQs = async () => {
      try {
        const response = await axios.get(`${API_URL}/rfqs/`, {
          headers: { Authorization: `Token ${token}` },
        });
        setRFQs(response.data);
      } catch (error) {
        console.error('Failed to fetch RFQs:', error);
      }
    };

    if (token) {
      fetchRFQs();
    }
  }, [token]);

  return rfqs;
};

export default useRFQs;
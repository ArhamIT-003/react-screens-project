import { useEffect, useState } from 'react';
import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;

const useRFQs = (token, page = 1, n = 3) => {
  const [rfqs, setRFQs] = useState(null);
  
  useEffect(() => {
    const fetchRFQs = async () => {
      try {
        const response = await axios.get(`${API_URL}/rfqs/?page=${page}&n=${n}`, {
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
  }, [token, page, n]); // Make sure to react to changes in `page` and `n` as well.

  return rfqs;
};

export default useRFQs;

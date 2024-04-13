import React, { useEffect, useState } from 'react';
import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;

export const getRFQ = (token, rfqId) => {
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

    if (token && rfqId) {
      fetchRFQ();
    }
  }, [token, rfqId]);

  return rfq;
}

export const getRFQs = (token, page = 1, n = 3) => {
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

export const releaseRFQ = async (token, rfqId) => {
  try {
    const response = await axios.post(`${API_URL}/rfq/release/`, {
      rfq_id: rfqId
    }, {
      headers: { Authorization: `Token ${token}` },
    });
    return response.data;
  } catch (error) {
    console.error('Failed to release RFQ:', error);
  }
}

export const reserveRFQ = async (token, rfqId) => {
  try {
    const response = await axios.post(`${API_URL}/rfq/reserve/`, {
      rfq_id: rfqId
    }, {
      headers: { Authorization: `Token ${token}` },
    });
    return response.data;
  } catch (error) {
    console.error('Failed to reserve RFQ:', error);
  }
}

export const assignRFQ = async (token, rfqId, userId) => {
  try {
    const response = await axios.post(`${API_URL}/rfq/assign/`, {
      rfq_id: rfqId,
      user_id: userId,
    }, {
      headers: { Authorization: `Token ${token}` },
    });
    return response.data;
  } catch (error) {
    console.error('Failed to assign RFQ:', error);
  }
}

export const getFilteredRFQs = (token, filterData) => {
  const [rfqs, setRFQs] = useState(null);

  useEffect(() => {
    const fetchFilteredRFQs = async () => {
      try {
        const response = await axios.post(`${API_URL}/rfqs/filter/`, filterData, {
          headers: { Authorization: `Token ${token}` },
        });
        setRFQs(response.data);
      } catch (error) {
        console.error('Failed to fetch filtered RFQs:', error);
      }
    };

    if (token && filterData) {
      fetchFilteredRFQs();
    }
  }, [token, filterData]);

  return rfqs;
}
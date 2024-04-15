import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;

export const filterRFQs = async (token, data, page=1, n=3) => {
  return await axios.post(`${API_URL}/rfqs/filter/?page=${page}&n=${n}`,
    data,
    {
      headers: {
        Authorization: `Token ${token}`
      }
    }
  );
}
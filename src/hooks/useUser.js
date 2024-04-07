import { useEffect, useState } from "react";
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

const useUser = (token, userId) => {
  const [user, setUser] = useState(null);
  
  useEffect(() => {
    console.log("useUser", token, userId);
    const fetchUser = async () => {
      try {
        const response = await axios.get(`${API_URL}/user/?user_id=${userId}`, {
          headers: { Authorization: `Token ${token}` },
        });
        setUser(response.data);
      } catch (error) {
        console.error("Failed to fetch user:", error);
      }
    };

    if (token && userId) {
      fetchUser();
    }
  }, [token, userId]);

  return user;
};

export default useUser;
// Make the request to the server to get the user data

// Path: src/api/auth.js

import axios from 'axios';
// import API_URL from .env

const API_URL = process.env.REACT_APP_API_URL;

export const loginUser = async (email, password) => {
  return await axios.post(`${API_URL}/api-token-auth/`, { email, password });
}

export const signupUser = async (email, password, firstName, lastName) => {
  return await axios.post(`${API_URL}/signup/`, { email, password, first_name: firstName, last_name: lastName });
}
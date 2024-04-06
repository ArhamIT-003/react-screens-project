// create an AuthContext and provide it to the app and make api calls to the server
import React, { createContext, useContext, useState } from 'react';
import { loginUser, signupUser } from '../api/auth';

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
}

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = async (email, password) => {
    const response = await loginUser(email, password);
    setUser(response.data);
  }

  const signup = async (email, password, firstName, lastName) => {
    const response = await signupUser(email, password, firstName, lastName);
    setUser(response.data);
  }

  const logout = () => {
    setUser(null);
  }

  return (
    <AuthContext.Provider value={{ user, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
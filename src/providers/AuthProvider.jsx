import React, { createContext, useContext, useState, useEffect } from 'react';
import { loginUser, signupUser } from '../api/auth';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => JSON.parse(localStorage.getItem('user')));
  const [error, setError] = useState(null);

  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(user));
  }, [user]);

  const login = async (email, password) => {
    setError(null);
    try {
      const response = await loginUser(email, password);
      setUser(response.data);
      return true;
    } catch (error) {
      setError('Login failed');
      console.error('Login error:', error);
      return false;
    }
  }

  const signup = async (email, password, firstName, lastName) => {
    try {
      const response = await signupUser(email, password, firstName, lastName);
      setUser(response.data);
      if (response.status === 201) {
        await login(email, password);
        return true;
      }
    } catch (error) {
      setError('Signup failed');
      console.error('Signup error:', error);
    }
    return false;
  }

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  }

  return (
    <AuthContext.Provider value={{ user, login, signup, logout, error }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;

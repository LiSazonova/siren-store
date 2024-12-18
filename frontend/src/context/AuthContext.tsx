import React, { createContext, useState, useContext } from 'react';
import { registerUser, loginUser } from '@/lib/api';
import { AxiosError } from 'axios';

interface AuthContextProps {
  register: (username: string, email: string, password: string) => Promise<any>;
  login: (email: string, password: string) => Promise<boolean>;
  user: any;
  logout: () => void;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<any>(null);

  const register = async (
    username: string,
    email: string,
    password: string
  ) => {
    try {
      const response = await registerUser(username, email, password);
      setUser(response.data);
      localStorage.setItem('jwt', response.data.token);
      return { success: true, data: response.data };
    } catch (error: unknown) {
      if (error instanceof AxiosError) {
        return {
          success: false,
          message: error.response?.data?.message || 'Ошибка регистрации',
        };
      } else if (error instanceof Error) {
        return {
          success: false,
          message: error.message || 'Ошибка регистрации',
        };
      } else {
        return {
          success: false,
          message: 'Произошла неизвестная ошибка',
        };
      }
    }
  };

  const login = async (email: string, password: string) => {
    try {
      const response = await loginUser(email, password);
      setUser(response.data);
      localStorage.setItem('jwt', response.data.token);
      return true;
    } catch (error: unknown) {
      if (error instanceof AxiosError) {
        return false;
      } else if (error instanceof Error) {
        return false;
      }
      return false;
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('jwt');
  };

  return (
    <AuthContext.Provider value={{ register, login, user, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

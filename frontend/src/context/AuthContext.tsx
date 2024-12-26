import React, { createContext, useState, useContext, useEffect } from 'react';
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

  useEffect(() => {
    const storedToken = localStorage.getItem('jwt');
    const storedUser = localStorage.getItem('user');

    if (storedToken && storedUser) {
      try {
        const parsedUser = JSON.parse(storedUser);
        setUser(parsedUser);
      } catch (error) {
        console.error('Ошибка восстановления пользователя:', error);
        localStorage.removeItem('jwt');
        localStorage.removeItem('user');
      }
    }
  }, []);

  const register = async (
    username: string,
    email: string,
    password: string
  ) => {
    try {
      const response = await registerUser(username, email, password);
      const { jwt, user } = response.data;

      localStorage.setItem('jwt', jwt);
      localStorage.setItem('user', JSON.stringify(user));

      setUser(user);
      return { success: true, data: response.data };
    } catch (error: unknown) {
      if (error instanceof AxiosError) {
        return {
          success: false,
          message: error.response?.data?.error?.message || 'Ошибка регистрации',
        };
      }
      return {
        success: false,
        message: 'Произошла неизвестная ошибка',
      };
    }
  };

  const login = async (email: string, password: string) => {
    try {
      const response = await loginUser(email, password);
      const { jwt, user } = response.data;

      localStorage.setItem('jwt', jwt);
      localStorage.setItem('user', JSON.stringify(user));

      setUser(user);
      return true;
    } catch (error: unknown) {
      console.error('Ошибка логина:', error);
      return false;
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('jwt');
    localStorage.removeItem('user');
  };

  return (
    <AuthContext.Provider value={{ register, login, user, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

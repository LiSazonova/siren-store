'use client';

import React, { createContext, useState, useEffect, ReactNode } from 'react';
import api from '@/utils/lib/api';
import { toast } from 'react-toastify';
import {
  GoogleOAuthProvider,
  GoogleCredentialResponse,
} from '@react-oauth/google';

interface User {
  id: number;
  username: string;
  email: string;
}

interface AuthContextProps {
  user: User | null;
  login: (identifier: string, password: string) => Promise<boolean>;
  register: (
    username: string,
    email: string,
    password: string
  ) => Promise<{ success: boolean; message: string }>;
  logout: () => void;
  loginWithGoogle: (
    credentialResponse: GoogleCredentialResponse
  ) => Promise<void>;
}

export const AuthContext = createContext<AuthContextProps>({
  user: null,
  login: async () => false,
  register: async () => ({ success: false, message: '' }),
  logout: () => {},
  loginWithGoogle: async () => {},
});

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const token = localStorage.getItem('jwt');
    if (token) {
      api
        .get('/api/users/me')
        .then((response) => setUser(response.data))
        .catch(() => {
          localStorage.removeItem('jwt');
          setUser(null);
        });
    }
  }, []);

  const login = async (
    identifier: string,
    password: string
  ): Promise<boolean> => {
    try {
      const response = await api.post('/api/auth/local', {
        identifier,
        password,
      });
      localStorage.setItem('jwt', response.data.jwt);
      setUser(response.data.user);
      toast.success('Вы успешно вошли!');
      return true;
    } catch (error) {
      console.error('Ошибка входа:', error);
      toast.error('Ошибка входа. Проверьте данные и попробуйте снова.');
      return false;
    }
  };

  const register = async (
    username: string,
    email: string,
    password: string
  ): Promise<{ success: boolean; message: string }> => {
    try {
      const response = await api.post('/api/auth/local/register', {
        username,
        email,
        password,
      });
      localStorage.setItem('jwt', response.data.jwt);
      setUser(response.data.user);
      toast.success('Вы успешно зарегистрировались!');
      return { success: true, message: 'Регистрация прошла успешно.' };
    } catch (error: any) {
      console.error('Ошибка регистрации:', error);
      const errorMessage =
        error.response?.data?.message?.[0]?.messages?.[0]?.message ||
        'Ошибка регистрации. Проверьте данные и попробуйте снова.';
      return { success: false, message: errorMessage };
    }
  };

  const logout = () => {
    localStorage.removeItem('jwt');
    setUser(null);
    toast.info('Вы вышли из системы.');
  };

  const loginWithGoogle = async (
    credentialResponse: GoogleCredentialResponse
  ) => {
    try {
      const { credential } = credentialResponse;
      if (!credential) {
        toast.error('Google авторизация не удалась.');
        return;
      }

      const response = await api.post('/api/connect/google', {
        access_token: credential,
      });
      localStorage.setItem('jwt', response.data.jwt);
      setUser(response.data.user);
      toast.success('Вы успешно вошли через Google!');
    } catch (error: any) {
      console.error('Ошибка Google авторизации:', error);
      toast.error('Ошибка Google авторизации. Попробуйте снова.');
    }
  };

  const clientId = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID ?? '';

  return (
    <GoogleOAuthProvider clientId={clientId}>
      <AuthContext.Provider
        value={{ user, login, register, logout, loginWithGoogle }}
      >
        {children}
      </AuthContext.Provider>
    </GoogleOAuthProvider>
  );
};

import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'https://siren-store.vercel.app';

const api = axios.create({
  baseURL: API_URL,
});

api.interceptors.request.use(
  (config) => {
    const token = typeof window !== 'undefined' ? localStorage.getItem('jwt') : null;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const registerUser = (username: string, email: string, password: string) => {
  return api.post('/api/auth/local/register', { username, email, password });
};

export const loginUser = (email: string, password: string) => {
  return api.post('/api/auth/local', { identifier: email, password });
};

export default api;

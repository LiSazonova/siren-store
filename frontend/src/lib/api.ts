import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'https://siren-store.vercel.app';

const api = axios.create({
  baseURL: API_URL,
});

api.interceptors.request.use(
  (config) => {
    const token = typeof window !== 'undefined' ? localStorage.getItem('jwt') : null;
    if (token && config.url !== '/api/auth/local/register') {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);


// export const registerUser = (
//   username: string,
//   email: string,
//   password: string,
//   birthdate?: string
// ) => {
//   return api.post('/api/auth/local/register', {
//     username,
//     email,
//     password,
//     birthdate, // Дата рождения
//   });
// };

export const registerUser = async (
  username: string,
  email: string,
  password: string
) => {
  console.log('Данные для API:', { username, email, password });
  try {
    const response = await api.post('/api/auth/local/register', {
      username,
      email,
      password,
    });
    console.log('Успешный ответ от API:', response.data);
    return { success: true, data: response.data };
  } catch (error: any) {
    console.error('Ошибка в запросе API:', error.response?.data || error.message);
    return { success: false, message: error.response?.data?.error?.message || 'Ошибка регистрации' };
  }
};



export const loginUser = async (email: string, password: string) => {
  try {
    const response = await api.post('/api/auth/local', {
      identifier: email,
      password,
    });
    console.log('Логин успешен:', response.data);
    return response;
  } catch (error: any) {
    console.error('Ошибка логина:', error.response?.data || error.message);
    throw error;
  }
};


export default api;

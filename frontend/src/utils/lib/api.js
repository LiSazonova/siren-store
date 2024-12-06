import axios from 'axios';

const API_URL = 'http://localhost:1337/api'; // URL вашего Strapi API

// Получение списка товаров
export const getProducts = async () => {
  try {
    const response = await axios.get(`${API_URL}/dresses`);
    return response.data.data; // Возвращаем данные товаров
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
};

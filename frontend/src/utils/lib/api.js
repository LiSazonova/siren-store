import axios from 'axios';

const API_URL = 'http://localhost:1337/api';

export const getProducts = async () => {
  try {
    const response = await axios.get(`${API_URL}/dresses?populate=image`);
    console.log('Data fetched:', response.data.data);
    return response.data.data;
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
};
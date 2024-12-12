import axios, { AxiosResponse } from 'axios';
import { ApiResponse, Product } from '../../types/product';

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const getProducts = async (): Promise<Product[]> => {
  try {
    const response: AxiosResponse<ApiResponse> = await axios.get<ApiResponse>(
      `${API_URL}/dresses?populate=image`
    );
    console.log('Data fetched:', response.data.data);
    return response.data.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('Axios error fetching products:', error.message);
    } else {
      console.error('Unexpected error fetching products:', error);
    }
    return [];
  }
};

export interface ImageAttributes {
  url: string;
  // Другие поля
}

export interface ImageData {
  id: number;
  attributes: ImageAttributes;
}

export interface ProductAttributes {
  name: string;
  price: number;
  description?: string;
  image: {
    data: ImageData;
  };
  // Другие поля
}

export interface Product {
  id: number;
  attributes: ProductAttributes;
}

export interface ApiResponse {
  data: Product[];
}

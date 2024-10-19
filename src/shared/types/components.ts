export interface Options {
  [key: string]: string;
}

export interface Product {
  id: number;
  images: string[];
  name: string;
  price: number;
  favoriteCount: number;
}

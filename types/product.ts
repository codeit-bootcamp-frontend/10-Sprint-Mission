export interface ProductProps {
  id: number;
  images: string[];
  name: string;
  price: number;
  favoriteCount: number;
}

export interface GetProductsResponseType {
  list: ProductProps[];
  totalCount: number;
}

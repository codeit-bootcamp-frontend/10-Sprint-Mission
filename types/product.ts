export interface ProductProps {
  id: number;
  images: string[];
  name: string;
  price: number;
  favoriteCount: number;
  description: string;
  tags: string[];
  ownerId: string;
  createdAt: string;
}

export interface GetProductsResponseType {
  list: ProductProps[];
  totalCount: number;
}

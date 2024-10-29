export type Product = {
  createdAt: Date;
  favoriteCount: number;
  ownerId: number;
  images: string[];
  tags: string[];
  price: number;
  description: string;
  name: string;
  id: number;
  isFavorite: boolean;
}

export type ProductListResponse = {
  totalCount: number;
  list: Product[];
}

export type ProductSortOption = "recent" | "favorite";

export type ProductListFetcherParams = {
  orderBy: ProductSortOption;
  pageSize: number;
  page?: number;
}

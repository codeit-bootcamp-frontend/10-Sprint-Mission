export interface GetItemsParams {
  page?: number;
  pageSize?: number;
  orderBy?: string;
  keyword?: string;
}

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  tags: string[];
  images: string[];
  ownerId: number;
  favoriteCount: number;
  createdAt: string;
  updatedAt: string;
  ownerNickname: string;
  isFavorite?: boolean;
}

export interface GetItemsResponse {
  list: Product[];
  totalCount: number;
}

export interface Writer {
  id: number;
  nickname: string;
  image: string | null;
}

export interface Comment {
  id: number;
  content: string;
  createdAt: string;
  updatedAt: string;
  writer: Writer;
}

export interface CommentsResponse {
  list: Comment[];
  nextCursor: string | null;
}

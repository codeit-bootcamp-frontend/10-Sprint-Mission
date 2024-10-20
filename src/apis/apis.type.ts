export type Obj = Record<string, unknown>;

export type StringObj = Record<string, string>;

export type OrderBy = "recent" | "favorite";

export interface GetProductsParams extends Obj {
  page: number;
  pageSize: number;
  orderBy: OrderBy;
  keyword?: string;
}

export interface GetProductsRes extends Obj {
  totalCount: number;
  list: {
    createdAt: string;
    favoriteCount: number;
    ownerNickname: string;
    ownerId: number;
    images: string[];
    tags: string[];
    price: number;
    description: string;
    name: string;
    id: number;
  }[];
}

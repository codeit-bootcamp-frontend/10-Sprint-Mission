export type StringObj = Record<string, string>;

interface GetListParams<ItemOrder> {
  page: number;
  pageSize: number;
  orderBy: ItemOrder;
  keyword?: string;
}
interface GetListRes<ItemProps> {
  totalCount: number;
  list: ItemProps[];
}

export type ArticleOrderType = "recent" | "like";
export interface ArticleProps {
  id: number;
  title: string;
  content: string;
  image: string | null;
  likeCount: number;
  createdAt: string;
  updatedAt: string;
  writer: {
    id: number;
    nickname: string;
  };
}
export type GetArticlesParams = GetListParams<ArticleOrderType>;
export type GetArticlesRes = GetListRes<ArticleProps>;

export type StringObj = Record<string, string>;

export type OrderByType = "recent" | "favorite";

interface GetListParams {
  page: number;
  pageSize: number;
  orderBy: OrderByType;
  keyword?: string;
}
interface GetListRes<ItemProps> {
  totalCount: number;
  list: ItemProps[];
}

interface ArticleProps {
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
export type GetArticlesParams = GetListParams;
export type getArticlesRes = GetListRes<ArticleProps>;

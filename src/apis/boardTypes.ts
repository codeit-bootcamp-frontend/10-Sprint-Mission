export interface Writer {
  id: number;
  nickname: string;
}

export interface Board {
  id: number;
  title: string;
  content: string;
  image: string; // TODO image null 처리
  likeCount: number;
  createdAt: string;
  updatedAt: string;
  writer: Writer;
}

export interface GetBoardsResponse {
  list: Board[];
  totalCount: number;
}

export interface GetBoardsRequestParams {
  page?: number;
  pageSize?: number;
  orderBy?: 'recent' | 'like';
  keyword?: string;
}

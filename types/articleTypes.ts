export interface WriterProps {
  id: number;
  nickname: string;
}

export interface ArticleProps {
  id: number;
  title: string;
  content: string;
  image: string;
  likeCount: number;
  createdAt: string;
  updatedAt: string;
  writer: WriterProps;
}

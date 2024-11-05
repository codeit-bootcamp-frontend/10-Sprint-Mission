export interface WriterProps {
  id: number;
  nickname: string;
  image?: string;
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

export interface CommentProps {
  id: number;
  content: string;
  createdAt: string;
  updatedAt: string;
  writer: WriterProps;
}

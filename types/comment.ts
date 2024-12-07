interface CommentProps {
  writer: {
    image: string;
    nickname: string;
    id: number;
  };
  updatedAt: string;
  createdAt: string;
  content: string;
  id: number;
}

export interface GetCommentResponseType {
  nextCursor: number;
  list: CommentProps[];
}

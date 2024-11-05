export interface Comment {
  writer: {
    image: string;
    nickname: string;
    id: number;
  };
  updatedAt: Date;
  createdAt: Date;
  content: string;
  id: number;
}

export interface CommentListResponse {
  nextCursor: number;
  list: Comment[];
}

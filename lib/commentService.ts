import { GetCommentResponseType } from "@/types/comment";
import { fetchData } from "./fetchData";
import { COMMENT_URL, PRODUCT_URL } from "@/constants/url";
import { CommentProps } from "@/types/articleTypes";

export const getComments = async (id: string) => {
  const response = await fetchData<GetCommentResponseType>(
    `${PRODUCT_URL}/${id}/comments`,
    { query: { limit: 5 } }
  );

  return response.list;
};

export const createComment = async (id: string, content: string) => {
  const accessToken = localStorage.getItem("accessToken");
  const response = await fetchData<CommentProps>(
    `${PRODUCT_URL}/${id}/comments`,
    {
      method: "POST",
      headers: { Authorization: `Bearer ${accessToken}` },
      body: { content },
    }
  );

  return response;
};

export const updateComment = async (id: number, content: string) => {
  const accessToken = localStorage.getItem("accessToken");
  const response = await fetchData<CommentProps>(`${COMMENT_URL}/${id}`, {
    method: "PATCH",
    headers: { Authorization: `Bearer ${accessToken}` },
    body: { content },
  });

  return response;
};

export const deleteComment = async (id: number) => {
  const accessToken = localStorage.getItem("accessToken");
  await fetchData(`${COMMENT_URL}/${id}`, {
    method: "DELETE",
    headers: { Authorization: `Bearer ${accessToken}` },
  });
};

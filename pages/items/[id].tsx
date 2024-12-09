import { FormEvent, useState } from "react";
import { GetServerSidePropsContext } from "next";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import ItemDetail from "@/components/item/ItemDetail";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import AddCommentForm from "@/components/board/AddCommentForm";
import Comments from "@/components/board/Comments";
import Button from "@/components/ui/Button";
import { fetchData } from "@/lib/fetchData";
import { getProduct } from "@/lib/productService";
import { CommentProps } from "@/types/articleTypes";
import { PRODUCT_URL } from "@/constants/url";
import { GetCommentResponseType } from "@/types/comment";
import {
  createComment,
  deleteComment,
  getComments,
  updateComment,
} from "@/lib/commentService";
import styles from "@/styles/Board.module.css";
import backIcon from "@/public/ic_back.svg";

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const id = context.params?.["id"];
  const { list } = await fetchData<GetCommentResponseType>(
    `${PRODUCT_URL}/${id}/comments`,
    {
      query: { limit: 5 },
    }
  );

  return {
    props: {
      comments: list,
    },
  };
};

const ItemDetailPage = ({
  comments: initialComments,
}: {
  comments: CommentProps[];
}) => {
  const [comment, setComment] = useState("");
  const router = useRouter();
  const id = router.query.id as string;
  const queryClient = useQueryClient();

  const { data: product } = useQuery({
    queryKey: ["product", id],
    queryFn: ({ queryKey }) => getProduct(queryKey[1] as string),
    enabled: !!id,
  });

  const { data: comments = [] } = useQuery({
    queryKey: ["comments", id],
    queryFn: ({ queryKey }) => getComments(queryKey[1] as string),
    initialData: initialComments,
    enabled: !!id,
  });

  const createCommentMutation = useMutation({
    mutationFn: ({ id, comment }: { id: string; comment: string }) =>
      createComment(id, comment),
    onSuccess: (newComment) => {
      queryClient.setQueryData<CommentProps[]>(
        ["comments", id],
        (oldComments) => [newComment, ...(oldComments || [])]
      );
      setComment("");
    },
  });

  const updateCommentMutation = useMutation({
    mutationFn: ({
      commentId,
      content,
    }: {
      commentId: number;
      content: string;
    }) => updateComment(commentId, content),
    onSuccess: (updatedComment) => {
      queryClient.setQueryData<CommentProps[]>(
        ["comments", id],
        (oldComments) =>
          oldComments?.map((comment) =>
            comment.id === updatedComment.id ? updatedComment : comment
          ) ?? []
      );
    },
  });

  const deleteCommentMutation = useMutation({
    mutationFn: (commentId: number) => deleteComment(commentId),
    onSuccess: (_, commentId) => {
      queryClient.setQueryData<CommentProps[]>(
        ["comments", id],
        (oldComments) =>
          oldComments?.filter((comment) => comment.id !== commentId) ?? []
      );
    },
  });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    createCommentMutation.mutate({ id, comment });
  };

  const handleUpdate = async (commentId: number | null, content: string) => {
    if (!commentId) return;
    updateCommentMutation.mutate({ commentId, content });
  };

  const handleDelete = async (commentId: number | null) => {
    if (!commentId) return;
    deleteCommentMutation.mutate(commentId);
  };

  return (
    <>
      {product && <ItemDetail {...product} />}
      <AddCommentForm
        onSubmit={handleSubmit}
        onChange={setComment}
        value={comment}
      />
      <Comments
        comments={comments}
        onUpdate={handleUpdate}
        onDelete={handleDelete}
      />
      <Link href="/items" className={styles.link}>
        <Button type="button" className={styles.button}>
          <div>목록으로 되돌아가기</div>
          <Image src={backIcon} alt="되돌아가기 아이콘" />
        </Button>
      </Link>
    </>
  );
};

export default ItemDetailPage;

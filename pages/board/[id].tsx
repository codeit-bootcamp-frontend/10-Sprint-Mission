import { FormEvent, MouseEvent, useCallback, useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import useAuth from "@/hooks/useAuth";
import { GetServerSidePropsContext } from "next";
import BoardDetail from "@/components/board/BoardDetail";
import AddCommentForm from "@/components/board/AddCommentForm";
import Comments from "@/components/board/Comments";
import Button from "@/components/ui/Button";
import { ARTICLE_URL, COMMENT_URL } from "@/constants/url";
import { fetchData } from "@/lib/fetchData";
import { ArticleProps, CommentProps } from "@/types/articleTypes";
import styles from "@/styles/Board.module.css";
import Image from "next/image";
import backIcon from "@/public/ic_back.svg";

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const id = context.params?.["id"];
  const { list } = await fetchData<Record<string, string>>(
    `${ARTICLE_URL}/${id}/comments`,
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

const BoardDetailPage = ({
  comments: initialComments,
}: {
  comments: CommentProps[];
}) => {
  const [board, setBoard] = useState<ArticleProps | undefined>(undefined);
  const [comments, setComments] = useState(initialComments);
  const [comment, setComment] = useState("");
  const { accessToken } = useAuth(true);

  const router = useRouter();
  const { id } = router.query;

  const getBoard = useCallback(async () => {
    const response = await fetchData<ArticleProps>(`${ARTICLE_URL}/${id}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    setBoard(response);
  }, [accessToken, id]);

  useEffect(() => {
    if (accessToken) {
      getBoard();
    }
  }, [accessToken, getBoard]);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newComment = await fetchData<CommentProps>(
      `${ARTICLE_URL}/${id}/comments`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        body: { content: comment },
      }
    );
    setComment("");
    setComments((prevComments) => [newComment, ...prevComments]);
  };

  const handleUpdate = async (id: number | null, content: string) => {
    if (!id) return;

    const newComment = await fetchData<CommentProps>(`${COMMENT_URL}/${id}`, {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      body: { content },
    });
    setComments((prevComments) =>
      prevComments.map((comment) =>
        comment.id === newComment.id ? newComment : comment
      )
    );
  };

  const handleDelete = async (id: number | null) => {
    if (!id) return;

    await fetchData(`${COMMENT_URL}/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    setComments((prevComments) =>
      prevComments.filter((comment) => comment.id !== id)
    );
  };

  return (
    <>
      {board && <BoardDetail {...board} />}
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
      <Link href="/boards" className={styles.link}>
        <Button type="button" className={styles.button}>
          <div>목록으로 되돌아가기</div>
          <Image src={backIcon} alt="되돌아가기 아이콘" />
        </Button>
      </Link>
    </>
  );
};

export default BoardDetailPage;

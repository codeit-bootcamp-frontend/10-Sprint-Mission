import {
  ChangeEvent,
  FormEvent,
  useCallback,
  useEffect,
  useState,
} from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { GetServerSidePropsContext } from "next";
import BoardDetail from "@/components/board/BoardDetail";
import AddCommentForm from "@/components/board/AddCommentForm";
import Comments from "@/components/board/Comments";
import Button from "@/components/ui/Button";
import { ARTICLE_URL } from "@/constants/url";
import { fetchData } from "@/lib/fetchData";
import { useAuth } from "@/contexts/AuthProvider";
import { ArticleProps, CommentProps } from "@/types/articleTypes";
import styles from "@/styles/Board.module.css";
import Image from "next/image";
import backIcon from "@/public/ic_back.svg";

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const id = context.params?.["id"];
  const { list } = await fetchData(`${ARTICLE_URL}/${id}/comments`, {
    query: { limit: 5 },
  });

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
  const [board, setBoard] = useState<ArticleProps>();
  const [comments, setComments] = useState(initialComments);
  const [comment, setComment] = useState("");
  const { accessToken } = useAuth();

  const router = useRouter();
  const { id } = router.query;

  const getBoard = useCallback(async () => {
    const response = await fetchData(`${ARTICLE_URL}/${id}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    setBoard(response);
  }, [accessToken, id]);

  useEffect(() => {
    getBoard();
  }, [getBoard]);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newComment = await fetchData(`${ARTICLE_URL}/${id}/comments`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      body: { content: comment },
    });
    setComment("");
    setComments((prevComments) => [newComment, ...prevComments]);
  };

  return (
    <>
      {board && <BoardDetail {...board} />}
      <AddCommentForm
        onSubmit={handleSubmit}
        onChange={setComment}
        value={comment}
      />
      <Comments comments={comments} />
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

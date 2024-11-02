import { ArticleProps } from "@/types/articleTypes";
import Container from "../layout/Container";
import ArticleImage from "./ArticleImage";
import LikeCount from "../ui/LikeCount";
import AuthorInfo from "../ui/AuthorInfo";
import { formatDate } from "@/lib/formatDate";
import styles from "./Board.module.css";

const Board = ({ board }: { board: ArticleProps }) => {
  return (
    <Container className={styles.container}>
      <div className={styles.content}>
        {board.title}
        <ArticleImage src={board.image} alt={`${board.id} 이미지`} />
      </div>
      <div className={styles.info}>
        <AuthorInfo
          className={styles.authorInfo}
          nickname={board.writer.nickname}
          date={formatDate(board.createdAt)}
        />
        <LikeCount className={styles.like} likeCount={board.likeCount} />
      </div>
    </Container>
  );
};

export default Board;

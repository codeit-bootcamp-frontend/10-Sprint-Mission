import { ArticleProps } from "@/types/articleTypes";
import Container from "../layout/Container";
import ArticleImage from "./ArticleImage";
import LikeCount from "../ui/LikeCount";
import AuthorInfo from "../ui/AuthorInfo";
import { formatDate } from "@/lib/formatDate";
import styles from "./Board.module.css";

const Board = ({
  id,
  title,
  image,
  writer,
  createdAt,
  likeCount,
}: ArticleProps) => {
  return (
    <Container className={styles.container}>
      <div className={styles.content}>
        {title}
        <ArticleImage src={image} alt={`${id} 이미지`} />
      </div>
      <div className={styles.info}>
        <AuthorInfo
          className={styles.authorInfo}
          nickname={writer.nickname}
          date={formatDate(createdAt)}
        />
        <LikeCount className={styles.like} likeCount={likeCount} />
      </div>
    </Container>
  );
};

export default Board;

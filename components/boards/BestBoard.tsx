import Badge from "../ui/Badge";
import Container from "../layout/Container";
import ArticleImage from "./ArticleImage";
import { ArticleProps } from "@/types/articleTypes";
import styles from "./BestBoard.module.css";
import LikeCount from "../ui/LikeCount";
import { formatDate } from "@/lib/formatDate";

const BestBoard = ({
  id,
  title,
  image,
  writer,
  likeCount,
  createdAt,
}: ArticleProps) => {
  return (
    <Container className={styles.container}>
      <Badge />
      <div className={styles.content}>
        {title}
        <ArticleImage src={image} alt={`${id} 이미지`} />
      </div>
      <div className={styles.info}>
        <div className={styles.user}>
          <div className={styles.nickname}>{writer.nickname}</div>
          <LikeCount likeCount={likeCount} />
        </div>
        <div className={styles.date}>{formatDate(createdAt)}</div>
      </div>
    </Container>
  );
};

export default BestBoard;

import Badge from "../ui/Badge";
import Container from "../layout/Container";
import ArticleImage from "./ArticleImage";
import { ArticleProps } from "@/types/articleTypes";
import styles from "./BestBoard.module.css";
import LikeCount from "../ui/LikeCount";
import { formatDate } from "@/lib/formatDate";

const BestBoard = ({ article }: { article: ArticleProps }) => {
  return (
    <Container className={styles.container}>
      <Badge />
      <div className={styles.content}>
        {article.title}
        <ArticleImage src={article.image} alt={`${article.id} 이미지`} />
      </div>
      <div className={styles.info}>
        <div className={styles.user}>
          <div className={styles.nickname}>{article.writer.nickname}</div>
          <LikeCount likeCount={article.likeCount} />
        </div>
        <div className={styles.date}>{formatDate(article.createdAt)}</div>
      </div>
    </Container>
  );
};

export default BestBoard;

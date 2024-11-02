import { ArticleProps } from "@/types/articleTypes";
import styles from "./BoardDetail.module.css";
import kebabIcon from "@/public/ic_kebab.svg";
import Image from "next/image";
import AuthorInfo from "../ui/AuthorInfo";
import { formatDate } from "@/lib/formatDate";
import HeartButton from "../ui/HeartButton";
import Container from "../layout/Container";

const BoardDetail = ({
  title,
  content,
  createdAt,
  likeCount,
  writer,
}: ArticleProps) => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.header}>
        <h2>{title}</h2>
        <Image src={kebabIcon} alt="게시글 메뉴 버튼" className={styles.icon} />
      </div>
      <div className={styles.info}>
        <AuthorInfo
          nickname={writer.nickname}
          date={formatDate(createdAt)}
          className={styles.authorInfo}
        />
        <Container className={styles.heartButtonContainer}>
          <HeartButton
            favoriteCount={likeCount}
            className={styles.heartButton}
          />
        </Container>
      </div>
      <p>{content}</p>
    </section>
  );
};

export default BoardDetail;

import Link from "next/link";
import Image from "next/image";
import { ArticleProps } from "@/apis/apis.type";
import medalIcon from "#/icons/medal.svg";
import heartIcon from "#/icons/heart_inactive.svg";
import styles from "./BestItem.module.css";

interface ItemProps {
  article: ArticleProps;
}

export default function BestItem({ article }: ItemProps) {
  const date = new Date(article.updatedAt).toLocaleDateString();

  return (
    <Link className={styles.item} href={`/board/${article.id}`}>
      <div className={styles.tag}>
        <Image src={medalIcon} alt="" />
        Best
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{article.title}</h3>
        <div className={styles.imageWrapper}>
          {article.image ? (
            <Image
              className={styles.image}
              src={article.image}
              alt={"이미지"}
              fill
            />
          ) : undefined}
        </div>
      </div>
      <div className={styles.info}>
        <span className={styles.nickname}>{article.writer.nickname}</span>
        <div className={styles.like}>
          <Image className={styles.likeIcon} src={heartIcon} alt="" />
          {article.likeCount}
        </div>
        <span className={styles.date}>{date}</span>
      </div>
    </Link>
  );
}

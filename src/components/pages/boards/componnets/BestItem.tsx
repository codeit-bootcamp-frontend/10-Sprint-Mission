import Link from "next/link";
import Image from "next/image";
import heartIcon from "#/icons/heart_inactive.svg";
import styles from "./BestItem.module.css";
import { ArticleProps } from "@/apis/apis.type";

interface ItemProps {
  data: ArticleProps;
}

export default function BestItem({ data }: ItemProps) {
  const {
    id,
    title,
    writer: { nickname },
    updatedAt,
    image,
    likeCount,
  } = data;
  return (
    <Link className={styles.item} href={`/board/${id}`}>
      <div className={styles.imageWrapper}>
        <Image
          className={styles.image}
          src={image ? image : ""}
          alt={"이미지"}
          fill
        />
      </div>
      <div className={styles.content}>
        <span className={styles.title}>{title}</span>
        <span className={styles.price}>{updatedAt}</span>
        <div className={styles.like}>
          <Image className={styles.likeIcon} src={heartIcon} alt="좋아요 수" />
          <span>{likeCount}</span>
        </div>
      </div>
    </Link>
  );
}

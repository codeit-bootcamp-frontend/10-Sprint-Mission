import Link from "next/link";
import Image from "next/image";
import heartIcon from "#/icons/heart_inactive.svg";
import styles from "./Item.module.css";

interface ItemProps {
  data: {
    id: number;
    name: string;
    description: string;
    price: number;
    images: string[];
    favoriteCount: number;
  };
}

export default function Item({ data }: ItemProps) {
  return (
    <Link className={styles.item} href={`/items/${data.id}`}>
      <Image
        className={styles.image}
        src={data.images[0]}
        alt={data.description}
        width={0}
        height={0}
        sizes="100vw"
      />
      <div className={styles.content}>
        <span className={styles.title}>{data.name}</span>
        <span className={styles.price}>
          {data.price.toLocaleString() + "원"}
        </span>
        <div className={styles.favorite}>
          <Image
            className={styles.favoriteIcon}
            src={heartIcon}
            alt="좋아요 수"
          />
          <span>{data.favoriteCount}</span>
        </div>
      </div>
    </Link>
  );
}

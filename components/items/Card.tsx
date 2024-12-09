import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ProductProps } from "@/types/product";
import styles from "./Card.module.css";
import emptyImg from "@/public/img_default.svg";

const Card = ({ product }: { product: ProductProps }) => {
  const [imageSrc, setImageSrc] = useState(product.images[0] ?? emptyImg);
  const handleImageError = () => {
    setImageSrc(emptyImg);
  };

  return (
    <li className={styles.card}>
      <Link href={`/items/${product.id}`}>
        <div className={styles.imageWrapper}>
          <Image
            src={imageSrc}
            alt={product.name}
            className={styles.productImg}
            onError={handleImageError}
            fill
          />
        </div>
        <h3 className={styles.name}>{product.name}</h3>
        <p className={styles.price}>{product.price.toLocaleString()}원</p>
      </Link>
      <span className={styles.favorite}>
        <Image src="ic_heart.svg" width={16} height={16} alt="하트 아이콘" />
        {product.favoriteCount}
      </span>
    </li>
  );
};

export default Card;

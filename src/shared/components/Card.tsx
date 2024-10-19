import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Card.module.css";
import { ReactComponent as HeartIcon } from "assets/images/ic_heart.svg";
import emptyImg from "assets/images/img_empty.svg";

interface Product {
  id: number;
  images: string[];
  name: string;
  price: number;
  favoriteCount: number;
}

interface Props {
  product: Product;
}

const Card = ({ product }: Props) => {
  const [imageSrc, setImageSrc] = useState(product.images[0] ?? emptyImg);

  const handleImageError = () => {
    setImageSrc(emptyImg);
  };

  return (
    <li className={styles.card}>
      <Link to={`/items/${product.id}`}>
        <img
          src={imageSrc}
          alt={product.name}
          className={styles.productImg}
          onError={handleImageError}
        />
        <h3 className={styles.name}>{product.name}</h3>
        <p className={styles.price}>{product.price.toLocaleString()}원</p>
      </Link>
      <span className={styles.favorite}>
        <HeartIcon />
        {product.favoriteCount}
      </span>
    </li>
  );
};

export default Card;

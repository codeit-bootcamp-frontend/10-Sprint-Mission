import { Link } from "react-router-dom";
import styles from "./Card.module.css";
import { ReactComponent as HeartIcon } from "assets/images/ic_heart.svg";

const Card = ({ product }) => {
  return (
    <li className={styles.card}>
      <Link to={`/items/${product.id}`}>
        <img
          src={product.images}
          alt={product.name}
          className={styles.productImg}
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

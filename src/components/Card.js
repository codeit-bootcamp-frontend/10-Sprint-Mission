import styles from "./Card.module.css";
import heartImg from "../assets/ic_heart.svg";

const Card = ({ product }) => {
  return (
    <li className={styles.card}>
      <img
        src={product.images}
        alt={product.name}
        className={styles.productImg}
      />
      <h3 className={styles.name}>{product.name}</h3>
      <p className={styles.price}>{product.price}</p>
      <span className={styles.favorite}>
        <img src={heartImg} alt="하트" className={styles.heart} />
        {product.favoriteCount}
      </span>
    </li>
  );
};

export default Card;

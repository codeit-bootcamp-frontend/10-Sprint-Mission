import likeButton from '../assets/images/ic-heart.svg';
import styles from './Card.module.css';

function Card({ image, title, price, like }) {
  return (
    <div className={styles.container}>
      <figure className={styles.productImg}>
        <img src={image} alt={title} />
      </figure>
      <div>
        <p className={styles.infoTitle}>{title}</p>
        <p className={styles.infoPrice}>{price}원</p>
        <div className={styles.infoLike}>
          <img src={likeButton} alt='좋아요 아이콘' />
          <span>{like}</span>
        </div>
      </div>
    </div>
  );
}

export default Card;

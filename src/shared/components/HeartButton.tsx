import { ReactComponent as HeartIcon } from "assets/images/ic_heart.svg";
import styles from "./HeartButton.module.css";

const HeartButton = ({ favoriteCount }: { favoriteCount: number }) => {
  return (
    <button
      type="button"
      aria-label="좋아요 버튼"
      className={styles.heartButton}
    >
      <HeartIcon className={styles.heartIcon} />
      <span>{favoriteCount}</span>
    </button>
  );
};

export default HeartButton;

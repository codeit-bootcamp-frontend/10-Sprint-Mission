import Image from "next/image";
import styles from "./HeartButton.module.css";
import heartIcon from "@/public/ic_heart.svg";

interface HeartButtonProps {
  favoriteCount: number;
  className?: string;
}

const HeartButton = ({ favoriteCount, className }: HeartButtonProps) => {
  return (
    <button
      type="button"
      aria-label="좋아요 버튼"
      className={`${styles.heartButton} ${className}`}
    >
      <Image src={heartIcon} className={styles.heartIcon} alt="하트 아이콘" />
      <span>{favoriteCount}</span>
    </button>
  );
};

export default HeartButton;

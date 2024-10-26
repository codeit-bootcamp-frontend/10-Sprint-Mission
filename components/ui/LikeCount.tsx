import Image from "next/image";
import heartIcon from "@/public/ic_heart.svg";
import styles from "./LikeCount.module.css";
import Container from "../layout/Container";

interface LikeCountProps {
  className?: string;
  likeCount: number;
}

const LikeCount = ({ className = "", likeCount }: LikeCountProps) => {
  return (
    <Container className={`${styles.container} ${className}`}>
      <Image src={heartIcon} alt="하트 아이콘" className={styles.image} />
      <span>{likeCount > 10000 ? "9999+" : likeCount}</span>
    </Container>
  );
};

export default LikeCount;

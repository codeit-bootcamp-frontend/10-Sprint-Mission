import Image from "next/image";
import styles from "./AuthorInfo.module.css";
import profileIcon from "@/public/ic_profile.svg";
import { formatDate } from "@/lib/formatDate";

interface Props {
  className?: string;
  nickname: string;
  image?: string;
  date: string;
}

const AuthorInfo = ({ className, nickname, image, date }: Props) => {
  return (
    <div className={`${styles.authorInfo} ${className}`}>
      <Image src={image ?? profileIcon} alt="프로필 아이콘" />
      <div className={styles.user}>
        <span className={styles.nickname}>{nickname}</span>
        <time className={styles.date} dateTime={date}>
          {formatDate(date)}
        </time>
      </div>
    </div>
  );
};

export default AuthorInfo;

import Image from "next/image";
import styles from "./AuthorInfo.module.css";
import profileIcon from "@/public/ic_profile.svg";

interface Props {
  nickname: string;
  date: string;
  className?: string;
  image?: string;
}

const AuthorInfo = ({ nickname, date, className, image }: Props) => {
  return (
    <div className={`${styles.authorInfo} ${className}`}>
      <Image src={image ?? profileIcon} alt="프로필 아이콘" />
      <div className={styles.user}>
        <span className={styles.nickname}>{nickname}</span>
        <time className={styles.date} dateTime={date}>
          {date}
        </time>
      </div>
    </div>
  );
};

export default AuthorInfo;

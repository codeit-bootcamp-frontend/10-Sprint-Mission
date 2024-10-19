import styles from "./AuthorInfo.module.css";
import profileIcon from "assets/images/ic_profile.svg";

interface Props {
  className?: string;
  nickname: string;
  image?: string;
  date: string;
}

const AuthorInfo = ({ className, nickname, image, date }: Props) => {
  return (
    <div className={`${styles.authorInfo} ${className}`}>
      <img
        src={image ?? profileIcon}
        alt="프로필 아이콘"
        className={styles.profileIcon}
      />
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

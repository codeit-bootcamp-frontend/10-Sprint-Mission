import styles from "./AuthorInfo.module.css";
import profileIcon from "assets/images/ic_profile.svg";

const AuthorInfo = ({ className, nickname, image, date }) => {
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

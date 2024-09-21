import styles from './InquireItem.module.css';

const InquireItem = ({content, userNickname, userImage ='assets/imgs/user_icon.svg', updateAt}) => {

  const  timeDifferenceFromNow = (pastTime) => {
    const now = new Date();
    const pastDate = new Date(pastTime);
  
    const diffInMs = now - pastDate;
  
    const diffInMinutes = Math.floor(diffInMs / (1000 * 60));
    const diffInHours = Math.floor(diffInMs / (1000 * 60 * 60));
    const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));
  
    if (diffInMinutes < 1) {
      return "방금 전";
    } else if (diffInMinutes < 60) {
      return `${diffInMinutes}분 전`;
    } else if (diffInHours < 24) {
      return `${diffInHours}시간 전`;
    } else {
      return `${diffInDays}일 전`;
    }
  }

  return (
    <div className={styles['container']}>
      <p className={styles['content']}>{content}</p>
      <div className={styles['user-info']}>
        <img className={styles['user-image']} src={userImage} alt="user" />
        <div className={styles['user-info-content']}>
          <p className={styles['user-nickname']}>{userNickname}</p>
          <p className={styles['updateAt']}>{timeDifferenceFromNow(updateAt)}</p>
        </div>
      </div>
    </div>
  );
};
export default InquireItem;
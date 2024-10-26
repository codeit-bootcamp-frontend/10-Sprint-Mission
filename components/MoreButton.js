import styles from '@/styles/MoreButton.module.css';

const MoreButton = ({ onClick }) => {
  return (
    <button className={styles.moreButton} onClick={onClick}>
      더보기
    </button>
  );
};

export default MoreButton;

import BestBoardCard from './BestBoardCard';
import styles from './BestBoards.module.css';

export default function BestBoards() {
  return (
    <div className={styles.bestBoards}>
      <BestBoardCard />
      <BestBoardCard />
      <BestBoardCard />
    </div>
  );
}

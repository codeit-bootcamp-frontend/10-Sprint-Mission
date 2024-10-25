import BestBoardCard from './BestBoardCard';
import styles from './BestBoards.module.css';

export default function BestBoards() {
  return (
    <section>
      <h3 className={styles.title}>베스트 게시글</h3>
      <div className={styles.bestBoards}>
        <BestBoardCard />
        <BestBoardCard />
        <BestBoardCard />
      </div>
    </section>
  );
}

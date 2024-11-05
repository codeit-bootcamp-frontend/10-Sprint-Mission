import type { Board } from '@/src/apis/boardTypes';
import BestBoardCard from './BestBoardCard';
import styles from './BestBoards.module.css';

interface BestBoardsProps {
  boards: Board[];
}

export default function BestBoards({ boards }: BestBoardsProps) {
  return (
    <section>
      <h3 className={styles.title}>베스트 게시글</h3>
      <div className={styles.bestBoards}>
        {boards.map((board) => (
          <BestBoardCard key={board.id} {...board} />
        ))}
      </div>
    </section>
  );
}

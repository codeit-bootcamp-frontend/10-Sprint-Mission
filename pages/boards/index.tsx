import { GetStaticProps } from 'next';
import BestBoards from './components/BestBoards';
import { Board } from '@/src/apis/boardTypes';
import { getBoards } from '@/src/apis/boardsApi';
import Boards from './components/Boards';

interface BoardsIndexProps {
  boards: Board[];
}

export default function BoardsIndex({ boards }: BoardsIndexProps) {
  return (
    <div>
      <BestBoards boards={boards} />
      <Boards />
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const { list } = await getBoards({
    page: 1,
    pageSize: 3,
    orderBy: 'like',
  });

  return {
    props: {
      boards: list || [],
    },
    revalidate: 600, // Re-generate the page every 600 seconds (ISR)
  };
};

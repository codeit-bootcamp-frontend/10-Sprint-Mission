import BestBoards from "@/components/boards/BestBoards";
import BoardList from "@/components/boards/BoardList";
import { fetchData } from "@/lib/fetchData";
import { ArticleProps } from "@/types/articleTypes";

export const getStaticProps = async () => {
  const BASE_URL = "https://panda-market-api.vercel.app/articles";
  const { list } = await fetchData(BASE_URL);

  return {
    props: {
      initialBoards: list,
    },
  };
};

const Boards = ({ initialBoards }: { initialBoards: ArticleProps[] }) => {
  return (
    <>
      <BestBoards />
      <BoardList initialBoards={initialBoards} />
    </>
  );
};

export default Boards;

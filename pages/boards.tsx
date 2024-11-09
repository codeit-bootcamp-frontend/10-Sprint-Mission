import BestBoards from "@/components/boards/BestBoards";
import BoardList, { BoardListProps } from "@/components/boards/BoardList";
import { fetchData } from "@/lib/fetchData";
import { GetServerSidePropsContext } from "next";

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const keyword = context.query["keyword"] ?? "";

  const BASE_URL = "https://panda-market-api.vercel.app/articles";
  const { list } = await fetchData(BASE_URL, {
    query: { keyword: typeof keyword === "string" ? keyword : "" },
  });

  return {
    props: {
      initialBoards: list,
      initialKeyword: keyword,
    },
  };
};

const Boards = ({ initialBoards, initialKeyword }: BoardListProps) => {
  return (
    <>
      <BestBoards />
      <BoardList
        initialBoards={initialBoards}
        initialKeyword={initialKeyword}
      />
    </>
  );
};

export default Boards;

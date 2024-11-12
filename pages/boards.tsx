import BestBoards from "@/components/boards/BestBoards";
import BoardList, { BoardListProps } from "@/components/boards/BoardList";
import { ARTICLE_URL } from "@/constants/url";
import { fetchData } from "@/lib/fetchData";
import { ArticleProps } from "@/types/articleTypes";
import { GetServerSidePropsContext } from "next";

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const keyword = context.query["keyword"] ?? "";

  const { list } = await fetchData<Record<string, ArticleProps[]>>(
    ARTICLE_URL,
    {
      query: { keyword: typeof keyword === "string" ? keyword : "" },
    }
  );

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

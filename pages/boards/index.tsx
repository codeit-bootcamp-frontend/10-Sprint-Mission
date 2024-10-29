import React from "react";
import BestArticlesSection from "../../components/boards/BestArticlesSection";
import AllArticlesSection from "../../components/boards/AllArticlesSection";
import { GetStaticProps } from "next";
import { Article, ArticleListResponse } from "@/types/articleTypes";
import { PageContainer } from "./index.styles";
import axios from "axios";

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await axios.get<ArticleListResponse>(
    `https://panda-market-api.vercel.app/articles?orderBy=recent`
  );

  return {
    props: {
      initialArticles: data.list,
    },
  };
};

type BoardsPageProps = {
  initialArticles: Article[];
}

export default function BoardsPage({ initialArticles }: BoardsPageProps) {
  return (
    <PageContainer>
      <BestArticlesSection />
      <AllArticlesSection initialArticles={initialArticles} />
    </PageContainer>
  );
}

import React from "react";
import styled from "styled-components";
import { Container } from "@/styles/CommonStyles";
import BestArticlesSection from "@/components/board/BestArticlesSection";
import AllArticlesSection from "@/components/board/AllArticlesSection";
import { GetStaticProps } from "next";
import { Article, ArticleListResponse } from "@/types/articleTypes";

const PageContainer = styled(Container)`
  gap: 40px;
`;

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch(
    `https://panda-market-api.vercel.app/articles?orderBy=recent`
  );
  const data: ArticleListResponse = await response.json();

  return {
    props: {
      initialArticles: data.list,
    },
  };
};

interface BoardPageProps {
  initialArticles: Article[];
}

export default function BoardPage({ initialArticles }: BoardPageProps) {
  return (
    <PageContainer>
      <BestArticlesSection />
      <AllArticlesSection initialArticles={initialArticles} />
    </PageContainer>
  );
}

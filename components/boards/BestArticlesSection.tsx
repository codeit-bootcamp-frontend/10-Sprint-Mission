import { useEffect, useState } from "react";
import Image from "next/image";
import { format } from "date-fns";

import {
  SectionHeader,
  SectionTitle,
} from "@/styles/CommonStyles";
import { Article, ArticleListResponse } from "@/types/articleTypes";
import {
  ArticleInfo,
  ArticleInfoDiv,
  ArticleThumbnail,
  ArticleTitle,
  ImageWrapper,
  MainContent,
  Timestamp,
} from "@/styles/BoardsStyles";
import MedalIcon from "@/public/images/icons/ic_medal.svg";
import useViewport from "@/hooks/useViewport";
import LikeCountDisplay from "@/components/ui/LikeCountDisplay";

import { CardContainer, ContentWrapper, BestSticker, BestArticlesCardSection } from "./BestArticlesSection.styles";
import axios from "axios";

const BestArticleCard = ({ article }: { article: Article }) => {
  const dateString = format(article.createdAt, "yyyy. MM. dd");

  return (
    <CardContainer href={`/boards/${article.id}`}>
      <BestSticker>
        <MedalIcon alt="베스트 게시글" />Best</BestSticker>

      <ContentWrapper>
        <MainContent>
          <ArticleTitle>{article.title}</ArticleTitle>
          {article.image && (
            <ArticleThumbnail>
              <ImageWrapper>
                <Image
                  fill
                  src={article.image}
                  alt={`${article.id}번 게시글 이미지`}
                  style={{ objectFit: "contain" }}
                />
              </ImageWrapper>
            </ArticleThumbnail>
          )}
        </MainContent>

        <ArticleInfo>
          <ArticleInfoDiv>
            {article.writer.nickname}
            <LikeCountDisplay count={article.likeCount} fontSize={14} />
          </ArticleInfoDiv>
          <Timestamp>{dateString}</Timestamp>
        </ArticleInfo>
      </ContentWrapper>
    </CardContainer>
  );
};

/**
 * Determines appropriate best articles section counts based on the viewport width max 3.
 *
 * @param width - The current viewport width in pixels.
 * @returns The recommended page size (1:Mobile, 2:Tablet, or 3:Desktop) based on the viewport width.
 */
const getPageSize = (width: number): number => {
  if (width < 768) {
    return 1;
  } else if (width < 1280) {
    return 2;
  } else {
    return 3;
  }
};

const BestArticlesSection = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [pageSize, setPageSize] = useState<number | null>(null);

  const viewportWidth = useViewport();

  useEffect(() => {
    if (viewportWidth === 0) return;

    const newPageSize = getPageSize(viewportWidth);

    if (newPageSize !== pageSize) {
      setPageSize(newPageSize);

      const fetchBestArticles = async (size: number) => {
        try {
          const response = await axios.get<ArticleListResponse>(
            `https://panda-market-api.vercel.app/articles?orderBy=like&pageSize=${size}`
          );
          setArticles(response.data.list);
        } catch (error) {
          console.error("Failed to fetch best articles:", error);
        }
      };

      fetchBestArticles(newPageSize);
    }
  }, [viewportWidth, pageSize]);

  return (
    <div>
      <SectionHeader>
        <SectionTitle>베스트 게시글</SectionTitle>
      </SectionHeader>

      <BestArticlesCardSection>
        {articles.map((article) => (
          <BestArticleCard
            key={`best-article-${article.id}`}
            article={article}
          />
        ))}
      </BestArticlesCardSection>
    </div>
  );
};

export default BestArticlesSection;

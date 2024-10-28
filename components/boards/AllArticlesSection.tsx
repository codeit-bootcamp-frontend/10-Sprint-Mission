import {
  FlexRowCentered,
  LineDivider,
  SectionHeader,
  SectionTitle,
  StyledLink,
} from "@/styles/CommonStyles";
import { Article, ArticleSortOption } from "@/types/articleTypes";
import {
  ArticleInfo,
  ArticleThumbnail,
  ArticleTitle,
  ImageWrapper,
  MainContent,
  Timestamp,
} from "@/styles/BoardsStyles";
import Image from "next/image";
import { format } from "date-fns";
import SearchBar from "@/components/ui/SearchBar";
import DropdownMenu from "@/components/ui/DropdownMenu";
import { useEffect, useState } from "react";
import LikeCountDisplay from "@/components/ui/LikeCountDisplay";
import EmptyState from "@/components/ui/EmptyState";
import { useRouter } from "next/router";

import { ItemContainer, ArticleInfoDiv, AddArticleLink } from "./AllArticlesSection.styles";

type ArticleItemProps = {
  article: Article;
}

const ArticleItem = ({ article }: ArticleItemProps) => {
  const dateString = format(article.createdAt, "yyyy. MM. dd");

  return (
    <>
      <ItemContainer href={`/boards/${article.id}`}>
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
            {article.writer.nickname} <Timestamp>{dateString}</Timestamp>
          </ArticleInfoDiv>

          <LikeCountDisplay count={article.likeCount} iconWidth={24} gap={8} />
        </ArticleInfo>
      </ItemContainer>

      <LineDivider $margin="24px 0" />
    </>
  );
};

type AllArticlesSectionProps = {
  initialArticles: Article[];
}

const AllArticlesSection = ({initialArticles}: AllArticlesSectionProps) => {
  const [orderBy, setOrderBy] = useState<ArticleSortOption>("recent");
  const [articles, setArticles] = useState(initialArticles);

  const router = useRouter();
  const keyword = (router.query.q as string) || "";

  const handleSortSelection = (sortOption: ArticleSortOption) => {
    setOrderBy(sortOption);
  };

  const handleSearch = (searchKeyword: string) => {
    const query = { ...router.query };
    if (searchKeyword.trim()) {
      query.q = searchKeyword;
    } else {
      delete query.q;
    }
    router.replace({
      pathname: router.pathname,
      query,
    });
  };

  useEffect(() => {
    const fetchArticles = async () => {
      let url = `https://panda-market-api.vercel.app/articles?orderBy=${orderBy}`;
      if (keyword.trim()) {
        url += `&keyword=${encodeURIComponent(keyword)}`;
      }
      const response = await fetch(url);
      const data = await response.json();
      setArticles(data.list);
    };

    fetchArticles();
  }, [orderBy, keyword]);

  return (
    <div>
      <SectionHeader>
        <SectionTitle>게시글</SectionTitle>
        <AddArticleLink href="/addArticle">글쓰기</AddArticleLink>
      </SectionHeader>

      <SectionHeader>
        <SearchBar onSearch={handleSearch} />
        <DropdownMenu
          onSortSelection={handleSortSelection}
          sortOptions={[
            { key: "recent", label: "최신순" },
            { key: "like", label: "인기순" },
          ]}
        />
      </SectionHeader>

      {articles.length
        ? articles.map((article) => (
            <ArticleItem key={`article-${article.id}`} article={article} />
          ))
        : keyword && (
            <EmptyState text={`'${keyword}'로 검색된 결과가 없어요.`} />
          )}
    </div>
  );
};

export default AllArticlesSection;

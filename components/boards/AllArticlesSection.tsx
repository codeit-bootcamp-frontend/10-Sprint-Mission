import {
  FlexRowCentered,
  LineDivider,
  SectionHeader,
  SectionTitle,
  StyledLink,
} from "@/styles/CommonStyles";
import { Article, ArticleSortOption } from "@/types/articleTypes";
import styled from "styled-components";
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
import Link from "next/link";
import ProfilePlaceholder from "@/public/images/ui/ic_profile.svg";
import SearchBar from "@/components/ui/SearchBar";
import DropdownMenu from "@/components/ui/DropdownMenu";
import { useEffect, useState } from "react";
import LikeCountDisplay from "@/components/ui/LikeCountDisplay";
import EmptyState from "@/components/ui/EmptyState";
import { useRouter } from "next/router";

const ItemContainer = styled(Link)``;

const ArticleInfoDiv = styled(FlexRowCentered)`
  gap: 8px;
  color: var(--gray-600);
  font-size: 14px;
`;

interface ArticleItemProps {
  article: Article;
}

const ArticleItem: React.FC<ArticleItemProps> = ({ article }) => {
  const dateString = format(article.createdAt, "yyyy. MM. dd");

  return (
    <>
      <ItemContainer href={`/boards/${article.id}`}>
        <MainContent>
          <ArticleTitle>{article.title}</ArticleTitle>
          {article.image && (
            <ArticleThumbnail>
              {/* Next Image의 width, height을 설정해줄 것이 아니라면 부모 div 내에서 fill, objectFit 설정으로 비율 유지하면서 유연하게 크기 조정 */}
              {/* 프로젝트 내에 있는 이미지 파일을 사용하는 게 아니라면 next.config.mjs에 이미지 주소 설정 필요 */}
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
            {/* ProfilePlaceholder 아이콘의 SVG 파일에서 고정된 width, height을 삭제했어요 */}
            {/* <ProfilePlaceholder width={24} height={24} /> */}
            {article.writer.nickname} <Timestamp>{dateString}</Timestamp>
          </ArticleInfoDiv>

          <LikeCountDisplay count={article.likeCount} iconWidth={24} gap={8} />
        </ArticleInfo>
      </ItemContainer>

      <LineDivider $margin="24px 0" />
    </>
  );
};

const AddArticleLink = styled(StyledLink)``;

interface AllArticlesSectionProps {
  initialArticles: Article[];
}

const AllArticlesSection: React.FC<AllArticlesSectionProps> = ({
  initialArticles,
}) => {
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

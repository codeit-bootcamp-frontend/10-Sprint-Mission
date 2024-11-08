import {
  LineDivider,
  SectionHeader,
  SectionTitle,
} from "@/styles/CommonStyles";
import { Article, ArticleSortOption } from "@/types/articleTypes";
import {
  ArticleInfoWrapper,
  ArticleThumbnail,
  ArticleTitle,
  ImageWrapper,
  MainContent,
} from "@/styles/BoardStyles";
import Image from "next/image";
import SearchBar from "@/components/ui/SearchBar";
import DropdownMenu from "@/components/ui/DropdownMenu";
import { useEffect, useState } from "react";
import LikeCountDisplay from "@/components/ui/LikeCountDisplay";
import EmptyState from "@/components/ui/EmptyState";
import { useRouter } from "next/router";
import ArticleInfo from "@/components/board/ArticleInfo";
import {  ItemContainer, AddArticleLink } from "@/styles/BoardStyles";

interface ArticleItemProps {
  article: Article;
}

const ArticleItem: React.FC<ArticleItemProps> = ({ article }) => {
  return (
    <>
      <ItemContainer href={`/board/${article.id}`}>
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

        <ArticleInfoWrapper>
          <ArticleInfo article={article} />

          <LikeCountDisplay count={article.likeCount} iconWidth={24} gap={8} />
        </ArticleInfoWrapper>
      </ItemContainer>

      <LineDivider $margin="24px 0" />
    </>
  );
};

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

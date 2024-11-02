import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { getArticleDetail } from "@/api/articleApi";
import ArticleContentSection from "@/components/board/ArticleContentSection";
import ArticleCommentSection from "@/components/board/ArticleCommentSection";
import GoBackToIndexPageLink from "@/components/thread/GoBackToIndexPageLink";
import LoadingSpinner from "@/components/ui/LoadingSpinner";
import { Container } from "@/styles/CommonStyles";
import { Article } from "@/types/articleTypes";

const ArticlePage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [article, setArticle] = useState<Article | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const articleId = Number(id);

  useEffect(() => {
    if (!router.isReady) return;

    async function fetchArticle() {
      if (!articleId) {
        setError("게시글 아이디가 제공되지 않았어요.");
        setIsLoading(false);
        return;
      }

      setIsLoading(true);
      try {
        const data: Article = await getArticleDetail(articleId);
        if (!data) {
          throw new Error("해당 게시글의 데이터를 찾을 수 없습니다.");
        }
        setArticle(data);
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError("알 수 없는 오류가 발생했습니다.");
        }
      } finally {
        setIsLoading(false);
      }
    }

    fetchArticle();
  }, [articleId, router.isReady]);

  if (error) {
    alert(`오류: ${error}`);
  }

  if (!id || !article) return null;

  return (
    <>
      <LoadingSpinner isLoading={isLoading} />

      <Container>
        <ArticleContentSection article={article} />

        <ArticleCommentSection articleId={articleId} />

        <GoBackToIndexPageLink pathname="/board" />
      </Container>
    </>
  );
};

export default ArticlePage;

import { useEffect, useState } from "react";
import { Comment, CommentListResponse } from "@/types/commentTypes";
import EmptyState from "@/components/ui/EmptyState";
import CommentItem from "@/components/thread/CommentItem";
import { getArticleComments } from "@/api/articleApi";
import { ThreadContainer } from "@/styles/BoardStyles";

interface ArticlePageCommentThreadProps {
  articleId: number;
}

const ArticlePageCommentThread: React.FC<ArticlePageCommentThreadProps> = ({
  articleId,
}) => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!articleId) return;

    const fetchComments = async () => {
      setIsLoading(true);

      try {
        const response: CommentListResponse = await getArticleComments({
          articleId,
        });
        setComments(response.list);
        setError(null);
      } catch (error) {
        console.error("Error fetching comments:", error);
        setError("게시글의 댓글을 불러오지 못했어요.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchComments();
  }, [articleId]);

  if (isLoading) {
    return <div>게시글 댓글 로딩중...</div>;
  }

  if (error) {
    return <div>오류: {error}</div>;
  }

  if (comments && !comments.length) {
    return (
      <EmptyState text={`아직 댓글이 없어요,\n지금 댓글을 달아 보세요!`} />
    );
  } else {
    return (
      <ThreadContainer>
        {comments.map((item) => (
          <CommentItem item={item} key={`comment-${item.id}`} />
        ))}
      </ThreadContainer>
    );
  }
};

export default ArticlePageCommentThread;

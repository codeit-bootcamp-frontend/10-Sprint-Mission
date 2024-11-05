import { useEffect, useState } from "react";
import styled from "styled-components";
import { getProductComments } from "@/api/itemApi";
import { Comment, CommentListResponse } from "@/types/commentTypes";
import EmptyState from "@/components/ui/EmptyState";
import CommentItem from "@/components/thread/CommentItem";

const ThreadContainer = styled.div`
  margin-bottom: 40px;
`;

interface ItemPageCommentThreadProps {
  productId: number;
}

const ItemPageCommentThread: React.FC<ItemPageCommentThreadProps> = ({
  productId,
}) => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!productId) return;

    const fetchComments = async () => {
      setIsLoading(true);

      try {
        const response: CommentListResponse = await getProductComments({
          productId,
        });
        setComments(response.list);
        setError(null);
      } catch (error) {
        console.error("Error fetching comments:", error);
        setError("상품의 댓글을 불러오지 못했어요.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchComments();
  }, [productId]);

  if (isLoading) {
    return <div>상품 댓글 로딩중...</div>;
  }

  if (error) {
    return <div>오류: {error}</div>;
  }

  if (comments && !comments.length) {
    return <EmptyState text="아직 문의가 없습니다." />;
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

export default ItemPageCommentThread;

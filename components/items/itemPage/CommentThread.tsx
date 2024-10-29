import { useEffect, useState } from "react";
import { getProductComments } from "@/api/itemApi";
import SeeMoreIcon from "@/public/images/icons/ic_kebab.svg";
import DefaultProfileImage from "@/public/images/ui/ic_profile.svg";
import { LineDivider } from "@/styles/CommonStyles";
import { formatUpdatedAt } from "@/utils/dateUtils";
import {
  ProductComment,
  ProductCommentListResponse,
} from "@/types/commentTypes";
import EmptyState from "@/components/ui/EmptyState";

import {
  CommentContainer,
  SeeMoreButton,
  CommentContent,
  AuthorProfile,
  UserProfileImage,
  Username,
  Timestamp,
  ThreadContainer,
} from "./CommentThread.styles";

type CommentItemProps = {
  item: ProductComment;
}

const CommentItem = ({ item }: CommentItemProps) => {
  const authorInfo = item.writer;
  const formattedTimestamp = formatUpdatedAt(item.updatedAt);

  return (
    <>
      <CommentContainer>
        <SeeMoreButton>
          <SeeMoreIcon />
        </SeeMoreButton>

        <CommentContent>{item.content}</CommentContent>

        <AuthorProfile>
          <UserProfileImage
            src={authorInfo.image || DefaultProfileImage}
            alt={`${authorInfo.nickname}님의 프로필 사진`}
          />

          <div>
            <Username>{authorInfo.nickname}</Username>
            <Timestamp>{formattedTimestamp}</Timestamp>
          </div>
        </AuthorProfile>
      </CommentContainer>

      <LineDivider $margin="0" />
    </>
  );
};

type CommentThreadProps = {
  productId: number;
}

const CommentThread = ({ productId }: CommentThreadProps) => {
  const [comments, setComments] = useState<ProductComment[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!productId) return;

    const fetchComments = async () => {
      setIsLoading(true);

      try {
        const response: ProductCommentListResponse = await getProductComments({
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

export default CommentThread;

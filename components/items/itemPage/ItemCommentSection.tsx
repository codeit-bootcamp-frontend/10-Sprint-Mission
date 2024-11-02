import { ChangeEvent, useState } from "react";
import { TextArea } from "@/styles/CommonStyles";
import ItemPageCommentThread from "@/components/items/itemPage/ItemPageCommentThread";
import {
  CommentInputSection,
  CommentSectionTitle,
  PostCommentButton,
} from "@/styles/CommentStyles";

const COMMENT_PLACEHOLDER =
  "개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다.";

interface ItemCommentSectionProps {
  productId: number;
}

const ItemCommentSection: React.FC<ItemCommentSectionProps> = ({
  productId,
}) => {
  const [comment, setComment] = useState("");

  const handleInputChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setComment(e.target.value);
  };

  const handlePostComment = () => {};

  return (
    <>
      <CommentInputSection>
        <CommentSectionTitle>문의하기</CommentSectionTitle>

        <TextArea
          placeholder={COMMENT_PLACEHOLDER}
          value={comment}
          onChange={handleInputChange}
        />

        <PostCommentButton
          onClick={handlePostComment}
          disabled={!comment.trim()}
        >
          등록
        </PostCommentButton>
      </CommentInputSection>

      <ItemPageCommentThread productId={productId} />
    </>
  );
};

export default ItemCommentSection;

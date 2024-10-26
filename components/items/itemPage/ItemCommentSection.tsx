import { ChangeEvent, useState } from "react";
import styled from "styled-components";
import { Button } from "@/styles/CommonStyles";
import CommentThread from "./CommentThread";

const COMMENT_PLACEHOLDER =
  "개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다.";

const CommentInputSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const SectionTitle = styled.h1`
  font-size: 16px;
  font-weight: 600;
`;

const TextArea = styled.textarea`
  background-color: ${({ theme }) => theme.colors.gray[100]};
  border: none;
  border-radius: 12px;
  padding: 16px 24px;
  height: 104px;
  resize: none;

  &::placeholder {
    color: ${({ theme }) => theme.colors.gray[400]};
    font-size: 14px;
    line-height: 24px;

    @media ${({ theme }) => theme.mediaQuery.tablet} {
      font-size: 16px;
    }
  }

  &:focus {
    outline-color: ${({ theme }) => theme.colors.blue.primary};
  }
`;

const PostCommentButton = styled(Button)`
  align-self: flex-end;
  font-weight: 600;
  font-size: 14px;

  @media ${({ theme }) => theme.mediaQuery.tablet} {
    font-size: 16px;
  }
`;

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
        <SectionTitle>문의하기</SectionTitle>

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

      <CommentThread productId={productId} />
    </>
  );
};

export default ItemCommentSection;

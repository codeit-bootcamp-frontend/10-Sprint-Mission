import { ChangeEvent, useState } from "react";
import { TextArea } from "@/styles/CommonStyles";
import ArticlePageCommentThread from "@/components/board/ArticlePageCommentThread";
import {
  CommentInputSection,
  CommentSectionTitle,
  PostCommentButton,
} from "@/styles/CommentStyles";

interface ArticleCommentSectionProps {
  articleId: number;
}

const ArticleCommentSection: React.FC<ArticleCommentSectionProps> = ({
  articleId,
}) => {
  const [comment, setComment] = useState("");

  const handleInputChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setComment(e.target.value);
  };

  const handlePostComment = () => {};

  return (
    <>
      <CommentInputSection>
        <CommentSectionTitle>댓글 달기</CommentSectionTitle>

        <TextArea
          placeholder={"댓글을 입력해 주세요."}
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

      <ArticlePageCommentThread articleId={articleId} />
    </>
  );
};

export default ArticleCommentSection;

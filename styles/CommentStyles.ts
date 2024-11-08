import styled from "styled-components";
import { Button } from "@/styles/CommonStyles";

export const CommentInputSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const CommentSectionTitle = styled.h1`
  font-size: 16px;
  font-weight: 600;
`;

export const PostCommentButton = styled(Button)`
  align-self: flex-end;
  font-weight: 600;
  font-size: 14px;

  @media ${({ theme }) => theme.mediaQuery.tablet} {
    font-size: 16px;
  }
`;

import styled from "styled-components";
import { FlexRowCentered } from "@/styles/CommonStyles";

const LikeCountWrapper = styled(FlexRowCentered)<{
  $fontSize: number;
  $gap: number;
}>`
  color: var(--gray-500);
  font-size: ${({ $fontSize }) => `${$fontSize}px`};
  gap: ${({ $gap }) => `${$gap}px`};
`;

export { LikeCountWrapper };

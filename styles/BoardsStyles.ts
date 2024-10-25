import styled from "styled-components";
import { SpaceBetween } from "@/styles/CommonStyles";

export const ArticleTitle = styled.h2`
  font-size: 18px;
  font-weight: 600;
  flex: 1;

  @media ${({ theme }) => theme.mediaQuery.tablet} {
    font-size: 20px;
  }
`;

export const MainContent = styled.div`
  display: flex;
  gap: 8px;
  min-height: 72px;
`;

export const ArticleInfo = styled(SpaceBetween)`
  margin-top: 16px;
`;

export const ArticleInfoDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: var(--gray-600);
  font-size: 14px;
`;

export const Timestamp = styled.span`
  font-size: 14px;
  color: var(--gray-400);
`;

export const ArticleThumbnail = styled.div`
  background-color: #fff;
  border: 1px solid var(--gray-200);
  width: 72px;
  height: 72px;
  border-radius: 8px;
  padding: 12px;
`;

export const ImageWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

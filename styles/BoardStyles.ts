import styled from "styled-components";
import Link from "next/link";
import { SpaceBetween } from "@/styles/CommonStyles";
import { FlexRowCentered, StyledLink } from "@/styles/CommonStyles";

const ArticleTitle = styled.h2`
  font-size: 18px;
  font-weight: 600;
  flex: 1;

  @media ${({ theme }) => theme.mediaQuery.tablet} {
    font-size: 20px;
  }
`;

const MainContent = styled.div`
  display: flex;
  gap: 8px;
  min-height: 72px;
`;

const ArticleInfoWrapper = styled(SpaceBetween)`
  margin-top: 16px;
  gap: 16px;
`;

const ArticleInfoDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: var(--gray-600);
  font-size: 14px;
`;

const Timestamp = styled.span`
  font-size: 14px;
  color: var(--gray-400);
`;

const ArticleThumbnail = styled.div`
  background-color: #fff;
  border: 1px solid var(--gray-200);
  width: 72px;
  height: 72px;
  border-radius: 8px;
  padding: 12px;
`;

const ImageWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;


// AllArticlesSection
const ItemContainer = styled(Link)``;
const AddArticleLink = styled(StyledLink)``;

// ArticleContentSection
const SectionContainer = styled.div`
  margin-bottom: 40px;

  @media ${({ theme }) => theme.mediaQuery.tablet} {
    margin-bottom: 64px;
  }
`;

const ArticleHeaderContainer = styled.div`
  position: relative;
`;

const SeeMoreButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
`;

const Title = styled.h1`
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 16px;
`;

const VerticalDivider = styled.div`
  border-left: 1px solid var(--gray-200);
  height: 24px;
`;

const Content = styled.p`
  font-size: 16px;
`;

// ArticleInfo
const Container = styled(FlexRowCentered)`
  gap: 8px;
  color: var(--gray-600);
  font-size: 14px;
`;


// ArticlePageCommentThread
const ThreadContainer = styled.div`
  margin-bottom: 40px;
`;


// BestArticlesSection
const CardContainer = styled(Link)`
  background-color: var(--gray-50);
  border-radius: 8px;
`;

const ContentWrapper = styled.div`
  padding: 16px 24px;
`;

const BestSticker = styled(FlexRowCentered)`
  background-color: var(--blue);
  border-radius: 0 0 32px 32px;
  font-size: 16px;
  font-weight: 600;
  color: #fff;
  gap: 4px;
  padding: 6px 24px 8px 24px;
  margin-left: 24px;
  display: inline-flex;
`;

const BestArticlesCardSection = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);

  @media ${({ theme }) => theme.mediaQuery.tablet} {
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
  }

  @media ${({ theme }) => theme.mediaQuery.desktop} {
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
  }
`;

export {
  ArticleTitle,
  MainContent,
  ArticleInfoWrapper,
  ArticleInfoDiv,
  Timestamp,
  ArticleThumbnail,
  ImageWrapper,
  ItemContainer ,
  AddArticleLink,
  SectionContainer,
  ArticleHeaderContainer,
  SeeMoreButton,
  Title,
  VerticalDivider,
  Content,
  Container,
  ThreadContainer,
  CardContainer,
  ContentWrapper,
  BestSticker,
  BestArticlesCardSection,
};
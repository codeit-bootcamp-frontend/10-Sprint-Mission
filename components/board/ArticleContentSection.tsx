import styled from "styled-components";
import { FlexRowCentered, LineDivider } from "@/styles/CommonStyles";
import { Article } from "@/types/articleTypes";
import SeeMoreIcon from "@/public/images/icons/ic_kebab.svg";
import ArticleInfo from "@/components/board/ArticleInfo";
import LikeCountDisplay from "@/components/ui/LikeCountDisplay";

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

const ArticleInfoWrapper = styled(FlexRowCentered)`
  gap: 16px;
`;

const VerticalDivider = styled.div`
  border-left: 1px solid var(--gray-200);
  height: 24px;
`;

const Content = styled.p`
  font-size: 16px;
`;

interface ArticleContentSectionProps {
  article: Article;
}

const ArticleContentSection: React.FC<ArticleContentSectionProps> = ({
  article,
}) => {
  return (
    <SectionContainer>
      <ArticleHeaderContainer>
        <Title>{article.title}</Title>

        <SeeMoreButton>
          <SeeMoreIcon />
        </SeeMoreButton>

        <ArticleInfoWrapper>
          <ArticleInfo article={article} />
          <VerticalDivider />
          <LikeCountDisplay count={article.likeCount} iconWidth={24} gap={8} />
        </ArticleInfoWrapper>
      </ArticleHeaderContainer>

      <LineDivider />

      <Content>{article.content}</Content>
    </SectionContainer>
  );
};

export default ArticleContentSection;

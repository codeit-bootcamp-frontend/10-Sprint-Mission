import { FlexRowCentered, LineDivider } from "@/styles/CommonStyles";
import { Article } from "@/types/articleTypes";
import SeeMoreIcon from "@/public/images/icons/ic_kebab.svg";
import ArticleInfo from "@/components/board/ArticleInfo";
import LikeCountDisplay from "@/components/ui/LikeCountDisplay";
import {
  SectionContainer,
  ArticleHeaderContainer,
  SeeMoreButton,
  Title,
  ArticleInfoWrapper,
  VerticalDivider,
  Content } from  "@/styles/BoardStyles";

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

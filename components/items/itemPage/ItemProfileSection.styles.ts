import styled from "styled-components";

const SectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;

  @media ${({ theme }) => theme.mediaQuery.tablet} {
    flex-direction: row;
  }

  @media ${({ theme }) => theme.mediaQuery.desktop} {
    gap: 24px;
  }
`;

const ItemImageContainer = styled.div`
  width: 100%;
  flex: 1;
  aspect-ratio: 1/1;
  border-radius: 12px;
  overflow: hidden;

  @media ${({ theme }) => theme.mediaQuery.tablet} {
    width: 40%;
    max-width: 486px;
  }
`;

const ImageWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

const ItemDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
  align-items: flex-start;
`;

const MainDetails = styled.div`
  width: 100%;
  position: relative;
`;

const SeeMoreButton = styled.button`
  position: absolute;
  right: 0;
`;

const ItemTitle = styled.h1`
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 8px;

  @media ${({ theme }) => theme.mediaQuery.tablet} {
    font-size: 20px;
    margin-bottom: 12px;
  }

  @media ${({ theme }) => theme.mediaQuery.desktop} {
    font-size: 24px;
    margin-bottom: 16px;
  }
`;

const ItemPrice = styled.h2`
  font-size: 24px;
  font-weight: 600;

  @media ${({ theme }) => theme.mediaQuery.tablet} {
    font-size: 32px;
  }

  @media ${({ theme }) => theme.mediaQuery.desktop} {
    font-size: 40px;
  }
`;

const Description = styled.p`
  font-size: 16px;
  line-height: 140%;
`;

const SectionLabel = styled.h3`
  color: var(--gray-600);
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 8px;
`;

const TagDisplaySection = styled.div`
  margin: 24px 0;
`;

export {
  SectionContainer,
  ItemImageContainer,
  ImageWrapper,
  ItemDetailsContainer,
  MainDetails,
  SeeMoreButton,
  ItemTitle,
  ItemPrice,
  Description,
  SectionLabel,
  TagDisplaySection,
};
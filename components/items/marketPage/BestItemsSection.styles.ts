import styled from "styled-components";

const BestItemsContainer = styled.div`
  padding-top: 17px;
  padding-bottom: 24px;

  @media ${({ theme }) => theme.mediaQuery.tablet} {
    margin-bottom: 40px;
  }
`;

const BestItemsCardSection = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 32px 8px;

  @media ${({ theme }) => theme.mediaQuery.tablet} {
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
  }

  @media ${({ theme }) => theme.mediaQuery.desktop} {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export { BestItemsContainer, BestItemsCardSection };
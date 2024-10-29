import styled from "styled-components";
import Link from "next/link";
import {
  FlexRowCentered,
} from "@/styles/CommonStyles";

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

export { CardContainer, ContentWrapper, BestSticker, BestArticlesCardSection };

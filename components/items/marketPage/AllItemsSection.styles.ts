import styled from "styled-components";
import { StyledLink } from "@/styles/CommonStyles";

const AddItemLink = styled(StyledLink)``;

const AllItemsCardSection = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 32px 8px;

  @media ${({ theme }) => theme.mediaQuery.desktop} {
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(2, auto);
    gap: 40px 24px;
  }
`;

const PaginationBarWrapper = styled.div`
  padding-top: 40px;
  padding-bottom: 80px;
`;

export { AddItemLink, AllItemsCardSection, PaginationBarWrapper };
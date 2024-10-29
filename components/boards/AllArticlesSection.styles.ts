import styled from "styled-components";
import Link from "next/link";
import {
  FlexRowCentered,
  StyledLink,
} from "@/styles/CommonStyles";

const ItemContainer = styled(Link)``;

const ArticleInfoDiv = styled(FlexRowCentered)`
  gap: 8px;
  color: var(--gray-600);
  font-size: 14px;
`;

const AddArticleLink = styled(StyledLink)``;

export { ItemContainer, ArticleInfoDiv, AddArticleLink };

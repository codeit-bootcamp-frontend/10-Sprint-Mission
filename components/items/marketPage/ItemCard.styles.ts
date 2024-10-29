import styled from "styled-components";
import Link from "next/link";

const ItemCardContainer = styled(Link)`
  color: var(--gray-800);
  overflow: hidden;
  cursor: pointer;
`;

const ItemCardThumbnail = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 16px;
  overflow: hidden;
  aspect-ratio: 1;
  margin-bottom: 16px;
`;

const ItemSummary = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  flex-grow: 1;
`;

const ItemName = styled.h2`
  font-size: 16px;
  font-weight: 400;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const ItemPrice = styled.p`
  font-size: 16px;
  font-weight: bold;
`;

export {
  ItemCardContainer,
  ItemCardThumbnail,
  ItemSummary,
  ItemName,
  ItemPrice,
};
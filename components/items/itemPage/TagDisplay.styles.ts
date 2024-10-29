import styled from "styled-components";

const TagsDisplaySection = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
`;

const Tag = styled.div`
  background-color: ${({ theme }) => theme.colors.gray[50]};
  color: ${({ theme }) => theme.colors.gray[800]};
  padding: 6px 16px;
  border-radius: 999px;
  font-size: 16px;
`;

export { TagsDisplaySection, Tag };
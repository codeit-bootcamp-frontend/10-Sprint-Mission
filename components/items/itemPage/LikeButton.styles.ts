import styled from "styled-components";


const PillButton = styled.button`
  color: var(--gray-500);
  font-size: 16px;
  padding: 4px 12px;
  border-radius: 999px;
  border: 1px solid var(--gray-200);

  /* 버튼 hover 시 아이콘의 아웃라인과 채움색을 변경 */
  &:hover svg path {
    fill: var(--red);
    stroke: var(--red);
  }
`;

const ButtonContent = styled(FlexRowCentered)`
  gap: 4px;
`;

export { PillButton, ButtonContent };
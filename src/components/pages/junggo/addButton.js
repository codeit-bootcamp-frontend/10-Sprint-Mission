import Button from "../Button.js";
import styled from "styled-components";
import { Link } from "react-router-dom";

const TopContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const AddButton = styled(Button)`
  border-radius: 8px;
  background-color: #3692ff;
`;

function TopComponent() {
  return (
    <TopContainer>
      <h2>전체 상품</h2>
      <StyledLink to="/additems">
        <AddButton>상품 등록하기</AddButton>
      </StyledLink>
    </TopContainer>
  );
}

export default TopComponent;

import styled from "styled-components";

const AdditemHeader = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ItemRegist = styled.h1`
  margin-top: 5px;
  margin-bottom: 5px;
  font-size: 20px;
  line-height: 32px;
  font-weight: 700;
`;

const ItemButton = styled.button`
  width: 74px;
  height: 42px;
  border-radius: 8px;
  border: 1px solid #ffffff;
  background-color: #9ca3af;
  color: #ffffff;
  background-color: ${(props) => (props.$active ? "#4a90e2" : "#9ca3af")};
`;

const Additemheader = ({ isButtonActive }) => {
  console.log("isButtonActive :", isButtonActive);
  return (
    <AdditemHeader>
      <ItemRegist>상품 등록하기</ItemRegist>
      <ItemButton type="button" $active={isButtonActive}>
        등록
      </ItemButton>
    </AdditemHeader>
  );
};
export default Additemheader;

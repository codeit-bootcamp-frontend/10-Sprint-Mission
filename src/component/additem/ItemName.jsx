import styled from "styled-components";

const ItemSubTitle = styled.h2`
  margin-top: 24px;
  font-weight: 700;
  font-size: 18px;
  line-height: 26px;
`;

const ItemName = styled.input`
  margin-top: 16px;
  width: 100%;
  height: 56px;
  border-radius: 12px;
  padding: 16px 24px;
  background-color: #f3f4f6;
  border: 1px solid #ffffff;
`;

const handleNameChange = (e, setItem) => {
  const value = e.target.value.trim();
  setItem((prev) => ({
    ...prev,
    name: value.length > 0,
  }));
};

const Itemname = ({ setItem }) => {
  return (
    <section>
      <ItemSubTitle>상품명</ItemSubTitle>
      <ItemName
        type="text"
        placeholder="상품명을 입력해주세요"
        onChange={(e) => handleNameChange(e, setItem)}
      />
    </section>
  );
};

export default Itemname;

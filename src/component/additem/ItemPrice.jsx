import styled from "styled-components";

const ItemPrice = styled.input`
  margin-top: 16px;
  width: 100%;
  height: 56px;
  border-radius: 12px;
  padding: 16px 24px;
  background-color: #f3f4f6;
  border: 1px solid #ffffff;
`;
const ItemSubTitle = styled.h2`
  margin-top: 24px;
  font-weight: 700;
  font-size: 18px;
  line-height: 26px;
`;
const Itemprice = ({ setItem }) => {
  return (
    <section>
      <ItemSubTitle>판매가격</ItemSubTitle>
      <ItemPrice
        type="text"
        placeholder="판매 가격을 입력해주세요"
        onChange={(e) => {
          const value = e.target.value.trim();
          setItem((prev) => ({
            ...prev,
            price: value.length > 0,
          }));
          console.log("Price");
        }}
      />
    </section>
  );
};

export default Itemprice;

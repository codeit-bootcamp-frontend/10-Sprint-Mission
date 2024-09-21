import styled from "styled-components";

const ItemSubTitle = styled.h2`
  margin-top: 24px;
  font-weight: 700;
  font-size: 18px;
  line-height: 26px;
`;

const ItemContent = styled.textarea`
  margin-top: 16px;
  width: 100%;
  height: 282px;
  border-radius: 12px;
  background-color: #f3f4f6;
  border: 1px solid #ffffff;
  text-align: left;
  position: relative;
  padding: 16px;
  line-height: 1.2;
  resize: none;
  &::placeholder {
    position: absolute;
    top: 16px;
    left: 16px;
  }
  &:focus {
    border: 1px solid #3692ff;
    outline: none;
  }
`;

const Itemintro = ({ setItem }) => {
  return (
    <section>
      <ItemSubTitle>상품소개</ItemSubTitle>
      <ItemContent
        type="text"
        placeholder="상품 소개를 입력해주세요"
        onChange={(e) => {
          const value = e.target.value.trim();
          setItem((prev) => ({
            ...prev,
            intro: value.length > 0,
          }));
          console.log("intro");
        }}
      />
    </section>
  );
};

export default Itemintro;

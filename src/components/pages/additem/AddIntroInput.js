import React from "react";
import styled from "styled-components";
import Input from "../Input.js";

const StyledIntroduceInput = styled(Input)`
  width: 100%;
  padding-bottom: 100px;
  text-align: start;
`;

function IntroInput({ value, onChange }) {
  return (
    <StyledIntroduceInput
      type="text"
      placeholder="상품 소개를 입력해주세요"
      value={value}
      onChange={onChange}
    />
  );
}

export default IntroInput;

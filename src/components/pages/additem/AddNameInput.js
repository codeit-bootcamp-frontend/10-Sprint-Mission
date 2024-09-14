import React from "react";
import styled from "styled-components";
import Input from "../Input.js";

const StyledNameInput = styled(Input)`
  width: 100%;
  padding: 10px;
  text-align: start;
`;

function NameInput({ value, onChange }) {
  return (
    <StyledNameInput
      type="text"
      placeholder="상품명을 입력해주세요"
      value={value}
      onChange={onChange}
    />
  );
}

export default NameInput;

import React from "react";
import styled from "styled-components";
import Input from "../Input.js";

const StyledAddPriceInput = styled(Input)`
  width: 100%;
  padding: 10px;
  text-align: start;
`;

function AddPrice({ value, onChange }) {
  return (
    <StyledAddPriceInput
      type="text"
      placeholder="판매 가격을 입력해주세요"
      value={value}
      onChange={onChange}
    />
  );
}

export default AddPrice;

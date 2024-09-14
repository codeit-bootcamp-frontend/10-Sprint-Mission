import React from "react";
import styled from "styled-components";
import Button from "../Button";

const StyledButton = styled(Button)`
  background-color: ${({ isEnabled }) => (isEnabled ? "#3692FF" : "#9ca3af")};
  color: ${({ isEnabled }) => (isEnabled ? "#F3F4F6" : "#F3F4F6")};
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  cursor: ${({ isEnabled }) => (isEnabled ? "pointer" : "not-allowed")};
  transition: background-color 0.3s, transform 0.3s;

  &:hover {
    background-color: ${({ isEnabled }) => (isEnabled ? "#2a73e0" : "#9ca3af")};
    transform: ${({ isEnabled }) => (isEnabled ? "scale(1.05)" : "none")};
  }

  @media (max-width: 768px) {
    padding: 8px 16px;
    font-size: 14px;
  }

  @media (max-width: 480px) {
    padding: 6px 12px;
    font-size: 12px;
  }
`;

function TopEnter({ onSubmit, isEnabled }) {
  return (
    <StyledButton onClick={isEnabled ? onSubmit : null} isEnabled={isEnabled}>
      등록
    </StyledButton>
  );
}

export default TopEnter;

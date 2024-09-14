import styled from "styled-components";

const Button = styled.button`
  background-color: #f3f4f6;
  border: none;
  border-radius: ${({ round }) => (round ? `9999px` : `8px`)};
  color: #9ca3af;
  cursor: pointer;
  font-size: 18px;
  padding: 16px;

  &:hover,
  &:active {
    background-color: #white;
  }
`;

export default Button;

import styled from "styled-components";

const Input = styled.input`
  border: none;
  border: 2px solid ${({ error }) => (error ? `#f44336` : `#eeeeee`)};
  display: block;
  font-size: 15px;
  outline: none;
  padding: 12px 16px;
  width: 100%;
  background-color: #f3f4f6;
  border-radius: 12px;
  margin: 0 0 16px 0;
  color: #333;

  ${({ error }) =>
    !error &&
    `
    &:focus {
      border: 2px solid #7760b4;
    }
`}

  &::placeholder {
    color: #c4c5cd;
  }

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 10px 14px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
    padding: 8px 12px;
    margin: 0 0 12px 0;
  }
`;

export default Input;

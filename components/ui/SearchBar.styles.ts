import styled from "styled-components";
import { FlexRowCentered } from "@/styles/CommonStyles";

const Container = styled(FlexRowCentered)`
  background-color: var(--gray-100);
  border-radius: 12px;
  padding: 9px 16px;
  flex: 1;
`;

const SearchBarInput = styled.input`
  border: none;
  flex: 1;
  background-color: inherit;
  margin-left: 4px;

  &::placeholder {
    color: var(--gray-400);
    font-size: 16px;
  }

  &:focus {
    outline: none;
  }
`;

export { Container, SearchBarInput };

import styled from "styled-components";

const SortButtonWrapper = styled.div`
  position: relative;
`;

const SortDropdownTriggerButton = styled.button`
  border: 1px solid var(--gray-200);
  border-radius: 12px;
  padding: 9px;
  margin-left: 8px;
`;

const DropdownMenuContainer = styled.div`
  position: absolute;
  top: 110%;
  right: 0;
  background: #fff;
  border-radius: 8px;
  border: 1px solid var(--gray-200);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 99;
`;

const DropdownItem = styled.div`
  padding: 12px 44px;
  border-bottom: 1px solid var(--gray-200);
  font-size: 16px;
  color: var(--gray-800);
  cursor: pointer;

  &:last-child {
    border-bottom: none;
  }
`;

export {
  SortButtonWrapper,
  SortDropdownTriggerButton,
  DropdownMenuContainer,
  DropdownItem,
};

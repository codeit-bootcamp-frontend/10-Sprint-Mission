import React from "react";
import styled from "styled-components";

const DropdownList = styled.div`
  position: absolute;
  top: 110%;
  right: 0;
  background: #fff;
  border-radius: 8px;
  border: 1px solid #e5e7eb;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 99;
`;

const DropdownItem = styled.div`
  padding: 12px 44px;
  border-bottom: 1px solid #e5e7eb;
  font-size: 16px;
  color: #1f2937;
  cursor: pointer;
`;

function DropdownListComponent({ onSortSelection }) {
  return (
    <DropdownList>
      <DropdownItem onClick={() => onSortSelection("recent")}>
        최신순
      </DropdownItem>
      <DropdownItem onClick={() => onSortSelection("favorite")}>
        인기순
      </DropdownItem>
    </DropdownList>
  );
}
export default DropdownListComponent;

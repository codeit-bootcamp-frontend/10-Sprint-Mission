// SortMenu.js
import polygon from "../assets/Polygon.png";
import styled from "styled-components";
import { useState } from "react";

const SortMenu = styled.button`
  position: relative;
  background-color: #ffffff;
  border: 1px solid #e5e7e8;
  width: 130px;
  height: 42px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 20px;
`;

const DropDownMenu = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  border-radius: 12px;
  border: 1px solid #e5e7e8;
  margin-top: 42px;
  right: 0;
  top: 0;
  z-index: 1;
  overflow: hidden;
`;

const SortBtn = styled.button`
  background-color: #ffffff;
  border: 1px solid #e5e7e8;
  width: 130px;
  height: 42px;
`;

const SortDropdown = ({ sortOrder, setSortOrder }) => {
  const [isOpen, setOpen] = useState(false);

  const handleSortClick = (order) => {
    setSortOrder(order);
    setOpen(false);
  };

  const DropDown = () => {
    setOpen(!isOpen);
  };

  return (
    <SortMenu onClick={DropDown}>
      {sortOrder}
      <img src={polygon} alt="Sort" />
      {isOpen && (
        <DropDownMenu>
          <SortBtn
            className="Recently_btn"
            onClick={() => handleSortClick("recent")}
          >
            최신순
          </SortBtn>
          <SortBtn
            className="favorite_btn"
            onClick={() => handleSortClick("favorite")}
          >
            좋아요순
          </SortBtn>
        </DropDownMenu>
      )}
    </SortMenu>
  );
};

export default SortDropdown;

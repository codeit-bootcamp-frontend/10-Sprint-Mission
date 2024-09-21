// Pagination.js
import styled from "styled-components";
import { useState } from "react";

const PaginationContainer = styled.div`
  display: flex;
  margin: 0 auto;
  width: 304px;
  height: 40px;
  align-items: center;
`;

const PaginationButton = styled.button`
  border-radius: 50px;
  width: 40px;
  height: 40px;
  background-color: ${(props) => (props.$clicked ? "#2F80ED" : "white")};
  color: ${(props) => (props.$clicked ? "white" : "black")};
  border: 1px solid #e5e7e8;
  margin-left: 4px;
  margin-top: 40px;
  font-size: 16px;
  line-height: 26px;
  font-weight: 600;

  &:hover {
    background-color: #f0f0f0;
    border-color: #ccc;
  }
`;

const Pagination = ({ activePage, setActivePage, totalPage }) => {
  const [pageButtons, setPageButtons] = useState([1, 2, 3, 4, 5]);

  const handleNextClick = () => {
    if (activePage % 5 === 0) {
      pageButtons.forEach((num, index) => {
        pageButtons[index] = activePage + index + 1;
      });
      setActivePage(activePage + 1);
      setPageButtons(pageButtons);
    } else {
      setActivePage(activePage + 1);
    }
  };

  const handlePreviousClick = () => {
    if ((activePage - 1) % 5 === 0) {
      pageButtons.forEach((num, index) => {
        pageButtons[index] = activePage - index - 1;
      });
      pageButtons.reverse();
      setActivePage(activePage - 1);
      setPageButtons(pageButtons);
    } else {
      setActivePage(activePage - 1);
    }
  };

  const handlePageClick = (number) => {
    setActivePage(number);
  };

  return (
    <PaginationContainer>
      <PaginationButton
        onClick={handlePreviousClick}
        type="button"
        disabled={activePage === 1}
      >
        &lt;
      </PaginationButton>
      {pageButtons.map((number) => (
        <PaginationButton
          key={number}
          onClick={() => handlePageClick(number)}
          $clicked={activePage === number}
        >
          {number}
        </PaginationButton>
      ))}
      <PaginationButton
        onClick={handleNextClick}
        type="button"
        disabled={activePage >= totalPage}
      >
        &gt;
      </PaginationButton>
    </PaginationContainer>
  );
};

export default Pagination;

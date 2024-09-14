// Pagination.js
import styled from "styled-components";

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
  background-color: #ffffff;
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

const Pagination = ({
  pagebuttons,
  activePage,
  handlePageClick,
  handleNextClick,
  handlePreviousClick,
}) => {
  const getButtonStyle = (number) => ({
    backgroundColor: activePage === number ? "#2F80ED" : "white",
    color: activePage === number ? "white" : "black",
  });

  return (
    <PaginationContainer>
      <PaginationButton onClick={() => handlePreviousClick()} type="button">
        &lt;
      </PaginationButton>
      {pagebuttons.map((number) => (
        <PaginationButton
          key={number}
          onClick={() => handlePageClick(number)}
          style={getButtonStyle(number)}
        >
          {number}
        </PaginationButton>
      ))}
      <PaginationButton onClick={() => handleNextClick()} type="button">
        &gt;
      </PaginationButton>
    </PaginationContainer>
  );
};

export default Pagination;

// Pagination.js
const Pagination = ({ pagebuttons, activePage, handlePageClick }) => {
  const getButtonStyle = (number) => ({
    backgroundColor: activePage === number ? '#2F80ED' : 'white',
    color: activePage === number ? 'white' : 'black',
  });

  return (
    <div className="pagination">
      <button>&lt;</button>
      {pagebuttons.map((number) => (
        <button
          key={number}
          onClick={() => handlePageClick(number)}
          style={getButtonStyle(number)}
        >
          {number}
        </button>
      ))}
      <button>&gt;</button>
    </div>
  );
};

export default Pagination;

import './Pagination.css';
import { LIMIT, DISPLAY_PAGINATION_NUMBER } from '../../../utils/paging';
import PaginationButton from './PaginationButton';
import { useState } from 'react';

function Pagination({ total, page, setPage }) {
  const numPages = Math.ceil(total / LIMIT);
  const [startPage, setStartPage] = useState(1);

  const handlePageChange = (newPage) => {
    if (
      newPage > DISPLAY_PAGINATION_NUMBER &&
      newPage % DISPLAY_PAGINATION_NUMBER === 1
    ) {
      setStartPage(newPage);
    }

    if (startPage > newPage) {
      setStartPage(
        newPage - DISPLAY_PAGINATION_NUMBER > 0
          ? newPage - DISPLAY_PAGINATION_NUMBER + 1
          : 1
      );
    }

    if (newPage >= 1 && newPage <= numPages) {
      setPage(newPage);
    }
  };

  return (
    <div className="Pagination">
      <PaginationButton
        onClick={() => handlePageChange(page - 1)}
        disabled={page === 1}
      >
        &lt;
      </PaginationButton>

      {Array.from({ length: DISPLAY_PAGINATION_NUMBER }, (_, index) => {
        const pageNumber = startPage + index;

        if (pageNumber > numPages) {
          return null;
        }

        return (
          <PaginationButton
            key={pageNumber}
            onClick={() => handlePageChange(pageNumber)}
            isActive={pageNumber === page}
            ariaCurrent={page === pageNumber ? 'page' : undefined}
          >
            {pageNumber}
          </PaginationButton>
        );
      })}

      <PaginationButton
        onClick={() => handlePageChange(page + 1)}
        disabled={page === numPages}
      >
        &gt;
      </PaginationButton>
    </div>
  );
}

export default Pagination;

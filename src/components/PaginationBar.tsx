import { useMemo, useCallback } from "react";
import prevPageIcon from "@/assets/arrow_left_active.svg";
import inPrevPageIcon from "@/assets/arrow_left_inactive.svg";
import nextPageIcon from "@/assets/arrow_right_active.svg";
import inNextPageIcon from "@/assets/arrow_right_inactive.svg";
import "./PaginationBar.css";

const calcPageArray = (totalPage, currentPage) => {
  if (totalPage <= 5)
    return Array(totalPage)
      .fill(1)
      .map((start, idx) => start + idx);

  let startPage = Math.max(1, currentPage - 2);
  const pageCount = totalPage - startPage + 1;
  if (pageCount < 5) startPage -= 5 - pageCount;

  return Array(5)
    .fill(startPage)
    .map((start, idx) => start + idx);
};

export default function PaginationBar({ totalPage, currentPage, onChange }) {
  const pageArray = useMemo(
    () => calcPageArray(totalPage, currentPage),
    [totalPage, currentPage]
  );

  const checkPage = (page) => {
    if (page === currentPage) return "paginationBar__button--current";
  };

  const handlePrevClick = useCallback(() => {
    onChange(Math.max(currentPage - 5, 1));
  }, [onChange, currentPage]);

  const handleNextClick = useCallback(() => {
    onChange(Math.min(currentPage + 5, totalPage));
  }, [onChange, currentPage, totalPage]);

  const handleNumberClick = useCallback(
    (e) => {
      onChange(Number(e.target.textContent));
    },
    [onChange]
  );

  return (
    <nav className="paginationBar">
      <ul className="paginationBar__wrapper">
        <li>
          <button
            className="paginationBar__button"
            type="button"
            onClick={handlePrevClick}
            disabled={currentPage === 1}
          >
            <img
              src={currentPage !== 1 ? prevPageIcon : inPrevPageIcon}
              alt="이전 페이지"
            />
          </button>
        </li>
        {pageArray.map((page) => (
          <li key={page}>
            <button
              className={`paginationBar__button ${checkPage(page)}`}
              type="button"
              onClick={handleNumberClick}
              aria-label={`${page}번 페이지`}
            >
              {page}
            </button>
          </li>
        ))}
        <li>
          <button
            className="paginationBar__button"
            type="button"
            onClick={handleNextClick}
            disabled={currentPage === totalPage}
          >
            <img
              src={currentPage !== totalPage ? nextPageIcon : inNextPageIcon}
              alt="다음 페이지"
            />
          </button>
        </li>
      </ul>
    </nav>
  );
}

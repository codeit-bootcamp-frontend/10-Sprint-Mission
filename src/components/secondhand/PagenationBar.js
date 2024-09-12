import { useMemo, useCallback } from "react";
import prevPageIcon from "../../assets/arrow_left_active.svg";
import inPrevPageIcon from "../../assets/arrow_left_inactive.svg";
import nextPageIcon from "../../assets/arrow_right_active.svg";
import inNextPageIcon from "../../assets/arrow_right_inactive.svg";
import "./PagenationBar.css";

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

export default function PagenationBar({ totalPage, useParamObj }) {
  const [paramObj, setParamObj] = useParamObj;

  const pageArray = useMemo(
    () => calcPageArray(totalPage, paramObj.page),
    [totalPage, paramObj]
  );

  const checkPage = (page) => {
    if (page === paramObj.page) return "pagenationBar__button--current";
  };

  const handlePrevClick = useCallback(() => {
    setParamObj((prevObj) => ({ ...prevObj, page: paramObj.page - 1 }));
  }, [paramObj, setParamObj]);

  const handleNextClick = useCallback(() => {
    setParamObj((prevObj) => ({ ...prevObj, page: paramObj.page + 1 }));
  }, [paramObj, setParamObj]);

  const handleNumberClick = useCallback(
    (e) => {
      setParamObj((prevObj) => ({
        ...prevObj,
        page: Number(e.target.textContent),
      }));
    },
    [setParamObj]
  );

  return (
    <nav className="pagenationBar">
      <ul className="pagenationBar__wrapper">
        <li>
          <button
            className="pagenationBar__button"
            onClick={handlePrevClick}
            disabled={paramObj.page === 1}
          >
            <img
              src={paramObj.page !== 1 ? prevPageIcon : inPrevPageIcon}
              alt="이전 페이지"
            />
          </button>
        </li>
        {pageArray.map((page) => (
          <li key={page}>
            <button
              className={`pagenationBar__button ${checkPage(page)}`}
              onClick={handleNumberClick}
              aria-label={`${page}번 페이지`}
            >
              {page}
            </button>
          </li>
        ))}
        <li>
          <button
            className="pagenationBar__button"
            onClick={handleNextClick}
            disabled={paramObj.page === totalPage}
          >
            <img
              src={paramObj.page !== totalPage ? nextPageIcon : inNextPageIcon}
              alt="다음 페이지"
            />
          </button>
        </li>
      </ul>
    </nav>
  );
}

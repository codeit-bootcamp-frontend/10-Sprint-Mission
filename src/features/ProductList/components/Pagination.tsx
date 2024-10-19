import styles from "./Pagination.module.css";
import arrowLeftImg from "assets/images/arrow_left_gray.svg";
import arrowRightImg from "assets/images/arrow_right.svg";

interface Props {
  totalCount: number;
  pageSize: number;
  currentPage: number;
  onChange: (page: number) => void;
}

const Pagination = ({ totalCount, pageSize, currentPage, onChange }: Props) => {
  const totalPages = Math.ceil(totalCount / pageSize);
  const PAGE_RANGE = 5;

  const generatePageNumbers = () => {
    let start = Math.max(1, currentPage - Math.floor(PAGE_RANGE / 2));
    const end = Math.min(totalPages, start + PAGE_RANGE - 1);

    if (end - start + 1 < PAGE_RANGE) {
      start = Math.max(end - PAGE_RANGE + 1, 1);
    }

    return Array.from({ length: end - start + 1 }, (_, index) => start + index);
  };

  const handleClick = (selectedPage: number) => {
    onChange(selectedPage);
  };

  const handleLeftButton = () => {
    onChange(currentPage - 1);
  };
  const handleRightButton = () => {
    onChange(currentPage + 1);
  };

  return (
    <div className={styles.pagination}>
      <button
        type="button"
        onClick={handleLeftButton}
        disabled={currentPage === 1}
      >
        <img src={arrowLeftImg} alt="왼쪽 버튼" />
      </button>
      {generatePageNumbers().map((number) => {
        return (
          <button
            className={number === currentPage ? styles.active : ""}
            onClick={() => handleClick(number)}
            key={number}
          >
            {number}
          </button>
        );
      })}
      <button
        type="button"
        onClick={handleRightButton}
        disabled={currentPage === totalPages}
      >
        <img src={arrowRightImg} alt="오른쪽 버튼" />
      </button>
    </div>
  );
};

export default Pagination;

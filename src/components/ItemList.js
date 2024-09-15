import { useEffect, useState } from "react";
import { getItems } from "../api";
import Card from "./Card";
import style from "./ItemList.module.css";
import SearchBar from "./SearchBar";

function ItemList() {
  const pagesToShow = 5;
  const [cardList, setCardList] = useState([]);
  const [order, setOrder] = useState("recent");
  const [totalCount, setTotalCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1); // 현재 페이지 상태
  const [displayedPages, setDisplayedPages] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const fetchData = async function (page) {
    const data = await getItems(page, 10, order);
    // data = totalCount 외 아이템 리스트들을 가지고있는 정보
    setTotalCount(data.totalCount);
    setCardList(data.list);
    setTotalPages(Math.ceil(totalCount / 10));
  };

  const updateDisplayedPages = () => {
    const start = Math.floor((currentPage - 1) / pagesToShow) * pagesToShow + 1;
    const end = Math.min(start + pagesToShow - 1, totalPages);
    console.log("start ", start);
    console.log("end ", end);
    console.log(Array.from({ length: end - start + 1 }, (_, i) => start + i));
    setDisplayedPages(
      Array.from({ length: end - start + 1 }, (_, i) => start + i)
    );
    console.log("displayedPages: ", displayedPages);
  };

  const handlePageChange = (page) => {
    if (page < 1 || page > totalPages) return; // 범위를 넘어가는 경우 무시
    setCurrentPage(page);
    fetchData(page);
    // 여기서 getItems를 호출하여 아이템을 가져올 수 있습니다.
    // const data = await getItems(page, itemsPerPage);
  };

  const handleNextPages = () => {
    const nextPage = Math.min(currentPage + pagesToShow, totalPages);
    setCurrentPage(nextPage);
  };

  const handlePreviousPages = () => {
    const prevPage = Math.max(currentPage - pagesToShow, 1);
    setCurrentPage(prevPage);
  };

  useEffect(() => {
    fetchData();
    updateDisplayedPages();
    console.log(currentPage);
  }, [order, totalCount, currentPage, totalPages]);

  // function handlePageChange(e) {
  //   // console.log(e);
  //   fetchData(e.target.value);
  // }

  return (
    <>
      <SearchBar handleOrder={setOrder}></SearchBar>
      <div className={style.wrapper}>
        <div className={style.itemListBlock}>
          <div className={style.label}>전체 상품</div>
          <div className={style.itemList}>
            {cardList.map((item) => {
              return (
                <Card
                  key={item.id}
                  item={item}
                  imgSize={"221px"}
                  cardWidth={"20%"}
                ></Card>
              );
            })}
          </div>
        </div>
      </div>
      <div>
        <button
          className={style.arrowButton}
          onClick={handlePreviousPages}
          disabled={currentPage <= pagesToShow}
        >
          &lt;&lt;
        </button>
        {displayedPages.map((page) => (
          <button
            key={page}
            className={`${style.pageButton} ${
              currentPage === page ? style.active : ""
            }`}
            onClick={() => handlePageChange(page)}
          >
            {page}
          </button>
        ))}
        <button
          className={style.arrowButton}
          onClick={handleNextPages}
          disabled={currentPage + pagesToShow > totalPages}
        >
          &gt;&gt;
        </button>
      </div>
    </>
  );
}

export default ItemList;

/**
 *
 * 1. 함수를 만드는데, 토탈카운트 나누기 10 하는 함수를 만듬
 *
 * 2. 1번의 함수 리턴값에 따라서, 페이지 개수를 분리하는 기능을 만듬 ( 예를들면, 1~5 / 6~10 / 11~15 ...)
 *
 * 3. 1번의 함수 리턴값이 5 이상일때, 밑
 *
 */

// function pageMake(totalCount) {
//   // 146
//   const pageNumber = Math.ceil(totalCount / 10); // 15
//   const pageGroup = Array(pageNumber / 5) //[1,2,3]
//     .fill()
//     .map((el, i) => i + 1);
//   // 0; // 0 -> 1 -> 2

//   const pageNumberList = Array(pageNumber) // [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
//     .fill()
//     .map((el, i) => i + 1);

//   const startPage = 0 + pageGroup * 5;
//   const endPage = a.length + pageGroup * 5;

//   pageGroup.map((el, i) => {
//     pageNumberList.slice(startPage, endPage); // 0,5
//   });
// }

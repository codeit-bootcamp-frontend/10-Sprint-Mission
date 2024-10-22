import { useEffect, useState } from "react";
import { getItems } from "../../api";
import Card from "./Card";
import style from "./ItemList.module.css";
import SearchBar from "./SearchBar";

function ItemList() {
	const pagesToShow = 5;
	const [cardList, setCardList] = useState([]);
	const [order, setOrder] = useState("recent");
	const [totalCount, setTotalCount] = useState(0);
	const [currentPage, setCurrentPage] = useState(1);
	const [displayedPages, setDisplayedPages] = useState([]);
	const [totalPages, setTotalPages] = useState(0);
	const fetchData = async function (page) {
		const data = await getItems(page, 10, order);
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
		if (page < 1 || page > totalPages) return;
		setCurrentPage(page);
		fetchData(page);
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
			<div className={style.buttonBox}>
				<button
					className={`${style.button} ${style.arrowButton}`}
					onClick={handlePreviousPages}
					disabled={currentPage <= pagesToShow}
				>
					&lt;&lt;
				</button>
				{displayedPages.map((page) => (
					<button
						key={page}
						className={`${style.button} ${style.pageButton} ${
							currentPage === page ? style.active : ""
						}`}
						onClick={() => handlePageChange(page)}
					>
						{page}
					</button>
				))}
				<button
					className={`${style.button} ${style.arrowButton}`}
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

import { useEffect, useState } from "react";
import { getItems } from "../../api";
import Card from "./Card";
import style from "./BestList.module.css";

function BestList() {
	const [cardList, setCardList] = useState([]);

	const fetchData = async function () {
		const data = await getItems(1, 4, "favorite");
		setCardList(data.list);
	};

	useEffect(() => {
		fetchData();
	}, []);

	return (
		<div className={style.wrapper}>
			<div className={style.bestListBlock}>
				<div className={style.label}>베스트 상품</div>
				<div className={style.bestList}>
					{cardList.map((item) => {
						return <Card key={item.id} item={item} imgSize={"282px"}></Card>;
					})}
				</div>
			</div>
		</div>
	);
}

export default BestList;

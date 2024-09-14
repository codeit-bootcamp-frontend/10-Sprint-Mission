import { useEffect, useState } from "react";
import { getItems } from "../api";
import Card from "./Card";
import style from "./ItemList.module.css";
import SearchBar from "./SearchBar";

function ItemList() {
  const [cardList, setCardList] = useState([]);
  const [order, setOrder] = useState("recent");
  const fetchData = async function () {
    const data = await getItems(1, 10, order);
    console.log(data);
    setCardList(data.list);
  };

  useEffect(() => {
    fetchData();
  }, [...order]);

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
    </>
  );
}

export default ItemList;

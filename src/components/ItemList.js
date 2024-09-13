import { useEffect, useState } from "react";
import { getItems } from "../api";
import Card from "./Card";
import style from "./ItemList.module.css";

function ItemList() {
  const [cardList, setCardList] = useState([]);

  const fetchData = async function () {
    const data = await getItems(1, 10);
    setCardList(data.list);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
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
  );
}

export default ItemList;

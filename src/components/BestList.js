import { useEffect, useState } from "react";
import { getItems } from "../api";
import Card from "./Card";

function BestList() {
  const [cardList, setCardList] = useState([]);

  const fetchData = async function () {
    const data = await getItems();
    setCardList(data.list);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div>라벨</div>
      {cardList.map((item) => {
        return <Card key={item.id} item={item}></Card>;
      })}
    </>
  );
}

export default BestList;

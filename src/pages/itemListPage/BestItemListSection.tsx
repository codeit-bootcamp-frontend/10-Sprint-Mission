import { useState, useEffect } from "react";

import Item from "./components/Item";

import { useMediaQuery } from "@/hooks/useMediaQuery";
import { useApi } from "@/hooks/useApi";
import { getProducts } from "@/apis/apis";
import "./BestItemListSection.css";

const pageSizeTable = { PC: 4, TABLET: 2, MOBILE: 1 };

export default function BestItemListSection() {
  const media = useMediaQuery();
  const [paramObj, setParamObj] = useState({
    pageSize: pageSizeTable[media],
    orderBy: "favorite",
  });
  const [isLoading, error, data] = useApi(getProducts, paramObj);

  useEffect(() => {
    setParamObj((prevObj) => ({ ...prevObj, pageSize: pageSizeTable[media] }));
  }, [media]);

  return (
    <section className="bestItemList">
      <div className="bestItemList__head">
        <h2 className="bestItemList__title">베스트 상품</h2>
      </div>
      {!isLoading && !error && (
        <div className="bestItemList__body">
          {data.list.map((item) => (
            <Item key={item.id} data={item} />
          ))}
        </div>
      )}
    </section>
  );
}

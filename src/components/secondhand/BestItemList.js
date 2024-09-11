import { useState, useEffect } from "react";

import Item from "./Item";

import { useMediaQuery } from "../../hooks/useMediaQuery.js";
import { useApi } from "../../hooks/useApi.js";
import { getProducts } from "../../apis/apis.js";
import "./BestItemList.css";

const pageSizeTable = { PC: 4, TABLET: 2, MOBILE: 1 };

export default function BestItemList() {
  const media = useMediaQuery();
  const [paramObj, setParamObj] = useState({
    pageSize: pageSizeTable[media],
    orderBy: "favorite",
  });
  const [isLoading, error, data] = useApi(getProducts, paramObj);

  useEffect(() => {
    setParamObj({ pageSize: pageSizeTable[media], orderBy: "favorite" });
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

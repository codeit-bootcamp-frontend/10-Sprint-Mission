import { useState, useEffect } from "react";

import ItemListHead from "./ItemListHead.js";
import Item from "./Item";
import PagenationBar from "./PagenationBar";

import { useMediaQuery } from "../../hooks/useMediaQuery.js";
import { useApi } from "../../hooks/useApi.js";
import { getProducts } from "../../apis/apis.js";
import "./AllItemList.css";

const pageSizeTable = { PC: 10, TABLET: 6, MOBILE: 4 };

export default function AllItemList() {
  const media = useMediaQuery();
  const [paramObj, setParamObj] = useState({
    page: 1,
    pageSize: pageSizeTable[media],
    orderBy: "recent",
    keyword: undefined,
  });
  const [isLoading, error, data] = useApi(getProducts, paramObj);

  useEffect(() => {
    setParamObj((prevObj) => ({ ...prevObj, pageSize: pageSizeTable[media] }));
  }, [media]);

  return (
    <section className="allItemList">
      <ItemListHead setParamObj={setParamObj} />
      {!isLoading && !error && (
        <>
          <div className="allItemList__body">
            {data.list.map((item) => (
              <Item key={item.id} data={item} />
            ))}
          </div>
          <PagenationBar
            totalPage={Math.ceil(data.totalCount / pageSizeTable[media])}
            useParamObj={[paramObj, setParamObj]}
          />
        </>
      )}
    </section>
  );
}

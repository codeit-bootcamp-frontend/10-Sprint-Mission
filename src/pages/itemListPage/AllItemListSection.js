import { useState, useEffect } from "react";

import ItemListHead from "./components/ItemListHead.js";
import Item from "./components/Item.js";
import PaginationBar from "../../components/PaginationBar.js";

import { useMediaQuery } from "../../hooks/useMediaQuery.js";
import { useApi } from "../../hooks/useApi.js";
import { getProducts } from "../../apis/apis.js";
import "./AllItemListSection.css";

const pageSizeTable = { PC: 10, TABLET: 6, MOBILE: 4 };

export default function AllItemListSection() {
  const media = useMediaQuery();
  const [paramObj, setParamObj] = useState({
    page: 1,
    pageSize: pageSizeTable[media],
    orderBy: "recent",
    keyword: undefined,
  });
  const [isLoading, error, data] = useApi(getProducts, paramObj);

  const handlePageChange = (page) => {
    setParamObj((prevObj) => ({ ...prevObj, page }));
  };

  useEffect(() => {
    setParamObj((prevObj) => ({
      ...prevObj,
      page: 1,
      pageSize: pageSizeTable[media],
    }));
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
          <PaginationBar
            totalPage={Math.ceil(data.totalCount / pageSizeTable[media])}
            currentPage={paramObj.page}
            onChange={handlePageChange}
          />
        </>
      )}
    </section>
  );
}

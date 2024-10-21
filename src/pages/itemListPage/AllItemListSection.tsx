import { useState, useEffect } from "react";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { getProducts } from "@/apis/apis";
import { useApi } from "@/hooks/useApi";
import ItemListHead from "./components/ItemListHead";
import Item from "./components/Item";
import PaginationBar from "@/components/PaginationBar";
import "./AllItemListSection.css";
import { GetProductsParams, GetProductsRes } from "@/apis/apis.type";

const pageSizeTable = { PC: 10, TABLET: 6, MOBILE: 4 };

export default function AllItemListSection() {
  const media = useMediaQuery();
  const [paramObj, setParamObj] = useState<GetProductsParams>({
    page: 1,
    pageSize: pageSizeTable[media],
    orderBy: "recent",
    keyword: undefined,
  });
  const { isLoading, error, data } = useApi<GetProductsParams, GetProductsRes>(
    getProducts,
    paramObj
  );

  const handlePageChange = (page: number) => {
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
      {!isLoading && !error && data && (
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

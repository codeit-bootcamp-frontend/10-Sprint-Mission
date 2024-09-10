import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Item from "./Item";
import PagenationBar from "./PagenationBar";

import { useMediaQuery } from "../../hooks/useMediaQuery.js";
import { useApi } from "../../hooks/useApi.js";
import { getProducts } from "../../apis/apis.js";

const pageSizeTable = { PC: 10, TABLET: 6, MOBILE: 4 };

export default function AllItemList() {
  const media = useMediaQuery();
  const [paramObj, setParamObj] = useState({
    page: 1,
    pageSize: pageSizeTable[media],
    orderBy: "recent",
    search: undefined,
  });
  const [isLoading, error, data] = useApi(getProducts, paramObj);

  useEffect(() => {
    setParamObj((prevObj) => ({ ...prevObj, pageSize: pageSizeTable[media] }));
  }, [media]);

  return (
    <section>
      <div>
        <h2>전체 상품</h2>
        <input placeholder="검색할 상품을 입력해 주세요"></input>
        <Link to="/additem">상품 등록하기</Link>
        <select>
          <option>최신순</option>
          <option>좋아요순</option>
        </select>
      </div>
      {!isLoading && !error && (
        <>
          <div>
            {data.list.map((item) => (
              <Item key={item.id} data={item} />
            ))}
          </div>
          <PagenationBar />
        </>
      )}
    </section>
  );
}

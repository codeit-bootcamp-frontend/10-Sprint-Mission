import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";

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

  const handleInputEnter = useCallback((e) => {
    if (e.key === "Enter")
      setParamObj((prevObj) => ({
        ...prevObj,
        page: 1,
        keyword: e.target.value,
      }));
  }, []);

  const handleSelectChange = useCallback((e) => {
    setParamObj((prevObj) => ({
      ...prevObj,
      page: 1,
      orderBy: e.target.value,
    }));
  }, []);

  useEffect(() => {
    setParamObj((prevObj) => ({ ...prevObj, pageSize: pageSizeTable[media] }));
  }, [media]);

  return (
    <section className="allItemList">
      <div className="allItemList__head">
        <h2 className="allItemList__title">전체 상품</h2>
        <input
          onKeyUp={handleInputEnter}
          placeholder="검색할 상품을 입력해 주세요"
        ></input>
        <Link to="/additem">상품 등록하기</Link>
        <select onChange={handleSelectChange}>
          <option value="recent">최신순</option>
          <option value="favorite">좋아요순</option>
        </select>
      </div>
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

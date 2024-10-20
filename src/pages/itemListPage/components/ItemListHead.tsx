import { Dispatch, SetStateAction, KeyboardEvent, useCallback } from "react";
import { Link } from "react-router-dom";
import { GetProductsParams, OrderBy } from "@/apis/apis.type";
import Dropdown from "@/components/Dropdown";
import "./ItemListHead.css";

interface Props {
  setParamObj: Dispatch<SetStateAction<GetProductsParams>>;
}

export default function ItemListHead({ setParamObj }: Props) {
  const handleInputEnter = useCallback(
    (e: KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Enter")
        setParamObj((prevObj) => ({
          ...prevObj,
          page: 1,
          keyword: (e.target as HTMLInputElement).value,
        }));
    },
    [setParamObj]
  );
  const handleDropdownSelect = useCallback(
    (value: OrderBy) => {
      setParamObj((prevObj) => ({ ...prevObj, page: 1, orderBy: value }));
    },
    [setParamObj]
  );

  return (
    <div className="itemListHead">
      <h2 className="itemListHead__title">전체 상품</h2>
      <input
        className="itemListHead__searchInput"
        onKeyUp={handleInputEnter}
        placeholder="검색할 상품을 입력해 주세요"
      ></input>
      <Link className="itemListHead__addButton" to="/additem">
        상품 등록하기
      </Link>
      <Dropdown onSelect={handleDropdownSelect}>
        <option value="recent">최신순</option>
        <option value="favorite">좋아요순</option>
      </Dropdown>
    </div>
  );
}

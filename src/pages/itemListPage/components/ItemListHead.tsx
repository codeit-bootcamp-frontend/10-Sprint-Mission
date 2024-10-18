import { useCallback } from "react";
import { Link } from "react-router-dom";
import Dropdown from "../../../components/Dropdown";
import "./ItemListHead.css";

export default function ItemListHead({ setParamObj }) {
  const handleInputEnter = useCallback(
    (e) => {
      if (e.key === "Enter")
        setParamObj((prevObj) => ({
          ...prevObj,
          page: 1,
          keyword: e.target.value,
        }));
    },
    [setParamObj]
  );
  const handleDropdownSelect = useCallback(
    (value) => {
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

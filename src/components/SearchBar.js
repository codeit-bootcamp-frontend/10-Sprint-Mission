import { useEffect, useState } from "react";
import style from "./SearchBar.module.css";


function SearchBar({ handleOrder }) {
  const handleChange = (e) => {
    handleOrder(e.target.value);
  };
  return (
    <div className={style.utilBox}>
      <input
        className={style.searchBar}
        placeholder="검색할 상품을 입력해주세요"
      ></input>
      <button className={style.btnStyle}>상품 등록하기</button>
      <form className={style.dropBox}>
        <select onChange={handleChange}>
          <option value="recent">최신순</option>
          <option value="favorite">좋아요순</option>
        </select>
      </form>
    </div>
  );
}

export default SearchBar;

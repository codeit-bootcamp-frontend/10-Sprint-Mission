import React, { useState } from "react";
import styles from "./SearchForm.module.css";
import Image from "next/image";
import searchIcon from "./assets/images/icons/ic_search.svg";

interface SearchFormProps {
  onSearch: (term: string) => void;
}

const SearchForm: React.FC<SearchFormProps> = ({ onSearch }) => {
  const [search, setSearch] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <div>
      <Image src={searchIcon} alt={searchIcon} />
      <input
        className={styles.searchForm}
        type="text"
        value={search}
        onChange={handleChange}
        placeholder="검색할 상품을 입력해주세요"
      />
    </div>
  );
};

export default SearchForm;

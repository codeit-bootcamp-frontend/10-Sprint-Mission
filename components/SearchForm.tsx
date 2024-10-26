import React, { useState } from "react";

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
    <input
      type="text"
      value={search}
      onChange={handleChange}
      placeholder="검색할 상품을 입력해주세요"
    />
  );
};

export default SearchForm;

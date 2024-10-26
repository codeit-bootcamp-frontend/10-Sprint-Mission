import React, { useState } from "react";

const SearchForm = () => {
  const [search, setSearch] = React.useState<string>("");

  return (
    <input
      type="text"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      placeholder="검색할 상품을 입력해주세요"
    />
  );
};

export default SearchForm;

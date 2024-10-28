import SearchIcon from "@/public/images/icons/ic_search.svg";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import  { Container, SearchBarInput } from "./SearchBar.styles";

type SearchBarProps = {
  onSearch: (keyword: string) => void;
  placeholder?: string;
}

const SearchBar = ({
  onSearch,
  placeholder = "검색할 키워드를 입력해 주세요",
}: SearchBarProps) => {
  const router = useRouter();
  const [keyword, setKeyword] = useState("");

  useEffect(() => {
    const currentKeyword = (router.query.q as string) || "";
    setKeyword(currentKeyword);
  }, [router.query.q]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onSearch(keyword);
    }
  };

  return (
    <Container>
      <SearchIcon alt="검색" />
      <SearchBarInput
        value={keyword}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        placeholder={placeholder}
      />
    </Container>
  );
};

export default SearchBar;

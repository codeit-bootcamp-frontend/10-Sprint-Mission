import Image from "next/image";
import Container from "../layout/Container";
import styles from "./SearchBar.module.css";
import searchIcon from "@/public/ic_search.svg";

const SearchBar = () => {
  return (
    <Container className={styles.container}>
      <Image src={searchIcon} alt="검색" className={styles.image} />
      <input
        className={styles.input}
        type="text"
        placeholder="검색할 상품을 입력해주세요"
      />
    </Container>
  );
};

export default SearchBar;

import { ChangeEvent, FormEvent, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import styles from "./SearchBar.module.css";
import searchIcon from "@/public/ic_search.svg";

const SearchBar = ({ initialValue = "" }: { initialValue: string }) => {
  const [value, setValue] = useState(initialValue);
  const router = useRouter();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!value) {
      router.push("/boards");
      return;
    }
    router.push(`/boards?keyword=${value}`);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <Image src={searchIcon} alt="검색" className={styles.image} />
      <input
        className={styles.input}
        type="text"
        placeholder="검색할 상품을 입력해주세요"
        onChange={handleChange}
      />
    </form>
  );
};

export default SearchBar;

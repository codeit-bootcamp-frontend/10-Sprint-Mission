import { useRouter } from 'next/router';
import { useState } from 'react';
import SearchIcon from '@/image/ic_search.svg';
import styles from '@/styles/Search.module.css';

export default function SearchForm({ initialValue = '', hideIcon = false }) {
  const router = useRouter();
  const [value, setValue] = useState(initialValue);

  function handleChange(e) {
    setValue(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!value) {
      router.push('/');
      return;
    }
    router.push(`/search?q=${value}`);
  }

  return (
    <form onSubmit={handleSubmit} className={styles.searchForm}>
      {!value && <SearchIcon className={styles.searchIcon} />}
      <input
        className={styles.searchInput}
        name="q"
        value={value}
        onChange={handleChange}
        placeholder="검색할 내용을 입력해주세요"
      />
    </form>
  );
}

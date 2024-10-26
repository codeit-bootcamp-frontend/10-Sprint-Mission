import SearchForm from '@/pages/search';
import BestArticle from '@/pages/boards/BestBoard';
import Dropdown from '@/components/DropDown';
import BehindArticle from '@/pages/boards/BehindBoard';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <BestArticle />
      <BehindArticle />
    </>
  );
}

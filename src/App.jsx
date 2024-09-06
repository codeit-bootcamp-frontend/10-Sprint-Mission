import './App.css';
import {Link} from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';

import Header from './component/Header';
import BestProducts from './component/BestProducts';
import ProductList from './component/ProductList';
import Pagination from './component/Pagination';
import SortMenu from './component/SortMenu';

function App() {
  const [bestProducts, setBestProducts] = useState([]); 
  const [isOpen, setOpen] = useState(false);
  const [sortbtntext, setSortbtntext] = useState('최신순');
  const [sortedProducts, setSortedProducts] = useState([]);
  const pagebuttons = [1, 2, 3, 4, 5];
  const [activePage, setActivePage] = useState(1);
  const [sortOrder, setSortOrder] = useState('recent'); 

 
  useEffect(() => {
    const fetchBestProducts = async () => {
      try {
        const response = await axios.get(`https://panda-market-api.vercel.app/products?page=1&orderBy=favorite`);
        const bestProducts = response.data.list.slice(0, 4); 
        setBestProducts(bestProducts);
      } catch (error) {
        console.log('Error fetching best products:', error);
      }
    };
    fetchBestProducts();
  }, []); 

 
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://panda-market-api.vercel.app/products?page=${activePage}`);
        const sortedProducts = response.data.list.sort((a, b) => {
          return sortOrder === 'favorite'
            ? b.favoriteCount - a.favoriteCount
            : new Date(b.updatedAt) - new Date(a.updatedAt);
        });
        setSortedProducts(sortedProducts);
      } catch (error) {
        console.log('error:', error);
      }
    };
    fetchData();
  }, [activePage, sortOrder]); 

  const handlePageClick = (number) => {
    setActivePage(number);
  };

  const handleSortClick = (order) => {
    setSortOrder(order);
    setSortbtntext(order === 'recent' ? '최신순' : '좋아요순');
    setOpen(false);
  };


  const DropDown = () => {
    setOpen(!isOpen);
  };

  return (
    <>
      <Header />
      <main>
        <h1>베스트 상품</h1>
        <BestProducts bestProducts={bestProducts} />

        <section>
          <div className="entireHeader">
            <h1>전체상품</h1>
            <div>
              <input
                type="text"
                className="searchInput"
                placeholder="검색할 상품을 입력해주세요"
              />
              <Link className="RegistButton" to={"/additem"}>상품 등록하기</Link>
              <SortMenu
                sortbtntext={sortbtntext}
                DropDown={DropDown}
                isOpen={isOpen}
                handleSortClick={handleSortClick}
              />
            </div>
          </div>

          <ProductList sortedProducts={sortedProducts} />
        </section>

        <Pagination
          pagebuttons={pagebuttons}
          activePage={activePage}
          handlePageClick={handlePageClick}
        />
      </main>
    </>
  );
}

export default App;

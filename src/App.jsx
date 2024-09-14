import "./App.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

import Header from "./page/Header";
import BestProducts from "./page/BestProducts";
import ProductList from "./page/ProductList";
import Pagination from "./page/Pagination";
import SortDropdown from "./page/SortDropdown";
import styled from "styled-components";

const BackEndUrl = "https://panda-market-api.vercel.app/products";

const EntireDiv = styled.div`
  display: flex;
`;

const EntireHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 40px;
`;

const SearchInput = styled.input`
  width: 325px;
  height: 42px;
  border-radius: 12px;
  background-color: #f3f4f6;
  background-image: url("/src/assets/Vector.png");
  border: 1px solid #ffffff;
  background-repeat: no-repeat;
  background-position: 10px center;
  margin-right: 12px;
  padding-left: 30px;
`;

const RegistButton = styled(Link)`
  width: 133px;
  height: 42px;
  border-radius: 8px;
  background-color: #3692ff;
  border: 1px solid #ffffff;
  color: #ffffff;

  font-weight: 600;
  font-size: 16px;
  line-height: 26px;
  margin-right: 12px;
  padding: 8px 22px;
  text-decoration: none;
`;

const Main = styled.main`
  margin-left: 360px;
  margin-right: 360px;
  margin-top: 94px;
  margin-bottom: 141px;
`;

const MainH1 = styled.h1`
  font-size: 20px;
  line-height: 32px;
  margin-bottom: 12px;
`;

function App() {
  const [bestProducts, setBestProducts] = useState([]);
  const [isOpen, setOpen] = useState(false);
  const [sortedProducts, setSortedProducts] = useState([]);

  const [totalpage, setTotalpage] = useState(0);
  const [activePage, setActivePage] = useState(1);
  const [sortOrder, setSortOrder] = useState("recent");
  const [pagebuttons, setPagebutton] = useState([1, 2, 3, 4, 5]);

  useEffect(() => {
    const fetchBestProducts = async () => {
      try {
        const response = await axios.get(
          `${BackEndUrl}?page=1&orderBy=favorite&pageSize=4`
        );

        const bestProducts = response.data.list;
        const totalpage = Math.ceil(response.data.totalCount / 10);
        setTotalpage(totalpage);
        setBestProducts(bestProducts);
      } catch (error) {
        console.error("Error fetching best products:", error);
      }
    };
    fetchBestProducts();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${BackEndUrl}?page=${activePage}&orderBy=${sortOrder}`
        );
        const sortedProducts = response.data.list;
        setSortedProducts(sortedProducts);
      } catch (error) {
        console.error("error:", error);
      }
    };
    fetchData();
  }, [activePage, sortOrder]);

  const handlePageClick = (number) => {
    setActivePage(number);
  };

  const handleNextClick = () => {
    if (activePage >= totalpage) {
      return;
    }
    if (activePage % 5 === 0) {
      pagebuttons.forEach((num, index) => {
        pagebuttons[index] = activePage + index + 1;
      });
      setActivePage(activePage + 1);
      setPagebutton(pagebuttons);
    } else {
      setActivePage(activePage + 1);
    }
  };

  const handlePreviousClick = () => {
    if (activePage === 1) {
      return;
    }
    if ((activePage - 1) % 5 === 0) {
      pagebuttons.forEach((num, index) => {
        pagebuttons[index] = activePage - index - 1;
      });
      pagebuttons.reverse();
      setActivePage(activePage - 1);
      setPagebutton(pagebuttons);
    } else {
      setActivePage(activePage - 1);
    }
  };

  const handleSortClick = (order) => {
    setSortOrder(order);
    setOpen(false);
  };

  const DropDown = () => {
    setOpen(!isOpen);
  };

  return (
    <>
      <Header />
      <Main>
        <MainH1>베스트 상품</MainH1>
        <BestProducts bestProducts={bestProducts} />

        <section>
          <EntireHeader>
            <MainH1>전체상품</MainH1>
            <EntireDiv>
              <SearchInput
                type="text"
                placeholder="검색할 상품을 입력해주세요"
              />
              <RegistButton to={"/additem"}>상품 등록하기</RegistButton>
              <SortDropdown
                sortOrder={sortOrder === "recent" ? "최신순" : "좋아요순"}
                DropDown={DropDown}
                isOpen={isOpen}
                handleSortClick={handleSortClick}
              />
            </EntireDiv>
          </EntireHeader>

          <ProductList sortedProducts={sortedProducts} />
        </section>

        <Pagination
          pagebuttons={pagebuttons}
          activePage={activePage}
          handlePageClick={handlePageClick}
          handleNextClick={handleNextClick}
          handlePreviousClick={handlePreviousClick}
        />
      </Main>
    </>
  );
}

export default App;

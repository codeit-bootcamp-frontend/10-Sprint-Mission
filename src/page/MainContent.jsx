import BestProducts from "../component/MainContent/BestProducts";
import ProductList from "../component/MainContent/ProductList";
import Pagination from "../component/MainContent/Pagination";
import SortDropdown from "../component/MainContent/SortDropdown";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { fetchProducts } from "../api";
import { useEffect, useState } from "react";
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

  &:focus {
    border: 1px solid #3692ff;
    outline: none;
  }

  @media (max-width: 768px) {
    width: 242px;
    height: 42px;
  }
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

const MainTitle = styled.main`
  margin-left: 360px;
  margin-right: 360px;
  margin-top: 94px;
  margin-bottom: 141px;

  @media (max-width: 768px) {
    margin-left: 24px;
    margin-right: 24px;
  }
`;

const MainH1 = styled.h1`
  font-size: 20px;
  line-height: 32px;
  margin-bottom: 12px;
`;

const MainContent = ({
  sortedProducts,
  sortOrder,
  setSortOrder,
  activePage,
  setActivePage,
  totalPage,
}) => {
  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    const fetchBestProducts = async () => {
      const pageSize = mediaQuery.matches ? 2 : 4;
      try {
        const data = await fetchProducts(1, "favorite", pageSize);
        setBestProducts(data.list);
      } catch (error) {
        console.error("Error fetching best products:", error);
      }
    };
    fetchBestProducts();
  }, []);

  const [bestProducts, setBestProducts] = useState([]);
  const [filterProducts, setFilterProducts] = useState([]);

  useEffect(() => {
    setFilterProducts(sortedProducts);
  }, [sortedProducts]);

  const handleSearchChange = (e) => {
    const inputValue = e.target.value;

    const filterProduct = sortedProducts.filter((element) => {
      return element.name.startsWith(inputValue);
    });
    setFilterProducts(filterProduct);
  };
  return (
    <MainTitle>
      <MainH1>베스트 상품</MainH1>
      <BestProducts bestProducts={bestProducts} />

      <section>
        <EntireHeader>
          <MainH1>전체상품</MainH1>
          <EntireDiv>
            <SearchInput
              type="text"
              placeholder="검색할 상품을 입력해주세요"
              onChange={handleSearchChange}
            />
            <RegistButton to={"/additem"}>상품 등록하기</RegistButton>
            <SortDropdown
              sortOrder={sortOrder === "recent" ? "최신순" : "좋아요순"}
              setSortOrder={setSortOrder}
            />
          </EntireDiv>
        </EntireHeader>

        <ProductList sortedProducts={filterProducts} />
      </section>

      <Pagination
        activePage={activePage}
        setActivePage={setActivePage}
        totalPage={totalPage}
      />
    </MainTitle>
  );
};

export default MainContent;

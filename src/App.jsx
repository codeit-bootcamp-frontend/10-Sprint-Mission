import "./App.css";
import { fetchProducts } from "./api";
import { useEffect, useState } from "react";

import Header from "./component/MainContent/Header";
import { Routes, Route } from "react-router-dom";
import Additem from "./page/additem";
import MainContent from "./page/MainContent";
import DetailPage from "./page/DetailPage";

function App() {
  const [sortedProducts, setSortedProducts] = useState([]);

  const [totalPage, setTotalpage] = useState(0);
  const [activePage, setActivePage] = useState(1);
  const [sortOrder, setSortOrder] = useState("recent");

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    const fetchData = async () => {
      const pageSize = mediaQuery.matches ? 6 : 10;
      try {
        const { totalCount, list } = await fetchProducts(
          activePage,
          sortOrder,
          pageSize
        );
        const totalPage = Math.ceil(totalCount / 10);
        setTotalpage(totalPage);
        setSortedProducts(list);
      } catch (error) {
        console.error("error:", error);
      }
    };
    fetchData();
  }, [activePage, sortOrder]);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/additem" element={<Additem />} />
        <Route
          path="/"
          element={
            <MainContent
              sortedProducts={sortedProducts}
              sortOrder={sortOrder}
              setSortOrder={setSortOrder}
              activePage={activePage}
              setActivePage={setActivePage}
              totalPage={totalPage}
            />
          }
        />
        <Route path="/item/:id" element={<DetailPage />} />
      </Routes>
    </>
  );
}

export default App;

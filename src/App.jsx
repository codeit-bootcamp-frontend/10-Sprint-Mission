import "./App.css";
import { fetchProducts } from "./api";
import { useEffect, useState } from "react";

import Header from "./component/Header";
import { Routes, Route } from "react-router-dom";
import Additem from "./page/additem";
import MainContent from "./page/MainContent";

function App() {
  const [bestProducts, setBestProducts] = useState([]);
  const [sortedProducts, setSortedProducts] = useState([]);

  const [totalpage, setTotalpage] = useState(0);
  const [activePage, setActivePage] = useState(1);
  const [sortOrder, setSortOrder] = useState("recent");

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    const fetchBestProducts = async () => {
      const pageSize = mediaQuery.matches ? 2 : 4;
      try {
        const data = await fetchProducts(1, "favorite", pageSize);
        const totalpage = Math.ceil(data.totalCount / 10);
        setTotalpage(totalpage);
        setBestProducts(data.list);
      } catch (error) {
        console.error("Error fetching best products:", error);
      }
    };
    fetchBestProducts();
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    const fetchData = async () => {
      const pageSize = mediaQuery.matches ? 6 : 10;
      try {
        const data = await fetchProducts(activePage, sortOrder, pageSize);
        setSortedProducts(data.list);
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
              bestProducts={bestProducts}
              sortedProducts={sortedProducts}
              sortOrder={sortOrder}
              setSortOrder={setSortOrder}
              activePage={activePage}
              setActivePage={setActivePage}
              totalpage={totalpage}
            />
          }
        />
      </Routes>
    </>
  );
}

export default App;

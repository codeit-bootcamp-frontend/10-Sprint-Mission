import React from "react";
import BestProducts from "./BestProducts.jsx";
import AllProducts from "./AllProducts.js";
import "./MarketPage.css";

function MarketPage() {
  return (
    <div className="wrapper">
      <BestProducts />
      <AllProducts />
    </div>
  );
}

export default MarketPage;

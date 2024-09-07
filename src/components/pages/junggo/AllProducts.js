import React, { useEffect, useState } from "react";
import ItemCard from "./ItemCard";
import BestProducts from "./BestProducts";
import { getProducts } from "../../../services/itemApi";
import "./AllProducts.css";

function AllProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts()
      .then((data) => setProducts(data.list))
      .catch((error) => console.error("Product fetching error:", error));
  }, []);

  return (
    <div className="allProducts">
      <BestProducts products={products} />
      <h1 className="sectionTitle">전체 상품</h1>
      <div className="allProductsContainer">
        {products.map((item) => (
          <ItemCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

export default AllProducts;

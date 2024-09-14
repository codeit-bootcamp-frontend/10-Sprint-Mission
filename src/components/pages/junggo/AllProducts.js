import React, { useEffect, useState } from "react";
import ItemCard from "./ItemCard";
import BestProducts from "./BestProducts";
import { getProducts } from "../../../services/itemApi";
import "./global.css";
import AddButtonComponent from "./addButton";

function AllProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then((data) => setProducts(data.list));
  }, []);

  return (
    <div className="allProducts">
      <BestProducts products={products} />
      <AddButtonComponent />
      <div className="allProductsContainer">
        {products.map((item) => (
          <ItemCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

export default AllProducts;

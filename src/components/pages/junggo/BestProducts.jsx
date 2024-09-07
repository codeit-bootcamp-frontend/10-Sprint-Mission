import React, { useEffect, useState } from "react";
import ItemCard from "./ItemCard";
import BestProductCss from "./BestProducts.css";

function BestProducts({ products }) {
  const [bestProducts, setBestProducts] = useState([]);

  useEffect(() => {
    if (products.length > 0) {
      const top4 = products
        .sort((a, b) => b.favoriteCount - a.favoriteCount)
        .slice(0, 4);
      setBestProducts(top4);
    }
  }, [products]);

  return (
    <div className="bestProducts">
      <h1 className="sectionTitle">베스트 상품</h1>
      <div className="bestProductsContainer">
        {bestProducts.map((item) => (
          <ItemCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

export default BestProducts;

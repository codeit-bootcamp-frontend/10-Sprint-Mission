import { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";
import { getProudct } from "../services/getProudct";

const ProductDetail = () => {
  const [product, setProudct] = useState({});
  const { itemId } = useParams();

  const handleLoad = useCallback(async () => {
    const item = await getProudct(itemId);
    setProudct(item);
  }, [itemId]);

  useEffect(() => {
    handleLoad();
  }, [handleLoad]);

  return (
    <div>
      <div>{product.name}</div>
    </div>
  );
};

export default ProductDetail;

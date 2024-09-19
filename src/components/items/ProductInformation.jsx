import { useLocation } from "react-router-dom";

const ProductInformation = () => {
  const location = useLocation();
  const {
    product
  } = location.state || {};

  return (
    <div>
      <img src={product?.images} alt="제품 이미지" />
      <p>{product?.name}</p>
      <p>{product?.price}</p>
      <p>{product?.favoriteCount}</p>
    </div>
  );
};
export default ProductInformation;
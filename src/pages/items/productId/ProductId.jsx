import Header from "components/Header";
import BackButton from "components/items/productId/BackButton";
import Inquire from "components/items/productId/Inquire";
import InquireList from "components/items/productId/InquireList";
import ProductImage from "components/items/productId/ProductImage";
import ProductSummary from "components/items/productId/ProductSummary";

const ProductId = () => {
  return (
    <div>
      <Header />
      <ProductImage />
      <ProductSummary />
      <Inquire />
      <InquireList />
      <BackButton />
    </div>
  );
};
export default ProductId;
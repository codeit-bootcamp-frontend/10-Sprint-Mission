import AddProduct from "components/additem/AddProduct";
import AddProductImage from "components/additem/AddProductImage";
import AddProductTag from "components/additem/AddProductTag";
import ProductDescription from "components/additem/ProductDescription";
import ProductPrice from "components/additem/ProductPrice";
import ProductTagList from "components/additem/ProductTagList";
import ProductTitle from "components/additem/ProductTitle";
import Header from "components/Header";
import { useAddItemSharedData } from "components/additem/useAddItemSharedData";

const AddItem = () => {
  const { 
    productImage, 
    productTitle, 
    productDescription, 
    productPrice, 
    productTags,
    setProductImage,
    setProductTitle,
    setProductDescription,
    setProductPrice,
    setProductTags
  } = useAddItemSharedData();

  return (
    <div>
      <Header/>
      <AddProduct/>
      <AddProductImage productImage={productImage} setProductImage={setProductImage}/>
      <ProductTitle productTitle={productTitle} setProductTitle={setProductTitle} />
      <ProductDescription productDescription={productDescription} setProductDescription={setProductDescription}/>
      <ProductPrice productPrice={productPrice} setProductPrice={setProductPrice}/>
      <AddProductTag productTags={productTags} setProductTags={setProductTags}/>
      <ProductTagList productTags={productTags} setProductTags={setProductTags}/>
    </div>
  );
}

export default AddItem;
import AddProduct from "components/additem/AddProduct";
import AddProductImage from "components/additem/AddProductImage";
import AddProductTag from "components/additem/AddProductTag";
import ProductDescription from "components/additem/ProductDescription";
import ProductPrice from "components/additem/ProductPrice";
import ProductTagList from "components/additem/ProductTagList";
import ProductTitle from "components/additem/ProductTitle";
import Header from "components/Header";
import { useAddItemSharedData } from "components/additem/useAddItemSharedData";

interface AddItemProps {
  productImage: string;
  productTitle: string;
  productDescription: string;
  productPrice: string;
  productTags: string[];
  setProductImage: (image: string) => void;
  setProductTitle: (title: string) => void;
  setProductDescription: (description: string) => void;
  setProductPrice: (price: string) => void;
  setProductTags: (tags: string[]) => void;
}

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
  } = useAddItemSharedData() as AddItemProps;

  return (
    <div>
      <Header/>
      <AddProduct productImage={productImage} productTitle={productTitle} productDescription={productDescription} productPrice={productPrice} productTags={productTags}/>
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

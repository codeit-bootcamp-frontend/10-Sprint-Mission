import AddProduct from "components/additem/AddProduct";
import AddProductImage from "components/additem/AddProductImage";
import AddProductTag from "components/additem/AddProductTag";
import ProductDescription from "components/additem/ProductDescription";
import ProductPrice from "components/additem/ProductPrice";
import ProductTagList from "components/additem/ProductTagList";
import ProductTitle from "components/additem/ProductTitle";
import Header from "components/Header";

const AddItem = () => {
  return (
    <div>
      <Header/>
      <AddProduct/>
      <AddProductImage/>
      <ProductTitle/>
      <ProductDescription/>
      <ProductPrice/>
      <AddProductTag/>
      <ProductTagList/>
    </div>
  );
}

export default AddItem;
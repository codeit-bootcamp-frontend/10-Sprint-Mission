import Header from "components/Header";
import AllProducts from "components/items/AllProducts";
import BestProducts from "components/items/BestProducts";

const Items = () => {
  return (
    <div>
      <Header />
      <BestProducts />
      <AllProducts />
    </div>
  );
}

export default Items;
import BestList from "../components/BestList";
import ItemList from "../components/ItemList";
import SearchBar from "../components/SearchBar";
import Pagination from "../components/Pagination";

function ItemPage() {
  return (
    <>
      <BestList></BestList>
      <ItemList></ItemList>
      <Pagination></Pagination>
    </>
  );
}

export default ItemPage;

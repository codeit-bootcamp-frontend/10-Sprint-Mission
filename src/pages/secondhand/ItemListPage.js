import BestItemList from "../../components/secondhand/BestItemList";
import AllItemList from "../../components/secondhand/AllItemList";

import "./ItemListPage.css";

export default function ItemListPage() {
  return (
    <main className="main">
      <BestItemList />
      <AllItemList />
    </main>
  );
}

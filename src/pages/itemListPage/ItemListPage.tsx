import BestItemListSection from "./BestItemListSection";
import AllItemListSection from "./AllItemListSection";

import "./ItemListPage.css";

export default function ItemListPage() {
  return (
    <main className="main">
      <BestItemListSection />
      <AllItemListSection />
    </main>
  );
}

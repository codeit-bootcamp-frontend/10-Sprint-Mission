import BestItemListSection from "./BestItemListSection.js";
import AllItemListSection from "./AllItemListSection.js";

import "./ItemListPage.css";

export default function ItemListPage() {
  return (
    <main className="main">
      <BestItemListSection />
      <AllItemListSection />
    </main>
  );
}

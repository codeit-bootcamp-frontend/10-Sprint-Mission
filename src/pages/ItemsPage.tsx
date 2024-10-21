import BestItems from '../components/item/BestItems';
import AllItems from '../components/item/AllItems';
import './ItemsPage.css';

function ItemsPage() {
  return (
    <main className="ItemsPage">
      <div className="max-container">
        <BestItems />
        <AllItems />
      </div>
    </main>
  );
}

export default ItemsPage;

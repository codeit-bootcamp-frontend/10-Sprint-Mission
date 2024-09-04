import BestItems from '../components/item/BestItems';
import AllItems from '../components/item/AllItems';
import './Items.css';

function Items() {
  return (
    <div className="Items">
      <div className="max-container">
        <BestItems />
        <AllItems />
      </div>
    </div>
  );
}

export default Items;

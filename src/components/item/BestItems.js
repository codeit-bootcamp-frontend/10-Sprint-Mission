import './BestItems.css';
import Item from './Item';

function BestItems() {
  return (
    <section className="BestItems">
      <h3 className="BestItems-title">베스트 상품</h3>
      <div className="BestItems-list">
        <Item />
        <Item />
        <Item />
        <Item />
      </div>
    </section>
  );
}

export default BestItems;

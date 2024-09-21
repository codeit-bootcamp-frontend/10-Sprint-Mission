import { Link } from 'react-router-dom';

function ProductListPage() {
  return (
    <div>
      <h1>Items</h1>
      <ul>
        <li>
          <Link to={'/items'}>중고마켓</Link>
        </li>
        <li>Item 2</li>
        <li>Item 3</li>
      </ul>
    </div>
  );
}

export default ProductListPage;

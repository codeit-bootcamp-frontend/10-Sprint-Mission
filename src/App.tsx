import { Routes, Route } from 'react-router-dom';
import Home from 'components/Home';
import Items from 'pages/items/Items';
import AddItem from 'pages/additem/AddItem';
import ProductId from 'pages/items/productId/ProductId';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Items />} />
        <Route path="/login" element={<Home />} />
        <Route path="/signup" element={<Home />} />
        <Route path="/signin" element={<Home />} />
        <Route path="/items" element={<Items />} />
        <Route path="/items/:id" element={<ProductId />} />
        <Route path="/additem" element={<AddItem />} />
        <Route path="/faq" element={<Home />} />
        <Route path="/privacy" element={<Home />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;

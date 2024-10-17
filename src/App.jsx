import Nav from './components/Nav';
import './App.css';
import './App.font.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProductListPage from './pages/ProductListPage';
import AddItemPage from './pages/AddItemPage';
import ProductPage from './pages/ProductPage';

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='items'>
          <Route index element={<ProductListPage />} />
          <Route path=':id' element={<ProductPage />} />
        </Route>

        <Route path='additem' element={<AddItemPage />} />
      </Routes>
    </>
  );
}

export default App;

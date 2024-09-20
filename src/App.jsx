import Nav from './components/Nav';
import './App.css';
import './App.font.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ItemListPage from './pages/ItemListPage';
import AddItemPage from './pages/AddItemPage';

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='items' element={<ItemListPage />} />
        <Route path='additem' element={<AddItemPage />} />
      </Routes>
    </>
  );
}

export default App;

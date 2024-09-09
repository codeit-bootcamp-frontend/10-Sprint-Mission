import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import 'normalize.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ItemListPage from './pages/ItemListPage.jsx';
import HomePage from './pages/HomePage.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='items' element={<ItemListPage />} />
        </Routes>
      </App>
    </BrowserRouter>
  </StrictMode>
);

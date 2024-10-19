import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "shared/layouts/MainLayout";
import HomePage from "pages/HomePage";
import ProductListPage from "pages/ProductListPage";
import AddProductPage from "pages/AddProductPage";
import ProductPage from "pages/ProductPage";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="items">
            <Route index element={<ProductListPage />} />
            <Route path=":itemId" element={<ProductPage />} />
          </Route>
          <Route path="additem" element={<AddProductPage />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRoutes;

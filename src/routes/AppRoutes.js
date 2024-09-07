import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import HomePage from "../pages/HomePage";
import ProductListPage from "../pages/ProductListPage";
import AddProductPage from "../pages/AddProductPage";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="items" element={<ProductListPage />} />
          <Route path="additem" element={<AddProductPage />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRoutes;

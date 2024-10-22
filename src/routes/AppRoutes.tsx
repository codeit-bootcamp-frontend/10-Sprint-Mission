import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "shared/layouts/MainLayout";
import LandingPage from "pages/LandingPage";
import ProductListPage from "pages/ProductListPage";
import AddProductPage from "pages/AddProductPage";
import ProductPage from "pages/ProductPage";
import LoginPage from "pages/LoginPage";
import SignupPage from "pages/SignupPage";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<LandingPage />} />
          <Route path="items">
            <Route index element={<ProductListPage />} />
            <Route path=":itemId" element={<ProductPage />} />
          </Route>
          <Route path="additem" element={<AddProductPage />} />
        </Route>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;

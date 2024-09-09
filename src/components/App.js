import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./pages/Header";
import AllProducts from "./pages/junggo/AllProducts";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/items" element={<AllProducts />} />
      </Routes>
    </>
  );
}

export default App;

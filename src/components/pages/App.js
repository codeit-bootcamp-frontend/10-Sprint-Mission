import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./Header";
import AllProducts from "./junggo/AllProducts";
import AddAllItems from "./additem/AddAllItems";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/items" element={<AllProducts />} />
        <Route path="/additems" element={<AddAllItems />} />
      </Routes>
    </>
  );
}

export default App;

import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./Header";
import AddAllItems from "./additem/AddAllItems";
import MarketPage from "./junggo/MarketPage";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/items" element={<MarketPage />} />
        <Route path="/additem" element={<AddAllItems />} />
      </Routes>
    </>
  );
}

export default App;

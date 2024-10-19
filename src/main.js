import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./components/App";
import ItemPage from "./pages/ItemPage";
import AddItemPage from "./pages/AddItemPage";

function Main() {
  return (
    <BrowserRouter>
      <App>
        <Routes>
          <Route path="/items" element={<ItemPage />} />
          <Route path="/additem" element={<AddItemPage />}/>
        </Routes>
      </App>
    </BrowserRouter>
  );
}

export default Main;

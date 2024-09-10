import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./components/App";
import ItemPage from "./pages/ItemPage";

function Main() {
  return (
    <BrowserRouter>
      <App>
        <Routes>
          <Route path="/items" element={<ItemPage />} />
        </Routes>
      </App>
    </BrowserRouter>
  );
}

export default Main;

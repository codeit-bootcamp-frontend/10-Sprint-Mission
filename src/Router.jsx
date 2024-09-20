import { BrowserRouter, Route, Routes } from "react-router-dom";
import Market from './pages/Market/Market';
import AddItem from './pages/AddItem/AddItem';
import ProductDetail from './pages/ProductDetail/ProductDetail'

function Router() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/items"element={<Market />} />
            <Route path="/items/:productid" element={<ProductDetail />} /> 
            <Route path="/addItem" element={<AddItem />} />
        </Routes>
    </BrowserRouter>
  )
}

export default Router;
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Market from './pages/Market/Market';
function Router() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/item" element={<Market />}/>
        </Routes>
    </BrowserRouter>
  )
}

export default Router
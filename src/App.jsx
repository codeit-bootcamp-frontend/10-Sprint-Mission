import {Routes, Route} from 'react-router-dom';
import BestProducts from 'components/items/BestProducts';
import Home from 'components/Home';
import Items from 'pages/items/Items';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Items/>}></Route>
        <Route path="/login" element={<Home/>}></Route>
        <Route path="/signup" element={<Home/>}></Route>
        <Route path="/signin" element={<Home/>}></Route>
        <Route path="/items" element={<Items/>}></Route>
        <Route path="/faq" element={<Home/>}></Route>
        <Route path='/privacy' element={<Home/>}></Route>
        <Route path="*" element={<Home/>}></Route>
      </Routes>
    </div>
  );
};

export default App;
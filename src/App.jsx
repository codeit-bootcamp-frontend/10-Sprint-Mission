import {Routes, Route} from 'react-router-dom';
import {ROUTES} from 'config/routes';
import BestProducts from 'components/items/BestProducts';
import Home from 'components/Home';
import Items from 'pages/items/Items';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path={ROUTES.HOME} element={<Items/>}></Route>
        <Route path={ROUTES.LOGIN} element={<Home/>}></Route>
        <Route path={ROUTES.SIGNUP} element={<Home/>}></Route>
        <Route path={ROUTES.SIGNIN} element={<Home/>}></Route>
        <Route path={ROUTES.ITEMS} element={<BestProducts/>}></Route>
        <Route path={ROUTES.FAQ} element={<Home/>}></Route>
        <Route path={ROUTES.PRIVACY} element={<Home/>}></Route>
        <Route path="*" element={<Home/>}></Route>
      </Routes>
    </div>
  );
};

export default App;
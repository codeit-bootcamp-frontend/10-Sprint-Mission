import Header from 'components/Header';
import Items from 'components/Items';
import {Routes, Route} from 'react-router-dom';
import ROUTES from 'confin/routes';
import BestProducts from 'components/items/BestProducts';

const App = () => {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path={ROUTES.HOME} element={<BestProducts/>}></Route>
        <Route path={ROUTES.LOGIN} element={<Home/>}></Route>
        <Route path={ROUTES.SIGNUP} element={<Home/>}></Route>
        <Route path={ROUTES.SIGNIN} element={<Home/>}></Route>
        <Route path={ROUTES.ITEMS} element={<Items/>}></Route>
        <Route path={ROUTES.FAQ} element={<Home/>}></Route>
        <Route path={ROUTES.PRIVACY} element={<Home/>}></Route>
        <Route path="*" element={<Home/>}></Route>
      </Routes>
    </div>
  );
};

export default App;
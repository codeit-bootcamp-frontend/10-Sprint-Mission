import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './pages/Root';
import Items from './pages/Items';
import Home from './pages/Home';
import AddItem from './pages/AddItem';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      { index: true, element: <Home /> },
      { path: 'items', element: <Items /> },
      { path: 'addItem', element: <AddItem /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

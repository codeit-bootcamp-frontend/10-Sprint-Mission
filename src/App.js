import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './pages/Root';
import Items from './pages/Items';
import Home from './pages/Home';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      { index: true, element: <Home /> },
      { path: 'items', element: <Items /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

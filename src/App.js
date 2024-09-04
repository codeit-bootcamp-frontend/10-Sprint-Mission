import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Items from './pages/Items';

const router = createBrowserRouter([
  {
    path: '/',
    element: <div>index</div>,
  },
  {
    path: '/items',
    element: <Items />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './pages/Root';
import ItemsPage from './pages/ItemsPage';
import HomePage from './pages/HomePage';
import AddItemPage from './pages/AddItemPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'items', element: <ItemsPage /> },
      { path: 'addItem', element: <AddItemPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

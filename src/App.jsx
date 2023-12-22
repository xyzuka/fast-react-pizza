import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import Home from './ui/Home';
import Menu, { loader as menuLoader } from './features/menu/Menu';
import Cart from './features/cart/Cart';
import Order from './features/order/Order';
import CreateOrder from './features/order/CreateOrder';
import AppLayout from './ui/AppLayout';

const router = createBrowserRouter([
  // the AppLayout component is the parent route which will contain all the other routes
  // other routes will be "nested" as children
  // the Outlet component inside AppLayout renders the current nested route
  {
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/menu',
        element: <Menu />,
        loader: menuLoader,
      },
      {
        path: '/cart',
        element: <Cart />,
      },
      {
        path: '/order/new',
        element: <CreateOrder />,
      },
      {
        path: '/order/:orderID',
        element: <Order />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

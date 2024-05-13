import Home from './components/Home/Home';
import Product from './components/Product/Product';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import ErrorRoute from './components/ErrorRoute/ErrorRoute';
import './App.css';

function App() {
  let router=createBrowserRouter([
    {
      path:'',
      element:<Home></Home>,
      errorElement:<ErrorRoute></ErrorRoute>
    },
    {
      path:'home',
      element:<Home></Home>,
      errorElement:<ErrorRoute></ErrorRoute>
    },
    {
      path:'product/:productid',
      element:<Product></Product>,
      errorElement:<ErrorRoute></ErrorRoute>
    }
  ])
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

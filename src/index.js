import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Navbarmenu from './Header/Navbarmenu'
import HeroSection from './components/HeroSection'
import RestroMenu from './components/RestroMenu';
import Error from './components/Error';
import './App.css'
import User from './components/User'
import { Provider } from 'react-redux';
import appStore from './utils/appStore';
import Cart from './components/Cart'; 
import Search from './components/Search';

const AppLayout = () => {
  return (
   <Provider store={appStore}>
     <div>
      <Navbarmenu />
      <Outlet/>
    </div>
   </Provider>
  )
}

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <HeroSection />
      },
      {
        path: '/search',
        element: <Search />,
      },
      {
        path: '/user',
        element: <User />,
      },
      {
        path: '/resturants/:resId',
        element: <RestroMenu />,
      },
      {
        path:'/cart',
        element: <Cart/>,
      }
    ],
    errorElement: <Error />
  },
  
])



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={appRouter} />
);


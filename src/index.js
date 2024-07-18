import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home';
import Crypto from './pages/Crypto';
import Trending from './pages/Trending';
import Saved from './pages/Saved';
import CryptoDetails from './components/CryptoDetails';
import HomePage from './pages/HomePage';
import News from './pages/News';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/",
        element: <HomePage />
      },
      {
        path: "/crypto",
        element: <Crypto />
      },
      {
        path: "/crypto/:coinId",
        element: <CryptoDetails />
      },
      {
        path: ":coinId",
        element: <CryptoDetails />
      },
      {
        path: "/news",
        element: <News />
      },
      {
        path: "/trending",
        element: <Trending />
      },
      {
        path: "/saved",
        element: <Saved />
      }
    ]
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
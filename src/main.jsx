import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import router from './Routes/Route.jsx';
import AuthProvider from './Providers/AuthProvider.jsx';
import { Helmet, HelmetProvider } from 'react-helmet-async';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
    </HelmetProvider>
  </React.StrictMode>,
)

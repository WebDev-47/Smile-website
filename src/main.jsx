import React from 'react'
import App from './App.jsx'
import { createRoot } from 'react-dom/client'
import './index.css'
import 'swiper/css';

// bootstrap css
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';


// fonts and icons
import '././assets/css/icofont.min.css';
import '././assets/css/animate.css';
import '././assets/css/style.min.css';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Home/Home.Jsx';
import Blog from './Blog/Blog.jsx';



const router = createBrowserRouter([
  {
    path: "/",
    element: <App /> ,
    children:[
      {path: "/", element: <Home />},
      {path: "/blog", element: <Blog /> }

    ],
  },
]);


createRoot(document.getElementById('root')).render(
<RouterProvider router={router} />
)

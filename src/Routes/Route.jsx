import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home/Home";
import Blog from "../Pages/Blog/Blog";
import AllFood from "../Pages/AllFood/AllFood";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Registration/Registration";
import AddAFood from "../Pages/Profile/AddAFood/AddAFood";
import AddedFood from "../Pages/Profile/AddedFood/AddedFood";
import OrderedFood from "../Pages/Profile/OrderedFood/OrderedFood";
import SingleFood from "../Pages/SingleFood/SingleFood";
import Order from "../Pages/Order/Order";
import Update from "../Pages/Profile/AddedFood/Update";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout></Layout>,
      children: [
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: '/blog',
          element: <Blog></Blog>
        },
        {
          path: '/allfood',
          element: <AllFood></AllFood>,

        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/register',
          element: <Registration></Registration>
        },
        {
          path: '/addfood',
          element: <AddAFood></AddAFood>
        },
        {
          path: '/addedfood',
          element: <AddedFood></AddedFood>
        },
        {
          path: '/orderedfood',
          element: <OrderedFood></OrderedFood>
        },
        {
          path: '/details/:id',
          element: <SingleFood></SingleFood>,
          // loader: async({params}) => await fetch(`http://localhost:5000/allfoods/${params.id}`)
        },
        {
          path: '/order/:id',
          element: <Order></Order>,
          loader: async() => await fetch('http://localhost:5000/users') 
        },
        {
          path: '/update/:id',
          element: <Update></Update>,
        }
      ]
    },
  ]);

  export default router;
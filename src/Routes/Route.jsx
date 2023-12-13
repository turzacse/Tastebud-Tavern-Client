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
import Error from "../Pages/Error/Error";
import PrivateRoute from "./PrivateRoute";
import About from "../Pages/About/About";
import Review from "../Pages/Feedback/Review/Review";

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
          path: '/about',
          element: <About/>
        },
        {
          path: '/review',
          element: <Review/>
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
          element: <PrivateRoute><OrderedFood></OrderedFood></PrivateRoute>
        },
        {
          path: '/details/:id',
          element: <SingleFood></SingleFood>,
          // loader: async({params}) => await fetch(`https://b8a11-server-side-turzacse.vercel.app/allfoods/${params.id}`)
        },
        {
          path: '/order/:id',
          element: <PrivateRoute><Order></Order></PrivateRoute>,
          loader: async() => await fetch('https://b8a11-server-side-turzacse.vercel.app/users') 
        },
        {
          path: '/update/:id',
          element: <PrivateRoute><Update></Update></PrivateRoute>,
        }
      ]
    },
    {
      path: '*',
      element: <Error></Error>
    }
  ]);

  export default router;
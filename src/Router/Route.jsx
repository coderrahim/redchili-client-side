import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Contact from "../Pages/Contact/Contact";
import Blog from "../Pages/Blog/Blog";
import AllFood from "../Pages/AllFood/AllFood";
import Registration from "../Pages/Registration/Registration";
import Login from "../Pages/Login/Login";
import AddFood from "../Pages/Profile/AddFood/AddFood";
import AddedFood from "../Pages/Profile/AddedFood/AddedFood";
import UpdateFood from "../Pages/Profile/UpdateFood/UpdateFood";
import SingleFoodDetails from "../Pages/AllFood/SingleFoodDetails/SingleFoodDetails";
import PrivateRoute from "./PrivateRoute";
import Checkout from "../Pages/AllFood/Checkout/Checkout";
import OrderFood from "../Pages/Profile/OrderFood/OrderFood";
import Error from "../Components/Error";
import SingleBlogDetails from "../Pages/Blog/SingleBlogDetails";

const Route = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement: <Error></Error>,
      
      children: [
        {
            path: '/',
            element: <Home></Home>,
        },
        {
            path: '/all-food',
            element: <AllFood></AllFood>,
            loader: () => fetch('https://red-chili-server-side.vercel.app/totalFood')
        },
        {
            path: '/single-food-details/:id',
            element: <SingleFoodDetails></SingleFoodDetails>,
            loader: ({params}) => fetch(`https://red-chili-server-side.vercel.app/addfood/${params.id}`)
        },
        {
            path: '/checkout/:id',
            element: <PrivateRoute><Checkout></Checkout></PrivateRoute>,
            loader: ({params}) => fetch(`https://red-chili-server-side.vercel.app/addfood/${params.id}`)
        },
        {
            path: '/my-order-food',
            element: <PrivateRoute><OrderFood></OrderFood></PrivateRoute>,
        },
        {
            path: '/blog',
            element: <Blog></Blog>,
            loader: () => fetch('/blog.json')
        },
        {
            path: '/blogDetails/:id',
            element: <SingleBlogDetails></SingleBlogDetails>,
            loader: () => fetch(`/blog.json`)
        },
        {
            path: '/contact',
            element: <Contact></Contact>,
        },
        {
            path: '/registration',
            element: <Registration></Registration>,
        },
        {
            path: '/login',
            element: <Login></Login>,
        },
        {
            path: '/add-food',
            element: <PrivateRoute><AddFood></AddFood></PrivateRoute>,
        },
        {
            path: '/added-food',
            element: <PrivateRoute><AddedFood></AddedFood></PrivateRoute>,
            loader: ({params}) => fetch(`https://red-chili-server-side.vercel.app/user/${params.id}`)            
        },
        {
            path: '/updatefood/:id',
            element: <PrivateRoute><UpdateFood></UpdateFood></PrivateRoute>,
            loader: ({params}) => fetch(`https://red-chili-server-side.vercel.app/addfood/${params.id}`)
        },
      ]
    },
  ]);

export default Route;
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
            loader: () => fetch('http://localhost:5000/totalFood')
        },
        {
            path: '/single-food-details/:id',
            element: <SingleFoodDetails></SingleFoodDetails>,
            loader: ({params}) => fetch(`http://localhost:5000/addfood/${params.id}`)
        },
        {
            path: '/checkout/:id',
            element: <PrivateRoute><Checkout></Checkout></PrivateRoute>,
            loader: ({params}) => fetch(`http://localhost:5000/addfood/${params.id}`)
        },
        {
            path: '/my-order-food',
            element: <OrderFood></OrderFood>,
        },
        {
            path: '/blog',
            element: <Blog></Blog>,
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
            element: <AddFood></AddFood>,
        },
        {
            path: '/added-food',
            element: <AddedFood></AddedFood>,
            loader: ({params}) => fetch(`http://localhost:5000/user/${params.id}`)            
        },
        {
            path: '/updatefood/:id',
            element: <UpdateFood></UpdateFood>,
            loader: ({params}) => fetch(`http://localhost:5000/addfood/${params.id}`)
        },
      ]
    },
  ]);

export default Route;
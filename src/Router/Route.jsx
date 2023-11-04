import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Contact from "../Pages/Contact/Contact";
import Blog from "../Pages/Blog/Blog";
import AllFood from "../Pages/AllFood/AllFood";
import Registration from "../Pages/Registration/Registration";
import Login from "../Pages/Login/Login";

const Route = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      
      children: [
        {
            path: '/',
            element: <Home></Home>,
        },
        {
            path: '/all-food',
            element: <AllFood></AllFood>,
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
      ]
    },
  ]);

export default Route;
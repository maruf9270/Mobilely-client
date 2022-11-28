import { createBrowserRouter } from "react-router-dom";
import BigSpinner from "../Components/BigSpinner";
import HomeLayout from "../Home/HomeLayout/HomeLayout";
import Homepage from "../Home/HomeLayout/HomePage/Homepage";
import Products from "../Home/HomeLayout/HomePage/Products/Products";
import Blog from "../Pages/Blog/Blog";
import AddProduct from "../Pages/Dashboard/AddProduct/AddProduct";
import AllBuyers from "../Pages/Dashboard/AllBuyers/AllBuyers";
import AllSellers from "../Pages/Dashboard/All_sellsers/AllSellers";
import DashLayout from "../Pages/Dashboard/Layout/DashLayout";
import MyProducts from "../Pages/Dashboard/My_Products/MyProducts";
import ReportedItems from "../Pages/Dashboard/Reported_items/ReportedItems";
import Error from "../Pages/Error/Error";
import Login from "../Pages/Login/Login";
import MyOrders from "../Pages/MyOrders/MyOrders";
import Payment from "../Pages/Payment/Payment";
import Signup from "../Pages/SignUp/Signup";
import AdminPrivetRoute from "../PrivetRoutes/AdminPrivetRoute";
import UserPrivetRoute from "../PrivetRoutes/UserPrivetRoute";

export const router = createBrowserRouter([
    // this is routes wtih navber and footer with it
    {
        path:'/',
        element:<HomeLayout></HomeLayout>,
        errorElement:<Error></Error> ,
        children:[
            {index:true,
             element:<Homepage></Homepage>
            },
            {
                path:'/login'
                ,element:<Login></Login>
            },
            {
                path:'/signup'
                ,element:<Signup></Signup>
            },
            {
                path:"/brands/:name"
                ,element:<UserPrivetRoute><Products></Products></UserPrivetRoute>,
                loader: ({params})=>fetch(`${process.env.REACT_APP_server}/brand?name=${params.name}`)
            },
           
            {
                path:'/payment/:oid',
                element:<UserPrivetRoute><Payment></Payment></UserPrivetRoute>,
                loader: ({params})=>fetch(`${process.env.REACT_APP_server}/order/${params.oid}`)
            },
            {
                path:'/blog',
                element:<Blog></Blog>
            }
        ]
    },
    {
        path:'/dashboard'
        ,element:<UserPrivetRoute><DashLayout></DashLayout></UserPrivetRoute>
        ,errorElement:<Error></Error>,
        children:[
            {
                path:'/dashboard'
                ,element:<MyProducts></MyProducts>
                
            },
            {
                path:'/dashboard/addproduct',
                element:<AddProduct></AddProduct>
            },
            {
               path:'/dashboard/allsellers',
               element:<AdminPrivetRoute><AllSellers></AllSellers></AdminPrivetRoute>
            }
            ,{
                path: '/dashboard/reported_items',
                element:<AdminPrivetRoute><ReportedItems></ReportedItems></AdminPrivetRoute>
            }
            ,{
                path:'/dashboard/allbuyers'
                ,element: <AdminPrivetRoute><AllBuyers></AllBuyers></AdminPrivetRoute>
            },
            {
                path:"/dashboard/myorders",
                element: <UserPrivetRoute><MyOrders></MyOrders></UserPrivetRoute>
            },
        ]
    }

])
import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../Home/HomeLayout/HomeLayout";
import Homepage from "../Home/HomeLayout/HomePage/Homepage";
import AddProduct from "../Pages/Dashboard/AddProduct/AddProduct";
import AllBuyers from "../Pages/Dashboard/AllBuyers/AllBuyers";
import AllSellers from "../Pages/Dashboard/All_sellsers/AllSellers";
import DashLayout from "../Pages/Dashboard/Layout/DashLayout";
import MyProducts from "../Pages/Dashboard/My_Products/MyProducts";
import ReportedItems from "../Pages/Dashboard/Reported_items/ReportedItems";
import Error from "../Pages/Error/Error";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/SignUp/Signup";

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
                
            }
        ]
    },
    {
        path:'/dashboard'
        ,element:<DashLayout></DashLayout>
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
               element:<AllSellers></AllSellers>
            }
            ,{
                path: '/dashboard/reported_items',
                element:<ReportedItems></ReportedItems>
            }
            ,{
                path:'/dashboard/allbuyers'
                ,element: <AllBuyers></AllBuyers>
            }
        ]
    }

])
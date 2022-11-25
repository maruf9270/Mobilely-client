import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../Home/HomeLayout/HomeLayout";
import Homepage from "../Home/HomeLayout/HomePage/Homepage";
import AddProduct from "../Pages/Dashboard/AddProduct/AddProduct";
import DashLayout from "../Pages/Dashboard/Layout/DashLayout";
import MyProducts from "../Pages/Dashboard/My_Products/MyProducts";
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
            }
        ]
    },
    {
        path:'/dashboard'
        ,element:<DashLayout></DashLayout>
        ,errorElement:<Error></Error>,
        children:[
            {
                
            },
            {
                path:'/dashboard/addproduct',
                element:<AddProduct></AddProduct>
            },
            {
                path:'/dashboard/my_products'
                ,element:<MyProducts></MyProducts>
            }
        ]
    }

])
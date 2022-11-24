import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../Home/HomeLayout/HomeLayout";
import Homepage from "../Home/HomeLayout/HomePage/Homepage";
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
    }

])
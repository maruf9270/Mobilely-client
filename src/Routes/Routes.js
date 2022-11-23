import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../Home/HomeLayout/HomeLayout";
import Homepage from "../Home/HomeLayout/HomePage/Homepage";
import Login from "../Pages/Login/Login";

export const router = createBrowserRouter([
    // this is routes wtih navber and footer with it
    {
        path:'/',
        element:<HomeLayout></HomeLayout>,
        children:[
            {index:true,
             element:<Homepage></Homepage>
            },
            {
                path:'/login'
                ,element:<Login></Login>
            }
        ]
    }

])
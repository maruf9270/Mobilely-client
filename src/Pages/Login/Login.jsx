import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {toast } from 'react-toastify';
import SmallSpinner from "../../Components/SmallSpinner";
import Spinner from "../../Components/Spinner";
import { UserContext } from "../../Contexts/AuthContexts";

const Login = () => {

  // Navigating user
  
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || '/'

  // Loading start
  const [logLoading, setLogLoading] = useState(false)
  // 
    const {forgot,loginWithEmail,signWithGoogle} = useContext(UserContext)
    // Forgotten Mail
    const [forgoMail, setforgot] = useState('')

    // Handling email login 
    const login = (email,password,form) =>{
      setLogLoading(true)
        loginWithEmail(email,password)
        .then(res=>{
            toast.success("Logged in successfully")
            setLogLoading(false)
            form.reset();
            navigate(from,{replace: true})
        })
        .catch(err=>{
            toast.error(err.message)
            setLogLoading(false)
        })
    }

    // Handling form submit
    const handlesubmit =(e) =>{
     
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        login(email,password,form)
        
        
         }

    // Handling forgot password
    const handleForgot = () =>{
      setLogLoading(true)
        forgot(forgoMail)
        .then(res=>{

            toast.success("A Password reset link has been sent to your Email")
            setLogLoading(false)
        
        })
        .catch(err=>{
            toast.error(err.message)
            setLogLoading(false)
        })

    }

    // Handle google 
    const handleGoogle = () =>{
        signWithGoogle()
        .then(res=>{
            toast.success("Logged in successfully")
        })
        .catch(err=>{
            toast.error(err.message)
            console.log(err);
        })

    }
  return (
      <div className=" mx-auto w-full max-w-md p-8 space-y-3 rounded-xl bg-gray-50 text-gray-800 shadow-md shadow-slate-300">
        <h1 className="text-2xl font-bold text-center">Login</h1>
        <form
          action=""
          className="space-y-6 ng-untouched ng-pristine ng-valid"
          onSubmit={handlesubmit}
        >
          <div className="space-y-1 text-sm">
            <label htmlFor="email" className="block text-gray-600">
            E-Mail
            </label>
            <input
              type="text"
              name="email"
              id="email"
              placeholder="E-Mail"
              onBlur={(e)=>setforgot(e.target.value)}
              className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-violet-600"
            />
          </div>
          <div className="space-y-1 text-sm">
            <label htmlFor="password" className="block text-gray-600">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-violet-600"
            />
            <div className="flex justify-end text-xs text-gray-600">
              <Link rel="noopener noreferrer" 
              onClick={handleForgot}>
                Forgot Password?
              </Link>
            </div>
          </div>
          <button className="block w-full p-3 text-center rounded-sm text-gray-50 bg-violet-600">
          {
              logLoading ? <SmallSpinner></SmallSpinner> : "Sign in"
          }
          </button>
        </form>
        <div className="flex items-center pt-4 space-x-1">
          <div className="flex-1 h-px sm:w-16 bg-gray-300"></div>
          <p className="px-3 text-sm text-gray-600">
            Login with social accounts
          </p>
          <div className="flex-1 h-px sm:w-16 bg-gray-300"></div>
        </div>
        <div className="flex justify-center space-x-4">
          <button aria-label="Log in with Google" className="p-3 rounded-sm"
          onClick={handleGoogle}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              className="w-5 h-5 fill-current"
            >
              <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
            </svg>
          </button>
      
        </div>
        <p className="text-xs text-center sm:px-6 text-gray-600">
          Don't have an account?
          <Link
            rel="noopener noreferrer"
            className="underline text-gray-800"
            to={'/signup'}
          >
            Sign up
          </Link>
        </p>
      </div>
   
  );
};

export default Login;

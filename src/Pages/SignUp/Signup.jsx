import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import SmallSpinner from '../../Components/SmallSpinner';
import { UserContext } from '../../Contexts/AuthContexts';

const Signup = () => {
  const [signupLoading,setSignUploading] = useState(false)
  // redirecting the user
  const navigate = useNavigate()
    // Image bb url;
    const url = `https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_imagebb}`

    // Getting the value form Contexts
    const {signUpWithEmail,update,logOut,signWithGoogle} = useContext(UserContext)

    // Password field error
    const [passfieldError,setPassError] = useState(false);
    const [confirmPassError,setConfirmError] = useState(false)

    // Handling creatinf accounts
    const handleCreateAccount = (props) =>{
        signUpWithEmail(props.email,props.password)
        .then(res=>{
            handleImage(props)

        })
        .catch(err=> {toast.error(err.message
          )
          setSignUploading(false)
        })
    }
    // Sending image to the server
    const handleImage = (props) =>{
        const formdata = new FormData()
        formdata.append("image",props.image)

       fetch(url,{
        method:"POST",
        body: formdata
       })
       .then(res=>res.json())
       .then(data=>{
        handleUpdate(data,props)

       })
       .catch(err=>{
        toast.error("Something went wrong try again letter")
        console.log(err);
        setSignUploading(false)
       })
    }

    // Handling update profile name and image url
    const handleUpdate = (data,props) =>{
        const name = props.name
        const photo = data.data.display_url
        update(photo,name)
        .then(res=>{
            
            props["image"] = photo
            handleDatabase(props)
            

        })
        .catch(err=> {
            toast.error(err.message)
            setSignUploading(false)
        })
        
    }

    // Sending user data to the database
    const handleDatabase = (props) => {
      fetch(`${process.env.REACT_APP_server}/user`,{
        method:"PUT"
        ,headers:{
          "content-type": "application/json"
        }
        ,body: JSON.stringify(props)
      })
    .then(res=>res.json())
    .then(data=>{
      console.log(data);
      console.log(props);
        signout()
    })
    .catch(err=>{
      toast.error("Something went wrong try again letter")
      console.log(err);
    })
        

    }

    // Handling logout
    const signout = () =>{
      logOut()
      .then(res=>{
        toast.success("Account created success fully. Please login")
        setSignUploading(false)
        navigate('/')
        

      })
    }
    // Handling form submit 
    const handlesubmit = (e) =>{
        e.preventDefault();
        setSignUploading(true)
        const form = e.target;
        const name = form.name.value
        const email = form.email.value;
        const password = form.password.value;
        const option = form.option.value;
        const image = form.image.files[0];
        const confirm = form.confirm_password.value;
        const formValue = {
            name,
            email,
            password,
            role:option,
            image,
        }
        
        // varification
        if(password.length < 6 ){
            setPassError(true)
            setSignUploading(false)
            return toast.error("Password must be at least 6 charecter long");
          
        }
        if(password !== confirm){
            setConfirmError(true)
            setSignUploading(false)
            return toast.error("Confirm password did not match")
        }

        // signing up
        else{

            handleCreateAccount(formValue)
            setPassError(false)
            setConfirmError(false)

        }


    }
    // Handling google 
    const handleGoogle =() =>{
      signWithGoogle()
      .then(res=>{
        console.log(res);
        const name = res?.user?.displayName ? res?.user?.displayName: "No Name"
        const email = res?.user?.email
        const image = res?.user?.photoURL
        const role = "buyer"

        const user = {
          name,
          email,
          role,
         image

        
        }
        console.log(user);
        fetch(`${process.env.REACT_APP_server}/google`,{
          method: "put",
          headers:{
            "content-type":"application/json"
          }
          , body: JSON.stringify(user)
        })
        .then(res=>res.json())
        .then(data=>{
          console.log(data);
          toast.success("Signed up successfully")
          navigate('/')
        })
      })

    }
    return (
        <div>
            <div className="sm:w-[50vw] mx-auto w-full max-w-md p-8 space-y-3 rounded-xl bg-gray-50 text-gray-800 shadow-md shadow-slate-300">
        <h1 className="text-2xl font-bold text-center">Login</h1>
        <form
          action=""
          className="space-y-6 ng-untouched ng-pristine ng-valid"
          onSubmit={handlesubmit}
        >
            {/* Name field */}
            <div className="space-y-1 text-sm">
            <label htmlFor="email" className="block text-gray-600">
           Full Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Full Name"
              className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-violet-600"
              required
            />
          </div>

            {/* Email field */}
          <div className="space-y-1 text-sm">
            <label htmlFor="email" className="block text-gray-600">
            E-Mail
            </label>
            <input
              type="text"
              name="email"
              id="email"
              placeholder="E-Mail"
              className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-violet-600"
              required
            />
          </div>
          {/* Passeord field */}
          <div className="space-y-1 text-sm">
            <label htmlFor="password" className="block text-gray-600">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="New Password"
              className={`w-full px-4 py-3 rounded-md bg-gray-50 text-gray-800 border focus:border-violet-600 ${passfieldError || confirmPassError ? "border-red-700":"border-gray-300"}`}
              required
            />
            <div className="flex justify-end text-xs text-gray-600">
            </div>
          </div>

          {/* Confirm password field */}
          <div className="space-y-1 text-sm">
            <label htmlFor="confirm-password" className="block text-gray-600">
              Confirm Password
            </label>
            <input
              type="password"
              name="confirm_password"
              id="confirm-password"
              placeholder="Confirm Password"
              className={`w-full px-4 py-3 rounded-md bg-gray-50 text-gray-800 focus:border-violet-600 border ${confirmPassError ? "border-red-700" : "border-gray-300"}`}
              required
            />
            <div className="flex justify-end text-xs text-gray-600">
            </div>
          </div>

        {/* Image field*/}
        <div className="space-y-1 text-sm">
            <label htmlFor="email" className="block text-gray-600">
           Profile Picture
            </label>
            <input
              type='file'
              id='image'
              name='image'
              accept='image/*'
              required
              placeholder="E-Mail"
              className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-violet-600"
            
            />
          </div>

        {/* Option select section */}
        <select name="option" id="option" required>
            <option value="buyer" className='default'>Buyer</option>
            <option value="seller">Seller</option>
        </select>

          <button className="block w-full p-3 text-center rounded-sm text-gray-50 bg-violet-600" type='submit'>
          {
            signupLoading ? <SmallSpinner></SmallSpinner> : "Sign Up"
          }
          </button>
        </form>
        <div className="flex items-center pt-4 space-x-1">
          <div className="flex-1 h-px sm:w-16 bg-gray-300"></div>
          <p className="px-3 text-sm text-gray-600">
            Sign Up with social accounts
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
          Already have an account?
          <Link
            rel="noopener noreferrer"
            className="underline text-gray-800"
            to={'/login'}
          >
           Login
          </Link>
        </p>
      </div>
   
            
        </div>
    );
};

export default Signup;
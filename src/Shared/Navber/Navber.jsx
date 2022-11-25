import { Avatar, Dropdown, Navbar } from "flowbite-react";
import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { toast } from "react-toastify";
import { UserContext } from "../../Contexts/AuthContexts";

const Navber = () => {
    const {user,logOut} = useContext(UserContext)
    // Handling sign out
    const handlesignout = ()=>{
        logOut()
        .then(res=>{
            toast("Logged out succesfully")
        })

    }
    console.log(user);
  return (
    <div className="max-w-screen-xl w-full overflow-hidden mx-auto">
      <Navbar rounded={true}>
        <Navbar.Brand href="https://flowbite.com/">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="mr-3 h-6 sm:h-9"
            alt="Flowbite Logo"
          />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Flowbite
          </span>
        </Navbar.Brand>
        <div className="flex md:order-2">
         {
            user?.uid ? <>
             <Dropdown
            arrowIcon={false}
            inline={true}
          
            label={
              <Avatar
                alt="User settings"
                img={user?.photoURL}
                rounded={true}
                className="rounded-full ring-2 ring-offset-4 bg-gray-500 ring-lime-600 ring-offset-gray-100"
              />
            }
          >
            <Dropdown.Header>
              <span className="block text-sm">{user?.displayName}</span>
              <span className="block truncate text-sm font-medium">
                {user?.email}
              </span>
            </Dropdown.Header>
            <Link to={'/dashboard'}><Dropdown.Item >Dashboard</Dropdown.Item></Link>
            <Dropdown.Item>Settings</Dropdown.Item>
            <Dropdown.Item>Earnings</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item  onClick={handlesignout}>Sign Out</Dropdown.Item>
          </Dropdown>
          <Navbar.Toggle /></>
          : ""
         }
        </div>
        <Navbar.Collapse>
         <NavLink to={'/'}> <Navbar.Link>
            Home
          </Navbar.Link></NavLink>
          
          <Link to={"/dashboard/addproduct"}><Navbar.Link>Add Product</Navbar.Link></Link>
          <Navbar.Link href="/navbars">Services</Navbar.Link>
          <Navbar.Link href="/navbars">Pricing</Navbar.Link>
          <Navbar.Link href="/navbars">Contact</Navbar.Link>
          <Navbar.Link>  <label
              htmlFor="dashboardDrawer"
              className="btn btn-primary drawer-button lg:hidden"
            >
              Open drawer
            </label></Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Navber;

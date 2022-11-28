import { Avatar, Dropdown, Navbar } from "flowbite-react";
import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { toast } from "react-toastify";
import { UserContext } from "../../Contexts/AuthContexts";
import logo from "../../Assets/logo.png";
import { useAdmin } from "../../Hooks/useAdmin";
import useSeller from "../../Hooks/useSeller";

const Navber = () => {
  const { user, logOut } = useContext(UserContext);
  const [admin, adminLoading] = useAdmin(user?.email);
  const [seller, sellerLoading] = useSeller(user?.email);

  // Handling sign out
  const handlesignout = () => {
    logOut().then((res) => {
      toast("Logged out succesfully");
    });
  };

  return (
    <div className="max-w-screen-xl w-full overflow-hidden mx-auto">
      <Navbar rounded={true}>
        <Link to={"/"}>
          <Navbar.Brand>
            <img src={logo} className="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
            <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
              Mobilely
            </span>
          </Navbar.Brand>
        </Link>
        <div className="flex md:order-2">
          {user?.uid ? (
            <>
              <button className="btn btn-primary mx-3" onClick={handlesignout}>
                Sign Out
              </button>
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
                <NavLink to={"/dashboard"}>
                  <Dropdown.Item>Dashboard</Dropdown.Item>
                </NavLink>
                <NavLink to={"/blog"}>
                  <Dropdown.Item>Blog</Dropdown.Item>
                </NavLink>

                <Dropdown.Divider />
                <Dropdown.Item onClick={handlesignout}>Sign Out</Dropdown.Item>
              </Dropdown>
              <Navbar.Toggle />
            </>
          ) : (
            <Link className="btn btn-primary" to={"/login"}>
              Login
            </Link>
          )}
        </div>
        <Navbar.Collapse className="z-50">
          <NavLink to={"/"}>
            {" "}
            <Navbar.Link>Home</Navbar.Link>
          </NavLink>

          {seller || admin ? (
            <>
              <NavLink to={"/dashboard/addproduct"}>
                <Navbar.Link>Add Product</Navbar.Link>
              </NavLink>
              <NavLink to={"/dashboard"}>
                <Navbar.Link>My Products</Navbar.Link>
              </NavLink>
            </>
          ) : (
            ""
          )}
          {seller || admin || user?.uid ? (
            <>
              {" "}
              <NavLink to={"/dashboard"}>
                <Navbar.Link>Dashboard</Navbar.Link>
              </NavLink>
              <NavLink to={"/dashboard/myorders"}>
                <Navbar.Link>My Orders</Navbar.Link>
              </NavLink>
            </>
          ) : (
            ""
          )}

          <NavLink to={"/blog"}>
            <Navbar.Link href="/navbars">Blog</Navbar.Link>
          </NavLink>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Navber;

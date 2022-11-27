import React, { useContext } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import { UserContext } from "../../../Contexts/AuthContexts";
import { useAdmin } from "../../../Hooks/useAdmin";
import useSeller from "../../../Hooks/useSeller";
import Navber from "../../../Shared/Navber/Navber";

const DashLayout = () => {
  const {user} = useContext(UserContext)
  const [admin,adminLoading] = useAdmin(user?.email)
  const [seller,sellerLoading] = useSeller(user?.email)
  return (
    <div className="max-w-screen-xl mx-auto">
      <Navber></Navber>

      <div>
        <div className="drawer drawer-mobile">
          <input id="dashboardDrawer" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content flex flex-col rounded-md">
            {/* <!-- Page content here --> */}
           
        <Outlet></Outlet>

          </div>
          <div className="drawer-side">
            <label htmlFor="dashboardDrawer" className="drawer-overlay"></label>
            <ul className="menu p-4 w-80 rounded-md text-base-content border border-stone-200 shadow-lg">
              {/* <!-- Sidebar content here --> */}
             
              {
                admin || seller ? <>
                <li>
               <Link to={'/dashboard'} >My Products</Link>
              </li>
              <li>
                <NavLink    to={'/dashboard/addproduct'}>Add Product</NavLink>
              </li></>:""
              }
              {
                admin ? <>
                <li>
                <NavLink to={'/dashboard/allsellers'}>All Sellers</NavLink>
              </li>
              <li>
                <NavLink to={'/dashboard/allbuyers'}>All buyers</NavLink>
              </li>
              <li>
                <NavLink to={'/dashboard/reported_items'}>Reported Items</NavLink>
              </li></>:""
              }
              {
                user?.uid ?  <li>
                <NavLink to={'/dashboard/myorders'}>My Orders</NavLink>
              </li>:""
              }
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashLayout;

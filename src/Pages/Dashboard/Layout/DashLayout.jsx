import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import Navber from "../../../Shared/Navber/Navber";

const DashLayout = () => {
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
            <ul className="menu p-4 w-80 rounded-md text-base-content bg-slate-600 ">
              {/* <!-- Sidebar content here --> */}
              <li>
                <NavLink to={'/dashboard/addproduct'}>Add Product</NavLink>
              </li>
              <li>
               <NavLink to={'/dashboard/my_products'}>My Products</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashLayout;

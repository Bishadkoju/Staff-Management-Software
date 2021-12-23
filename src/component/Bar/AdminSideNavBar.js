import React from "react";
import { NavLink } from "react-router-dom";

const AdminSideNavBar = () => {
  return (
    <div className="bg-white side-menu pr-3 pt-3">
      <NavLink to="/admin">
      <div
        className="
                mb-2
                active-side-nav
                pl-2
                py-1
                d-flex
                justify-content-start
                admin_nav
              "
      >
        <div className="div_flex_icon">
          <i className="fa fa-user" aria-hidden="true"></i>
        </div>
        <div>
          <span>Dashboard</span>
        </div>
      </div>
      </NavLink>

      <NavLink to="/admin/user">
        <div className="mb-2 pl-2 d-flex justify-content-start admin_nav">
          <div className="div_flex_icon">
            <i className="fa fa-user" aria-hidden="true"></i>
          </div>
          <div>
            <span>User</span>
          </div>
        </div>
      </NavLink>
      <NavLink to="/admin/earning">
        <div className="mb-2 pl-2 d-flex justify-content-start admin_nav">
          <div className="div_flex_icon">
            <i className="fa fa-usd" aria-hidden="true"></i>
          </div>
          <div>
            <span>Earning</span>
          </div>
        </div>
      </NavLink>
      <NavLink to="/admin/leave">
        <div className="mb-2 pl-2 d-flex justify-content-start admin_nav">
          <div className="div_flex_icon">
            <i className="fa fa-sign-out" aria-hidden="true"></i>
          </div>
          <div>
            <span>My Leave</span>
          </div>
        </div>
      </NavLink>

        <div className="mb-2 pl-2 d-flex justify-content-start admin_nav">
          <div className="div_flex_icon">
            <i className="fa fa-archive" aria-hidden="true"></i>
          </div>
          <div>
            <span>Stores</span>
          </div>
        </div>
    </div>
  );
};

export default AdminSideNavBar;

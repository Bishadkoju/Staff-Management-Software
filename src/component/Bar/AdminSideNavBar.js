import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useAuth } from "../../context/auth";

const AdminSideNavBar = () => {
  //assigning location variable
  const location = useLocation();
  const { roleBasedPermissions } = useAuth();
  const { isStoreManager, isGeneralManager } = roleBasedPermissions();

  //destructuring pathname from location
  const { pathname } = location;

  //Javascript split method to get the name of the path in array
  const splitLocation = pathname.split("/");

  const isActive = (keyWord, splitLocation) => {
    return splitLocation[2] === keyWord ||
      (splitLocation.length === 2 && keyWord === "")
      ? "active-side-nav"
      : "";
  };

  return (
    <div className="bg-white side-menu pr-3 pt-3">
      <NavLink exact to="/admin">
        <div
          className={`
                mb-2
                pl-2
                py-1
                d-flex
                justify-content-start
                admin_nav
                ${isActive("", splitLocation)}
              `}
        >
          <div className="div_flex_icon">
            <i className="fa fa-user" aria-hidden="true"></i>
          </div>
          <div>
            <span>Dashboard</span>
          </div>
        </div>
      </NavLink>

      {(isStoreManager || isGeneralManager) && (
        <NavLink exact to="/admin/attendance">
          <div
            className={`
                mb-2
                pl-2
                py-1
                d-flex
                justify-content-start
                admin_nav
                ${isActive("attendance", splitLocation)}
              `}
          >
            <div className="div_flex_icon">
              <i className="fa fa-user" aria-hidden="true"></i>
            </div>
            <div>
              <span>Attendance</span>
            </div>
          </div>
        </NavLink>
      )}

      <NavLink exact to="/admin/user">
        <div
          className={`mb-2 pl-2 py-1 d-flex justify-content-start admin_nav ${isActive(
            "user",
            splitLocation
          )}`}
        >
          <div className="div_flex_icon">
            <i className="fa fa-user" aria-hidden="true"></i>
          </div>
          <div>
            <span>User</span>
          </div>
        </div>
      </NavLink>
      <NavLink exact to="/admin/earning">
        <div
          className={`mb-2 pl-2 py-1 d-flex justify-content-start admin_nav ${isActive(
            "earning",
            splitLocation
          )}`}
        >
          <div className="div_flex_icon">
            <i className="fa fa-usd" aria-hidden="true"></i>
          </div>
          <div>
            <span>Earning</span>
          </div>
        </div>
      </NavLink>
      <NavLink exact to="/admin/leave">
        <div
          className={`mb-2 pl-2 py-1 d-flex justify-content-start admin_nav ${isActive(
            "leave",
            splitLocation
          )}`}
        >
          <div className="div_flex_icon">
            <i className="fa fa-sign-out" aria-hidden="true"></i>
          </div>
          <div>
            <span>My Leave</span>
          </div>
        </div>
      </NavLink>

      <NavLink exact to="/admin/feedback">
        <div
          className={`mb-2 pl-2 py-1 d-flex justify-content-start admin_nav ${isActive(
            "feedback",
            splitLocation
          )}`}
        >
          <div className="div_flex_icon">
            <i className="fa fa-sign-out" aria-hidden="true"></i>
          </div>
          <div>
            <span>Feedback</span>
          </div>
        </div>
      </NavLink>
    </div>
  );
};

export default AdminSideNavBar;

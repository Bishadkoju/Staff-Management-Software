import React from "react";
import { NavLink, useLocation } from "react-router-dom";

import UsersIcon from "../../assets/icons/users.svg";
import DollarSign from "../../assets/icons/dollarSign.svg";
import leave from "../../assets/icons/leave.svg";
import feedbackIcon from "../../assets/icons/feedbackSide.svg";
import DashboardIcon from "../../assets/icons/dashboardSide.svg";

const AdminSideNavBar = () => {
  //assigning location variable
  const location = useLocation();

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
            <img src={DashboardIcon} alt="user" className="icon mr-3" />
          </div>
          <div>
            <span>Dashboard</span>
          </div>
        </div>
      </NavLink>

      <NavLink exact to="/admin/user">
        <div
          className={`mb-2 pl-2 py-1 d-flex justify-content-start admin_nav ${isActive(
            "user",
            splitLocation
          )}`}
        >
          <div className="div_flex_icon">
            <img src={UsersIcon} alt="user" className="icon mr-3" />
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
            <img src={DollarSign} alt="user" className="icon mr-3" />
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
            <img src={leave} alt="user" className="icon mr-3" />
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
            <img src={feedbackIcon} alt="user" className="icon mr-3"  />
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

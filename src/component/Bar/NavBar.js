import React, { useState, useEffect } from "react";
import header from "../../assets/header.png";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import FeedbackModal from "../Dashboard/Modal/FeedbackModal";

import axiosInstance from "../../HelperFunction/Axios";

import profileIcon from "../../assets/icons/profileIcon.svg";
import groupIcon from "../../assets/icons/groupIcon.svg";
import feedbackIcon from "../../assets/icons/feedbackIcon.svg";
import logOutIcon from "../../assets/icons/logOut.svg";

import { useAuth } from "../../context/auth";

import {getBasicUserInfo} from "../../HelperFunction/GenericFunction";

function NavBar() {
  const navigate = useNavigate()
  const {logOut} = useAuth()
  const handleLogout = () => {
    logOut();
    navigate('/')
  };

  // Get the user name
  const [basicUserInfo, setBasicUserInfo] = useState({
    "name" : "",
    "email" : "",
    "shortName" : ""
  })

  useEffect(() => {
    getUserInfo();
  }, []);

  const getUserInfo = async () => {
    await axiosInstance
      .get("/user/self/view/")
      .then((res) => {
        setBasicUserInfo(getBasicUserInfo(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  //assigning location variable
  const location = useLocation();

  //destructuring pathname from location
  const { pathname } = location;

  //Javascript split method to get the name of the path in array
  const splitLocation = pathname.split("/");

  const isActive = (keyWord, splitLocation) => {
    return splitLocation[2] === keyWord ||
      (splitLocation.length === 2 && keyWord === "")
      ? "active_nav_dash"
      : "";
  };
  return (
    <div className="container-fluid text-white" id="nav">
      <div className="container">
        <div className="row d-flex justify-content-between pt-4">
          <div className="logo">
            <img src={header} className="logo_img" alt="Logo" />
          </div>
          <div className="link">
            <NavLink
              to="/dashboard"
              className={`px-3 font-weight-bold ${isActive("", splitLocation)}`}
            >
              Home
            </NavLink>
            <NavLink
              to="/dashboard/earning"
              className={`px-3 font-weight-bold ${isActive(
                "earning",
                splitLocation
              )}`}
            >
              Earning
            </NavLink>
            <NavLink
              to="/dashboard/leave"
              className={`px-3 font-weight-bold ${isActive(
                "leave",
                splitLocation
              )}`}
            >
              My Leave
            </NavLink>
          </div>
          <div className="user_info d-flex justify-content-md-between">
            <div>
              <i className="fa fa-bell-o pr-3" aria-hidden="true"></i>
            </div>
            <div className="profile_picture mr-2">{basicUserInfo.shortName}</div>
            <div>
              <div className="dropdown">
                <span
                  className="dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <span className="profile_name">{basicUserInfo.name ? basicUserInfo.name : ""}</span>
                </span>
                <div
                  className="dropdown-menu dropDownMenuLeft pt-0"
                  aria-labelledby="dropdownMenuButton"
                >
                  <div className="dropdown-item profile_desc_dropdown pt-3">
                    <div className="dropdown_item_desc d-flex justify-content-start">
                      <div className="mr-2 drop_profile_picture">
                        <div className="profile_picture mr-2">
                          <span className="firstLastLetter">{basicUserInfo.shortName}</span>
                        </div>
                      </div>
                      <div>
                        <p className="dropdown_menu">
                          <span className="heading_text text-white">{basicUserInfo.name}</span>
                          <br />
                          <span className="muted_text text-muted">
                            {basicUserInfo.email}
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>

                  <a className="dropdown-item" href="/dashboard/profile">
                    <div className="dropdown_item_desc d-flex justify-content-start mt-3">
                      <div className="icon mr-2">
                        <img
                          src={profileIcon}
                          alt="profile user"
                          className="icon"
                        />
                      </div>
                      <div>
                        <p className="dropdown_menu">
                          <span className="heading_text">My Profile</span>
                          <br />
                          <span className="muted_text text-muted">
                            Manage Your Account
                          </span>
                        </p>
                      </div>
                    </div>
                  </a>
                  <hr className="mt-0 mb-3" />

                  <a className="dropdown-item" href="/dashboard/handbook">
                    <div className="dropdown_item_desc d-flex justify-content-start">
                      <div className="icon mr-2">
                        <img
                          src={groupIcon}
                          alt="profile user"
                          className="icon"
                        />
                      </div>
                      <div>
                        <p className="dropdown_menu">
                          <span className="heading_text">Handbook</span>
                          <br />
                          <span className="muted_text text-muted">
                            Company Information & guideline
                          </span>
                        </p>
                      </div>
                    </div>
                  </a>
                  <hr className="mt-0 mb-3" />
                  <a
                    className="dropdown-item"
                    href="#feedbackModal"
                    data-toggle="modal"
                    data-target="#feedbackModal"
                  >
                    <div className="dropdown_item_desc d-flex justify-content-start">
                      <div className="icon mr-2">
                        <img
                          src={feedbackIcon}
                          alt="profile user"
                          className="icon"
                        />
                      </div>
                      <div>
                        <p className="dropdown_menu">
                          <span className="heading_text">Feedback</span>
                          <br />
                          <span className="muted_text text-muted">
                            Any Suggestion for the company
                          </span>
                        </p>
                      </div>
                    </div>
                  </a>
                  <hr className="mt-0 mb-3" />
                  <div className="dropdown-item" onClick={handleLogout}>
                    <div className="dropdown_item_desc d-flex justify-content-start">
                      <div className="icon mr-2">
                        <img src={logOutIcon} alt="profile user" className="icon" />
                      </div>
                      <div>
                        <p className="dropdown_menu">
                          <span
                            className="heading_text text-danger"
                          >
                            Log Out
                          </span>
                          <br />
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FeedbackModal />
    </div>
  );
}

export default NavBar;

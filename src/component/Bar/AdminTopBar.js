import React, { useState, useEffect } from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";

import header from "../../assets/header.png";
import FeedbackModal from "../Dashboard/Modal/FeedbackModal";

import axiosInstance from "../../HelperFunction/Axios";
import { useAuth } from "../../context/auth";

import profileIcon from "../../assets/icons/profileIcon.svg";
import groupIcon from "../../assets/icons/groupIcon.svg";
import feedbackIcon from "../../assets/icons/feedbackIcon.svg";
import logOut from "../../assets/icons/logOut.svg";

import {getBasicUserInfo} from "../../HelperFunction/GenericFunction";


const AdminNavBar = () => {
  const {logOut: logout} = useAuth()
  const navigate = useNavigate()
  const handleLogout = () => {
    logout();
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

  return (
    <div className="container-fluid text-white" id="nav">
      <div className="container">
        <div className="row d-flex justify-content-between pt-4">
          <div className="logo">
            <img src={header} className="logo_img" alt="Logo" />
          </div>

          <div className="user_info d-flex justify-content-md-between">
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
                          <span className="heading_text text-white">
                            {basicUserInfo.name ? basicUserInfo.name : ""}
                          </span>
                          <br />
                          <span className="muted_text text-muted">
                            {basicUserInfo.email ? basicUserInfo.email : ""}
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>

                  <a className="dropdown-item" href="/admin/profile">
                    <div className="dropdown_item_desc d-flex justify-content-start">
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

                  <a className="dropdown-item" href="/admin/handbook">
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

                  <a className="dropdown-item cursor_pointer" onClick={handleLogout}>
                  <hr className="mt-0 mb-3" />
                    <div className="dropdown_item_desc d-flex justify-content-start">
                      <div className="icon mr-2">
                        <img src={logOut} alt="profile user" className="icon" />
                      </div>
                      <div>
                        <p className="dropdown_menu">
                          <span className="heading_text text-danger">
                            Log out
                          </span>
                          <br />
                        </p>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FeedbackModal />
    </div>
  );
};

export default AdminNavBar;

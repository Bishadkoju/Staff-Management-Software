import React from "react";
import header from "../../assets/header.png";
import { NavLink, useNavigate, Link } from "react-router-dom";
import FeedbackModal from "../Dashboard/Modal/FeedbackModal";
import { logout } from "../../HelperFunction/loginHelper";

function NavBar() {
  const navigagte = useNavigate();
  const handleLogout = () => {
    console.log("logout");
    logout();
    navigagte("/");
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
              className="mr-4 font-weight-bold"
              exact
            >
              Home
            </NavLink>
            <NavLink
              to="/dashboard/earning"
              className="mr-4 font-weight-bold"
              exact
            >
              Earning
            </NavLink>
            <NavLink
              to="/dashboard/leave"
              className="mr-4 font-weight-bold"
              exact
            >
              My Leave
            </NavLink>
          </div>
          <div className="user_info d-flex justify-content-md-between">
            <div>
              <i className="fa fa-bell-o pr-3" aria-hidden="true"></i>
            </div>
            <div className="profile_picture mr-2">EH</div>
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
                  <span className="profile_name">Esther Howard</span>
                </span>
                <div
                  className="dropdown-menu dropDownMenuLeft"
                  aria-labelledby="dropdownMenuButton"
                >
                  <a className="dropdown-item" href="/dashboard/profile">
                    <div className="dropdown_item_desc d-flex justify-content-start">
                      <div className="icon pr-2">
                        <i className="fa fa-user" aria-hidden="true"></i>
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

                  <a className="dropdown-item" href="/handbook">
                    <div className="dropdown_item_desc d-flex justify-content-start">
                      <div className="icon pr-2">
                        <i className="fa fa-user" aria-hidden="true"></i>
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

                  <a
                    className="dropdown-item"
                    href="#feedbackModal"
                    data-toggle="modal"
                    data-target="#feedbackModal"
                  >
                    <div className="dropdown_item_desc d-flex justify-content-start">
                      <div className="icon pr-2">
                        <i className="fa fa-user" aria-hidden="true"></i>
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

                  <a className="dropdown-item" href="/#">
                    <div className="dropdown_item_desc d-flex justify-content-start">
                      <div className="icon pr-2">
                        <i className="fa fa-sign-out" aria-hidden="true"></i>
                      </div>
                      <div>
                        <p className="dropdown_menu">
                          <span
                            className="heading_text text-danger"
                            onClick={handleLogout}
                          >
                            Log Out
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
}

export default NavBar;

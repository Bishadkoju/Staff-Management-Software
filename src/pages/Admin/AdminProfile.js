import React from "react";
import AdminLayout from "../../HOC/AdminLayout";
import AdminSideNavBar from "../../component/Bar/AdminSideNavBar";

import ProfileInfo from "../../component/Dashboard/Profile/ProfileInfo";
import ProfileModal from "../../component/Dashboard/Modal/ProfileModal";

const AdminProfile = () => {
  return (
    <div className="body">
      <AdminLayout />
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-2">
            <AdminSideNavBar />
          </div>
          <div className="col-md-10">
            <div className="row mb-3">
              <div className="col-md-12 d-flex justify-content-between pt-3">
                <div>
                  <span>Users &#62; </span>
                  <span className="font-weight-bold f_24">Joe Halen</span>
                </div>
                <div>
                  <button
                    className="btn btn_primary"
                    data-toggle="modal"
                    data-target="#editProfileModal"
                  >
                    <i className="fa fa-pencil-square-o" aria-hidden="true"></i>
                    Edit Profile
                  </button>
                </div>
              </div>
            </div>
            <ProfileInfo />
            <ProfileModal />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminProfile;

import React from "react";
import AdminLayout from "../../HOC/AdminLayout";
import AdminSideNavBar from "../../component/Bar/AdminSideNavBar";

import ProfileInfo from "../../component/Dashboard/Profile/ProfileInfo";
import ProfileModal from "../../component/Dashboard/Modal/ProfileModal";
import CheckLeaveEarningTable from "../../component/Admin/AdminProfile/CheckLeaveEarningTable";

const AdminProfile = () => {
  return (
    <div class="body">
      <AdminLayout />
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-2">
            <AdminSideNavBar />
          </div>
          <div class="col-md-10">
            <div className="row mb-3">
              <div class="col-md-12 d-flex justify-content-between pt-3">
                <div>
                  <span>Users &#62; </span>
                  <span class="font-weight-bold f_24">Joe Halen</span>
                </div>
                <div>
                  <button
                    class="btn btn_primary"
                    data-toggle="modal"
                    data-target="#editProfileModal"
                  >
                    <i class="fa fa-pencil-square-o" aria-hidden="true"></i>
                    Edit Profile
                  </button>
                </div>
              </div>
            </div>
            <ProfileInfo />
            <ProfileModal />
            <div>
                <CheckLeaveEarningTable />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminProfile;

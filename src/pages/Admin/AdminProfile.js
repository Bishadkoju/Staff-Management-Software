import React, { useState, useEffect } from "react";
import AdminLayout from "../../HOC/AdminLayout";
import AdminSideNavBar from "../../component/Bar/AdminSideNavBar";

import ProfileInfo from "../../component/Dashboard/Profile/ProfileInfo";
import ProfileModal from "../../component/Dashboard/Modal/ProfileModal";

import axiosInstance from "../../HelperFunction/Axios";

const AdminProfile = () => {
  const [adminInfo, setAdminInfo] = useState([]);
  const [name, setName] = useState("");

  useEffect(() => {
    const getAdminInfo = async () => {
      await axiosInstance
        .get(`/user/self/view`)
        .then((res) => {
          console.log("From admin")
          console.log(res.data);
          setName(res.data.first_name + " " + res.data.last_name);
          setAdminInfo([
            res.data.email,
            res.data.address,
            res.data.phone_number,
            res.data.emergency_contact.full_name,
            res.data.father_name,
            res.data.mother_name,
            res.data.marital_status,
            res.data.educational_status,
            res.data.store,
            res.data.joined_date,
            res.data.termination_date,
          ]);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getAdminInfo();
  }, []);

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
            <ProfileInfo userInfo =  {adminInfo} name = {name}/>
            <ProfileModal />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminProfile;

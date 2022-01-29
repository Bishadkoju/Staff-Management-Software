import React, { useState, useEffect } from "react";
import { useNavigate, useParams} from "react-router-dom";
import AdminLayout from "../../HOC/AdminLayout";
import AdminSideNavBar from "../../component/Bar/AdminSideNavBar";
import { useAuth } from "../../context/auth";

import ProfileInfo from "../../component/Dashboard/Profile/ProfileInfo";
import CheckLeaveEarningTable from "../../component/Admin/AdminUser/CLE/CheckLeaveEarningTable"

import axiosInstance from "../../HelperFunction/Axios";

const AdminProfile = () => {
  // Get ID from URL
  const params = useParams();
  const id = params.id;
  const navigate = useNavigate();

  const { roleBasedPermissions } = useAuth();
  const { isGeneralManagerOrHigher } = roleBasedPermissions();

  const [name, setName] = useState("");
  const [requiredUserInfo, setRequiredUserInfo] = useState([]);

  useEffect(() => {
    getUserInfo();
  }, []);

  const getUserInfo = async () => {
    await axiosInstance
      .get(`/user/${id}/view/`)
      .then((res) => {
        setName(res.data.first_name + " " + res.data.last_name);
        setRequiredUserInfo([
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
        //console.log(err);
      });
  };

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
                  <span className="font-weight-bold f_24">{name ? name : ""}</span>
                </div>
                {isGeneralManagerOrHigher &&
                  <div>
                    <button
                      className="btn btn_primary"
                      onClick={()=>{navigate(`/edit/${id}/`)}}
                    >
                      <i className="fa fa-pencil-square-o" aria-hidden="true"></i>
                      Edit Profile
                    </button>
                  </div>}
              </div>
            </div>
            <ProfileInfo userInfo = {requiredUserInfo} name = {name}/>
            <div>
              <CheckLeaveEarningTable id = {id}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminProfile;

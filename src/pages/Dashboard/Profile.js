import React, {useState, useEffect} from "react";
import Layout from "../../HOC/Layout";
import ProfileInfo from "../../component/Dashboard/Profile/ProfileInfo";
import ProfileModal from "../../component/Dashboard/Modal/ProfileModal";

import axiosInstance from "../../HelperFunction/Axios";

const Profile = () => {
  const [userInfo, setUserInfo] = useState([]);
  const [requiredUserInfo, setRequiredUserInfo] = useState([]);

  useEffect(() => {
    getUserInfo();
  }, []);

  const getUserInfo = async () => {
    await axiosInstance
      .get("/user/self/view/")
      .then((res) => {
        setUserInfo(res.data);
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
      <Layout></Layout>
      {/* beginning of Profile Heading  */}
      <div className="container">
        <div className="row">
          <div className="col-md-12 d-flex justify-content-between pt-3">
            <div>
              <h2>My Profile</h2>
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
      </div>
      {/* end of Profile Heading  */}
      <div className="container">
        <ProfileInfo userInfo =  {requiredUserInfo}/>
        <ProfileModal userInfo = {userInfo}/>
      </div>
    </div>
  );
};

export default Profile;

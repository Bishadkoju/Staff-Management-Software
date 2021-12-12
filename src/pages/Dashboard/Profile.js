import React from "react";
import Layout from "../../HOC/Layout";
import ProfileInfo from "../../component/Dashboard/Profile/ProfileInfo";
import ProfileModal from "../../component/Dashboard/Modal/ProfileModal";

const Profile = () => {
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
        <ProfileInfo />
        <ProfileModal />
      </div>
    </div>
  );
};

export default Profile;

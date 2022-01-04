import React from "react";
import ProfileImage from "../../../assets/profile.jpeg";
import CoverImage from "../../../assets/cover.png";
import ProfileDetailInfo from "./ProfileDetailInfo";
import EarningLeaveInfo from "./EarningLeaveInfo";
import PiggyImage from "../../../assets/piggy.jpeg";

const ProfileInfo = (props) => {
  const coverPhotoStyle = {
    minHeight: "150px",
    backgroundImage: `url(${CoverImage})`,
    position: "relative",
  };

  const requiredUserInfo = props.userInfo;
  const username = props.name;

  const profileDetailInfoArr = [
    "Email",
    "Location",
    "Phone",
    "Emergency Contact",
    "Father's Name",
    "Mother's Name",
    "Marital Status",
    "Educational Status",
    "Current Store",
    "Starting Date",
    "Termination Date",
  ];

  const displayProfileDetailInfo = () => {
    let display = [];
    for (let i = 0; i < 3; i++) {
      display.push(
        <div className="col-md-4 px-5">
          {profileDetailInfoArr[i * 4] ? (
            <ProfileDetailInfo
              key={i * 4}
              name={profileDetailInfoArr[i * 4]}
              value={requiredUserInfo[i * 4]}
            />
          ) : null}
          {profileDetailInfoArr[i * 4 + 1] ? (
            <ProfileDetailInfo
              key={i * 4 + 1}
              name={profileDetailInfoArr[i * 4 + 1]}
              value={requiredUserInfo[i * 4 + 1]}
            />
          ) : null}
          {profileDetailInfoArr[i * 4 + 2] ? (
            <ProfileDetailInfo
              key={i * 4 + 2}
              name={profileDetailInfoArr[i * 4 + 2]}
              value={requiredUserInfo[i * 4 + 2]}
            />
          ) : null}
          {profileDetailInfoArr[i * 4 + 3] ? (
            <ProfileDetailInfo
              key={i * 4 + 3}
              name={profileDetailInfoArr[i * 4 + 3]}
              value={requiredUserInfo[i * 4 + 3]}
            />
          ) : null}
        </div>
      );
    }

    return display;
  };

  const displayEarningLeaveInfo = () => {
    const title = ["Earnings", "Leave", "Net", "Task"];
    const value = ["Rs. 249, 500", "03/15", "$84, 060", "75"]

    let display = [];
    for (let i = 0; i < 4; i++) {
      display.push(
        <EarningLeaveInfo img={PiggyImage} title={title[i]} value={value[i]} />
      );
    }
    return display;
  };

  return (
    <div className="row">
      <div className="col-md-12">
        <div className="profile_div bg-white rounded">
          <div className="cover_photo" style={coverPhotoStyle}></div>
          <div className="profile_picture_div">
            <img
              className="profile_img rounded-circle"
              src={ProfileImage}
              alt="Profile"
            />
            <h3 className="user_name pl-3">{username ? username : ""}</h3>
            <div className="row">
              <div className="offset-md-2"></div>
              <div className="col-md-2 font_14 pl-5">
                <span className="text-muted">{requiredUserInfo ? requiredUserInfo[0] : ""}</span>
                <br />
                <span className="font-weight-bold">Employee</span>
                <span> #2356</span>
              </div>
              <div className="col-md-8">
                <div className="d-flex justify-content-end">
                  {displayEarningLeaveInfo()}
                </div>
                <hr />
              </div>
            </div>
          </div>

          <div className="row profile_info pb-5">
            {requiredUserInfo ? displayProfileDetailInfo() : ""}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;

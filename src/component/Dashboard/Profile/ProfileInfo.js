import React, { useState, useEffect } from "react";
import ProfileImage from "../../../assets/profile.jpeg";
import CoverImage from "../../../assets/cover.png";
import ProfileDetailInfo from "./ProfileDetailInfo";
import EarningLeaveInfo from "./EarningLeaveInfo";
import PiggyImage from "../../../assets/piggy.jpeg";

import axiosInstance from "../../../HelperFunction/Axios";

const ProfileInfo = () => {
  const coverPhotoStyle = {
    minHeight: "150px",
    backgroundImage: `url(${CoverImage})`,
    position: "relative",
  };

  const [userInfo, setUserInfo] = useState([]);

  useEffect(() => {
    getUserInfo();
  }, []);

  const getUserInfo = async () => {
    await axiosInstance.get("/employee/")
    .then(res => {
      console.log(res.data);
      setUserInfo(res.data);
    })
    .catch(err => {
      console.log(err);
    })
  };

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
        <div class="col-md-4 px-5">
          {profileDetailInfoArr[i * 4] ? (
            <ProfileDetailInfo
              name={profileDetailInfoArr[i * 4]}
              value="matt@mail.com"
            />
          ) : null}
          {profileDetailInfoArr[i * 4 + 1] ? (
            <ProfileDetailInfo
              name={profileDetailInfoArr[i * 4 + 1]}
              value="Melbourne"
            />
          ) : null}
          {profileDetailInfoArr[i * 4 + 2] ? (
            <ProfileDetailInfo
              name={profileDetailInfoArr[i * 4 + 2]}
              value="44(76)34251231"
            />
          ) : null}
          {profileDetailInfoArr[i * 4 + 3] ? (
            <ProfileDetailInfo
              name={profileDetailInfoArr[i * 4 + 3]}
              value="44(76)34251231"
            />
          ) : null}
        </div>
      );
    }

    return display;
  };

  const displayEarningLeaveInfo = () => {
    let display = [];
    for (let i = 0; i < 4; i++) {
      display.push(
        <EarningLeaveInfo img={PiggyImage} title="Earning" value="235, 457" />
      );
    }
    return display;
  };

  return (
      <div class="row">
        <div class="col-md-12">
          <div class="profile_div bg-white">
            <div class="cover_photo" style={coverPhotoStyle}></div>
            <div class="profile_picture_div">
              <img
                class="profile_img rounded-circle"
                src={ProfileImage}
                alt="Profile Image"
              />
              <h3 class="user_name">Esther Howard</h3>
              <div class="row">
                <div class="offset-md-2"></div>
                <div class="col-md-2 font_14 pl-5">
                  <span className="text-muted">matt@mail.com</span>
                  <br />
                  <span class="font-weight-bold">Employee</span>
                  <span> #2356</span>
                </div>
                <div class="col-md-8">
                  <div class="d-flex justify-content-end">
                    {displayEarningLeaveInfo()}
                  </div>
                  <hr />
                </div>
              </div>
            </div>

            <div class="row profile_info">{displayProfileDetailInfo()}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;

import React from "react";

const ProfileDetailInfo = (props) => {
  return (
    <div className="d-flex justify-content-between font_14">
      <div>
        <span className="profile_info_name font-weight-bold">{props.name}: </span>
      </div>
      <div>
        <span className="text-muted">{props.value}</span>
      </div>
    </div>
  );
};

export default ProfileDetailInfo;

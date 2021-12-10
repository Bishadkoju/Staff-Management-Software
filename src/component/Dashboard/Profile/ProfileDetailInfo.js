import React from "react";

const ProfileDetailInfo = (props) => {
  return (
    <div class="d-flex justify-content-between font_14">
      <div>
        <span class="profile_info_name font-weight-bold">{props.name}: </span>
      </div>
      <div>
        <span class="text-muted">{props.value}</span>
      </div>
    </div>
  );
};

export default ProfileDetailInfo;

import React from "react";

const EarningLeaveInfo = (props) => {
  const imgStyle = {
    width : props.size
  };

  return (
    <div className="profile_summary d-flex justify-content-around">
      <div>
        <img src={props.img} alt="Image" style={imgStyle} />
      </div>
      <div>
        <span>{props.title}</span>
        <br />
        <span>{props.value}</span>
      </div>
    </div>
  );
};

export default EarningLeaveInfo;

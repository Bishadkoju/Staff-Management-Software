import React from "react";

const EarningLeaveInfo = (props) => {
  const imgStyle = {
    width : "100%"
  };

  return (
    <div className="profile_summary d-flex justify-content-around">
      <div className="mr-3">
        <img src={props.img} alt="Earning leave" style={imgStyle} />
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

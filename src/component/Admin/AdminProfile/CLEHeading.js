import React from "react";

const CLEHeading = (props) => {

  const displayHeading = () => {
    let result = [];
    result.push(
      <div className="d-flex justify-content-start">
        <div className="pr-3">
          <span
            className={
              props.select === 0 ? "nav_cle_head_active" : "nav_cle_head"
            }
          >
            Check In/Out
          </span>
        </div>
        <div className="pr-3">
          <span
            className={
              props.select === 1 ? "nav_cle_head_active" : "nav_cle_head"
            }
          >
            Leave
          </span>
        </div>
        <div className="pr-3">
          <span
            className={
              props.select === 2 ? "nav_cle_head_active" : "nav_cle_head"
            }
          >
            Earning
          </span>
        </div>
      </div>
    );
    return result;
  };
  return <div>{displayHeading()}</div>;
};

export default CLEHeading;

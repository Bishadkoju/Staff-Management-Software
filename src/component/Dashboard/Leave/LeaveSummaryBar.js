import React from "react";
import PiggyImg from "../../../assets/piggy.png";
import NoBoxInfoBar from "../General/NoBoxInfoBar";

const LeaveSummaryBar = () => {
  const imgStyle = {
    width: "30%",
  };
  
  return (
    <div className="d-flex justify-content-start muted_text">
      <div class="media" style={{ maxWidth: "200px" }}>
        <img class="mr-2" src={PiggyImg} alt="Piggy Image" style={imgStyle} />
        <div>
          <span className="muted_text text-muted">TOTAL LEAVE</span>
          <br />
          <h4>03/15</h4>
        </div>
      </div>

      <div className="pr-4">
        <NoBoxInfoBar title="LEAVE LEFT" value="0" />
      </div>
      <div className="pr-4">
        <NoBoxInfoBar title="PAID LEAVE" value="0" />
      </div>
      <div className="pr-4">
        <NoBoxInfoBar title="UNPAID LEAVE" value="0" />
      </div>
      <div className="pr-4">
        <NoBoxInfoBar title="EARNING DEDUCT LEAVE" value="0" />
      </div>
    </div>
  );
};

export default LeaveSummaryBar;

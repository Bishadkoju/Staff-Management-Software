import React from "react";
import PiggyImg from "../../../assets/icons/pig.svg";
import NoBoxInfoBar from "../General/NoBoxInfoBar";

const LeaveSummaryBar = (props) => {
  const imgStyle = {
    width: "30%",
  };

  const leaveHistory = props.history;

  return (
    <React.Fragment>
      {leaveHistory && (
        <div className="d-flex justify-content-start muted_text">
          <div  style={{ minWidth: "200px" }}>
            <div className="media" style={{ maxWidth: "400px" }}>
              <img
                className="mr-2"
                src={PiggyImg}
                alt="Piggy"
                style={imgStyle}
              />
              <div>
                <span className="muted_text text-muted">TOTAL LEAVE</span>
                <br />
                <h4>03/15</h4>
              </div>
            </div>
          </div>

          <div className="pr-4">
            <NoBoxInfoBar
              title="LEAVE LEFT"
              value={leaveHistory.leaves_taken}
            />
          </div>
          <div className="pr-4">
            <NoBoxInfoBar title="PAID LEAVE" value={leaveHistory.paid_leaves} />
          </div>
          <div className="pr-4">
            <NoBoxInfoBar
              title="UNPAID LEAVE"
              value={leaveHistory.unpaid_leaves}
            />
          </div>
          <div className="pr-4">
            <NoBoxInfoBar
              title="EARNING DEDUCT LEAVE"
              value={leaveHistory.leaves_taken}
            />
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default LeaveSummaryBar;

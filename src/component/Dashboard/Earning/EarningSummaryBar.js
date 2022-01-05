import React from "react";
import PiggyImg from "../../../assets/icons/pig.svg";
import NoBoxInfoBar from "../General/NoBoxInfoBar";

const EarningSummaryBar = () => {
  const imgStyle = {
    width: "30%",
  };
  
  return (
    <div className="d-flex justify-content-start muted_text">
      <div className="media mr-5" style={{ maxWidth: "200px" }}>
        <img className="mr-2" src={PiggyImg} alt="Piggy" style={imgStyle} />
        <div>
          <span className="muted_text text-muted">TOTAL EARNING</span>
          <br />
          <h4>$249, 500</h4>
        </div>
      </div>

      <div className="pr-4">
        <NoBoxInfoBar title="FROM SALARY" value="$495, 650" />
      </div>
      <div className="pr-4">
        <NoBoxInfoBar title="FROM SALARY" value="$495, 650" />
      </div>
      <div className="pr-4">
        <NoBoxInfoBar title="FROM SALARY" value="$495, 650" />
      </div>
      <div className="pr-4">
        <NoBoxInfoBar title="FROM SALARY" value="$495, 650" />
      </div>
    </div>
  );
};

export default EarningSummaryBar;

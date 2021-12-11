import React from "react";
import PiggyImg from "../../../assets/piggy.png";
import NoBoxInfoBar from "../General/NoBoxInfoBar";

const EarningSummaryBar = () => {
  const imgStyle = {
    width: "30%",
  };
  
  return (
    <div className="d-flex justify-content-start muted_text">
      <div class="media" style={{ maxWidth: "200px" }}>
        <img class="mr-2" src={PiggyImg} alt="Piggy Image" style={imgStyle} />
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

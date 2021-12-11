import React from "react";
import Graph from "../../assets/graph.png";

const EarningGraph = () => {
  return (
    <div className="row div_format mt-4">
      <div className="col-md-12">
        <span className="heading_text">Earning of this month</span>
        <br />
        <span className="text-muted">December</span>
      </div>
      <div className="col-md-12">
        <img src={Graph} alt="Earning Graph" className="img-fluid" />
      </div>
    </div>
  );
};

export default EarningGraph;

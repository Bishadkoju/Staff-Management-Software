import React from "react";

function InfoBar() {
  return (
    <div className="d-flex justify-content-between div_format shadow_div">
      <div className="detail_summary">
        <span className="text-muted muted_text">ACTIVE</span>
        <br />
        <span className="heading_text">2048 Hours</span>
      </div>
      <div className="graph_summary">
        <img src="assets/graph.png" alt="Graph" width="90" />
      </div>
    </div>
  );
}

export default InfoBar;

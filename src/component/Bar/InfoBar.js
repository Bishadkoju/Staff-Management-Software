import React from "react";

const InfoBar = (props) => {
  return (
    <div className="d-flex justify-content-between div_format shadow_div">
      <div className="detail_summary">
        <span className="text-muted muted_text">{props.title ? props.title : ""}</span>
        <br />
        <span className="heading_text">{props.value ? props.value : ""}</span>
      </div>
      <div className="graph_summary">
        {/* <img src="assets/graph.png" alt="Graph" width="90" /> */}
      </div>
    </div>
  );
}

export default InfoBar;

import React from "react";

function Earning_bar(props) {
  return (
    <div className="div_format earning_desc">
      <div className="detail_summary">
        <span className="text-muted muted_text">{props.title}</span>
        <br />
        <span className="heading_text">{props.value}</span>
      </div>
    </div>
  );
}

export default Earning_bar;

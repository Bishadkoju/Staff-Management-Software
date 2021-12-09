import React from "react";
import Notice_post from "./Notice_post";

function Notice() {
  return (
    <div className="div_format pt-3">
      <div className="heading_notice d-flex justify-content-between">
        <div>
          <span className="heading_text">Notice</span>
          <br />
          <span className="text-muted muted_text medium_font">Today</span>
        </div>
        <div className="primary_color">
          <span>View All</span>
          <i className="fa fa-angle-right" aria-hidden="true"></i>
        </div>
      </div>
      <Notice_post />
    </div>
  );
}

export default Notice;

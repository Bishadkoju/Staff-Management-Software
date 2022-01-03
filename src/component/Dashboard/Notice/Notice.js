import React from "react";
import NoticePost from "./NoticePost";

function Notice() {
  return (
    <div className="div_format pt-3">
      <div className="heading_notice d-flex justify-content-between">
        <div>
          <span className="heading_text">Notification</span>
          <br />
          <span className="text-muted muted_text medium_font">Today</span>
        </div>
        <div className="primary_color">
          <span className="pr-2">View All</span>
          <i className="fa fa-angle-right" aria-hidden="true"></i>
        </div>
      </div>
      <NoticePost />
    </div>
  );
}

export default Notice;

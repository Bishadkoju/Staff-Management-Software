import React from "react";
import Profile from '../../../assets/profile.jpeg'

function Notice_post() {
  return (
    <div id="notice_newsfeed">
      <div className="newsfeed">
        <div className="heading_newsfeed d-flex justify-content-start">
          <div className="profile_picture pr-2">
            <img
              src={Profile}
              className = "profile_image"
              alt="pic"
              className="rounded-circle"
            />
          </div>
          <div className="profile_desc">
            <span className="heading_text pr-2">Anna Strong</span>
            <br />
            <span className="text-muted muted_text medium_font">
              2 mins ago
            </span>
          </div>
          <div>
            <i
              className="fa fa-circle small_font online_color"
              aria-hidden="true"
            ></i>
            <span> Admin </span>
          </div>
        </div>
        <div className="notice_desc">
          <p className="text-justify">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            <a href="#" className="primary_color">
              See more
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Notice_post;

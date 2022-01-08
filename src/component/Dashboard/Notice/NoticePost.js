import React from "react";
import Profile from "../../../assets/profile.jpeg";

const Notice_post = (props) => {
  const notifications = props.notifications;
  console.log(notifications);

  const displayNotifications = () => {
    let result = [];
    if (notifications) {
      notifications.map((notification) => {
        result.push(
          <div id="notice_newsfeed" key={notification.id}>
            <div className="newsfeed">
              <div className="heading_newsfeed d-flex justify-content-start">
                <div className="profile_picture pr-2">
                  <img
                    src={Profile}
                    className="profile_image"
                    alt="pic"
                    className="rounded-circle"
                  />
                </div>
                <div className="profile_desc">
                  <span className="heading_text pr-2">{notification.posted_by.first_name}</span>
                  <br />
                  <span className="text-muted muted_text medium_font">
                    {notification.datetime}
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
                  {notification.message.slice(0, 150)}.....
                  <a href="/#" className="primary_color">
                    See more
                  </a>
                </p>
              </div>
            </div>
          </div>
        );
      });
    }

    return result;
  };

  return <React.Fragment>{displayNotifications()}</React.Fragment>;
};

export default Notice_post;

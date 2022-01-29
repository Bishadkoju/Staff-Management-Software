import React from "react";

const NotificationPost = (props) => {
  const notification = props.notification;
  return (
    <>
      <hr />
      <div className="notificationPost">
        <span>{notification.message}</span><br /> 
        <span className="text-muted muted_text">{notification.datetime}</span>
      </div>
    </>
  );
};

export default NotificationPost;

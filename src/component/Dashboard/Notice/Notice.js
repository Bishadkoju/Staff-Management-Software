import React, { useState, useEffect } from "react";
import NoticePost from "./NoticePost";
import axiosInstance from "../../../HelperFunction/Axios";

const Notice = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const getNotifications = async () => {
      await axiosInstance
        .get(`/notification/list/`)
        .then((res) => {
          console.log(res);
          setNotifications(res.data.notifications);
        })
        .catch((err) => {
          console.log(err);
        });
    };

    getNotifications();
  }, []);

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
      <NoticePost notifications = {notifications}/>
    </div>
  );
};

export default Notice;

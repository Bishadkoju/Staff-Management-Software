import React, { useState, useEffect } from "react";
import NoticePost from "./NoticePost";
import axiosInstance from "../../../HelperFunction/Axios";

const Notice = () => {
  const [notices, setNotices] = useState([]);

  useEffect(() => {
    const getNotifications = async () => {
      await axiosInstance
        .get(`notice/all/`)
        .then((res) => {
          console.log("notice : ",res.data);
          setNotices(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };

    getNotifications();
  }, []);

  const displayNoticePost = ()  => {
    let result = [];
    if(notices){
      notices.map(notice => {
        result.push(
          <NoticePost notice = {notice} key={notice.id} />
        )
      })
    }
    else{
      result.push("No Recent Notices")
    }
    return result;
  }

  return (
    <div className="div_format pt-3 scroll_div">
      <div className="heading_notice d-flex justify-content-between">
        <div>
          <span className="heading_text">Notice</span>
          <br />
        </div>
      </div>
      <hr />
      {displayNoticePost()}
    </div>
  );
};

export default Notice;

import React, { useState, useEffect } from "react";
import NotificationPost from "./NotificationPost";
import axiosInstance from "../../../HelperFunction/Axios";

const ViewNotificationModal = () => {
  // 0 -> All Notifications
  // 1 -> Unread Notifications
  const [active, setActive] = useState("0");

  const [notifications, setNotifications] = useState([]);
  const [filteredNotifications, setFilteredNotifications] = useState([]);

  useEffect(() => {
    const getNotifications = async () => {
      await axiosInstance
        .get(`/notification/list/`)
        .then((res) => {
          setNotifications(res.data.notifications);
          setFilteredNotifications(res.data.notifications);
        })
        .catch((err) => {
          window.alert("Error in notifications");
        });
    };

    getNotifications();
  }, []);

  const displayNotification = () => {
    let result = [];
    if (filteredNotifications) {
      if (filteredNotifications.length > 0) {
        filteredNotifications.map((notification) => {
          result.push(
            <NotificationPost
              notification={notification}
              key={notification.id}
            />
          );
        });
      }
    } else {
      result.push("No Recent Notifications");
    }
    return result;
  };

  const updateFilteredNotifications = (id) => {
    if(id === "0"){
      setFilteredNotifications(notifications);
    }
    else{
      setFilteredNotifications(notifications.filter((notification) => notification.read === false));
    }
  }

  const updateActive = (id) => {
    setActive(id);
    updateFilteredNotifications(id);
  } 

  const displaySelectionHead = () => {
    let result = [];
    result.push(
      <div className="read_unread_div">
        <button
          className={
            active === "0" ? "btn btn-primary mr-2" : "btn btn-secondary mr-2"
          }
          onClick={() => updateActive("0")}
        >
          All
        </button>
        <button
          className={active === "1" ? "btn btn-primary" : "btn btn-secondary"}
          onClick={() => updateActive("1")}
        >
          Unread
        </button>
      </div>
    );
    return result;
  };

  return (
    <div
      className="modal fade text-dark bd-example-modal-lg"
      id="viewNotificationModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="viewNotificationModal"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-lg" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              Notification
            </h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            {displaySelectionHead()}
            <div className="messages_division">{displayNotification()}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewNotificationModal;

import React, { useState, useEffect } from "react";
import axiosInstance from "../../../HelperFunction/Axios";
import {
  timeDisplayer,
  secondsToHms,
  getMonthDayFromFullYear
} from "../../../HelperFunction/GenericFunction";
import moment from 'moment'

const CheckIn = (props) => {
  const [hasCheckedIn, setCheckedIn] = useState(false);
  const [disableCheckIn, setDisableCheckIn] = useState(false);

  const [store, setStore] = useState(null);

  const [checkedInTime, setCheckedInTime] = useState("");
  const [checkedOutTime, setCheckedOutTime] = useState("");
  const [duration, setDuration] = useState("");

  // last attendence
  const lastAttendence = props.lastAttendence;

  useEffect(() => {
    getStore();
    getAttendance();
  }, []);

  const getStore = async () => {
    await axiosInstance
      .get("/user/self/view/")
      .then((res) => {
        setStore(res.data.store);
      })
      .catch((err) => {});
  };

  const getAttendance = async () => {
    await axiosInstance
      .get("/attendance/self/list/")
      .then((res) => {
        // Check Attendences
        // check if there is no attendence data
        if (res.data.count === 0) {
          // if there is no attendence data the Checked in is false
          setCheckedIn(false);
        }
        // if there is attendence data then check if we have checked in today
        else {
          // Get the today date
          const todayDate = moment().format("YYYY-MM-DD");
          // Get the latest checkIn data (Attendence data)
          const today_checked_data = res.data.results[0];

          // Compare if the latest checked in date and today date match??
          if (today_checked_data.date === todayDate) {
            // Set the checked in time
            setCheckedInTime(today_checked_data.checked_in_time);
            setCheckedIn(true);

            // Check if we have checked out today
            if (today_checked_data.checked_out_time != null) {
              setCheckedOutTime(today_checked_data.checked_out_time);
              setDisableCheckIn(true);
              // set the duration time if we have checked out
              setDuration(today_checked_data.duration);
            }
          }
        }
        // end of check attendence
      })
      .catch((err) => {});
  };

  const checkInStrings = {
    true: "Check Out",
    false: "Check In",
  };

  const checkIn = async () => {
    const data = {
      checked_in: true,
      store: store,
    };
    await axiosInstance
      .post("/attendance/self/check_in/", data)
      .then((res) => {
        setCheckedInTime(res.data.time);
        window.location.reload();
      })
      .catch((err) => {
        window.alert("Can't check in");
      });
  };

  const checkOut = async () => {
    const data = {
      checked_out: true,
    };
    const confirmCheckOut = window.confirm(
      "Are you sure you want to checkout?"
    );
    if (confirmCheckOut) {
      await axiosInstance
        .post("/attendance/self/check_out/", data)
        .then((res) => {
          setCheckedOutTime(res.data.time);
          setDisableCheckIn(true);
          window.location.reload();
        })
        .catch((err) => {
          window.alert("Error : Can't checkout");
        });
    }
  };

  const toggleCheckIn = () => {
    hasCheckedIn ? checkOut() : checkIn();
    setCheckedIn(!hasCheckedIn);
  };

  const displayDate = () => {
    let date, month, day;
    if(lastAttendence.date){
      date = lastAttendence.date;
      // console.log(date);
      month= date.slice(5, 7)
      // console.log(lastAttendence.date);
      day = date.slice(8, 10);
      return day;
    }
    return "";
  }

  return (
    <div className="div_format pt-3 pb-4">
      <span className="heading_text">Check In</span>
      <br />
      <span className="muted_text text-muted">
        Check In/Out to make an attendance
      </span>
      <hr />
      <div className="desc">
        <div className="row">
          <div className="col-md-3">
            <button
              className="btn btn-primary check_in_background btn-xl pl-1"
              disabled={disableCheckIn}
              onClick={toggleCheckIn}
            >
              {checkInStrings[hasCheckedIn]}
            </button>
          </div>
          <div className="col-md-9">
            <div className="medium_font">
              <span className="">{getMonthDayFromFullYear(lastAttendence.date)}</span>
              <br />
              <span className="text-muted muted_text pr-3">Check In :</span>
              <span className="time pr-4 ">{timeDisplayer(lastAttendence.checked_in_time)}</span>
              <span className="text-muted muted_text pr-3">Check Out :</span>
              <span className="time">{timeDisplayer(lastAttendence.checked_out_time)}</span>
            </div>
            <hr />
            <div className="medium_font primary_color pt-3">
              <h5>Today</h5>
              <div className="d-flex justify-content-between medium_font">
                <div>
                  <h6>Check In </h6>
                  {checkedInTime === "" ? (
                    <i className="fa fa-minus" aria-hidden="true"></i>
                  ) : (
                    timeDisplayer(checkedInTime)
                  )}
                </div>
                <div>
                  <h6>Check Out</h6>
                  {checkedOutTime === "" ? (
                    <i className="fa fa-minus" aria-hidden="true"></i>
                  ) : (
                    timeDisplayer(checkedOutTime)
                  )}
                </div>
                <div>
                  <h6>Total</h6>
                  {duration === "" ? (
                    <i className="fa fa-minus" aria-hidden="true"></i>
                  ) : (
                    secondsToHms(duration)
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckIn;

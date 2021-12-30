import React, { useState, useEffect } from "react";
import axiosInstance from "../../../HelperFunction/Axios";
import { timeDisplayer,secondsToHms } from "../../../HelperFunction/GenericFunction";


function CheckIn(props) {
  const [hasCheckedIn, setCheckedIn] = useState(false);
  const [disableCheckIn, setDisableCheckIn] = useState(false);

  const [store, setStore] = useState(null);
  const [attendances, setAttendances] = useState([]);

  const [checkedInTime, setCheckedInTime] = useState("");
  const [checkedOutTime, setCheckedOutTime] = useState("");
  const [duration, setDuration] = useState("");

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
      .catch((err) => {
        console.log(err);
      });
  };

  const getAttendance = async () => {
    await axiosInstance
      .get("/attendance/list/")
      .then((res) => {
        setAttendances(res.data);

        // Check Attendences
        // check if there is no attendence data
        if (res.data.count === 0) {
          console.log("no attendences");
          // if there is no attendence data the Checked in is false
          setCheckedIn(false);
        } 
        // if there is attendence data then check if we have checked in today
        else {
          // Get the today date
          const todayDate = new Date().toISOString().slice(0, 10);
          // Get the latest checkIn data (Attendence data)
          const today_checked_data = res.data.results[0];
          console.log(today_checked_data)

          // Compare if the latest checked in date and today date match??
          if (today_checked_data.date === todayDate) {
            console.log("Checked");
            // Set the checked in time
            setCheckedInTime(today_checked_data.checked_in_time);
            setCheckedIn(true);

            // Check if we have checked out today
            if(today_checked_data.checked_out_time != null){
              console.log("checked out")
              setCheckedOutTime(today_checked_data.checked_out_time);
              setDisableCheckIn(true);
              // set the duration time if we have checked out
              setDuration(today_checked_data.duration);
            }
          }
        }
        // end of check attendence
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const checkInStrings = {
    true: "Check Out",
    false: "Check In",
  };

  const checkIn = async () => {
    console.log("check in");
    const data = {
      checked_in: true,
      store: store,
    };
    await axiosInstance
      .post("/attendance/self/check_in/", data)
      .then((res) => {
        console.log(res.data);
        setCheckedInTime(res.data.time);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const checkOut = async () => {
    console.log("check out");
    const data = {
      checked_out: true,
    };
    await axiosInstance
      .post("/attendance/self/check_out/", data)
      .then((res) => {
        setCheckedOutTime(res.data.time);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const toggleCheckIn = () => {
    console.log("toggle");
    hasCheckedIn ? checkOut() : checkIn();
    setCheckedIn(!hasCheckedIn);
  };

  return (
    <div className="div_format pt-3">
      <span className="heading_text">Check In</span>
      <br />
      <span className="muted_text text-muted">
        Check In/Out to make an attendance
      </span>
      <div className="desc">
        <div className="row">
          <div className="col-md-3">
            <button
              className="btn btn-primary check_in_background btn-xl"
              disabled={disableCheckIn}
              onClick={toggleCheckIn}
            >
              {checkInStrings[hasCheckedIn]}
            </button>
          </div>
          <div className="col-md-9">
            <div className="medium_font">
              <span className="">29 Nov</span>
              <br />
              <span className="text-muted muted_text ">Check In :</span>
              <span className="time pr-4 ">10:45 AM</span>
              <span>Check Out :</span>
              <span className="time">03:45 PM</span>
            </div>
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

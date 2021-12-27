import React, { useState, useEffect } from "react";
import axiosInstance from "../../../HelperFunction/Axios";

function CheckIn(props) {
  const [hasCheckedIn, setCheckedIn] = useState(false);
  const [disableCheckIn, setDisableCheckIn] = useState(false);

  const [store, setStore] = useState(null);
  const [attendances, setAttendances] = useState([]);

  const [checkedInTime, setCheckedInTime] = useState("");
  const [checkedOutTime, setCheckedOutTime] = useState("");

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
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const checkCheckedIn = () => {
    if (attendances.length === 0) {
      console.log("no attendences");
      setCheckedIn(false);
    } else {
      const todayDate = new Date().toISOString().slice(0, 10);
      console.log(attendances);
      if (attendances[0].date === todayDate) {
        console.log("Checked");
        setCheckedInTime(attendances[0].checked_in_time);
        setCheckedOutTime(attendances[0].checked_out_time);
        setDisableCheckIn(true);
      }
    }
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
    try {
      const res = await axiosInstance.post("/attendance/self/check_out/", data);
      console.log(res);
      if (res.status === 200) {
        console.log("ok");
      }
    } catch (err) {
      console.log(err.data);
    }
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
                    checkedInTime
                  )}
                </div>
                <div>
                  <h6>Check Out</h6>
                  <i className="fa fa-minus" aria-hidden="true"></i>
                </div>
                <div>
                  <h6>Total</h6>
                  <h5>05 Hr</h5>
                  <h6>6mins</h6>
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

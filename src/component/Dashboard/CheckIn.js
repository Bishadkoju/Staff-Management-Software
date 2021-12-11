/* eslint-disable react-hooks/exhaustive-deps */
import React,{useState, useEffect} from "react";
import axiosInstance from "../../HelperFunction/Axios";

function CheckIn(props) {

  const [hasCheckedIn, setCheckedIn] = useState(false);
  const [disableCheckIn, setDisableCheckIn] = useState(false)

  const [store, setStore] = useState(null)
  const [attendances, setAttendances] = useState([])

  useEffect(()=> {
    getStore()
    getAttendance()
    checkCheckedIn()
  },[])

  const getStore = async() => {
    const res = await axiosInstance.get("employee/")
      if(res.status === 200) {
          setStore(res.data.employee.store)
      }
  }

  const getAttendance = async() => {
    const res = await axiosInstance.get("employee/self/attendances/")
      if(res.status === 200) {
          setAttendances(res.data)
      }
  }

  const checkCheckedIn =() => {
    console.clear()
    if (attendances.length === 0) {
      setCheckedIn(false);
      return
    }
    console.log(attendances)
    const todayDate = new Date().toISOString().slice(0, 10)
    if (attendances[0].date === todayDate) {
      setDisableCheckIn(true)
    }

  }

  const checkInStrings = {
    true: "Check Out",
    false: "Check In",
  };


  const checkIn = async() => {
    console.log("check in");
    const data = {
      "checked_in": true,
      "store": store
    }
    try {
      const res = await axiosInstance.post("employee/check_in/",data)
      console.log(res)
      if(res.status === 200) {
          console.log('ok')
      }
    } catch (err) {
      console.log(err);
    }
  };

  const checkOut = async () => {
    console.log("check out");
    const data = {
      "checked_out": true
    }
    try {
      const res = await axiosInstance.post("employee/check_out/",data)
      console.log(res)
      if(res.status === 200) {
          console.log('ok')
      }
    } catch (err) {
      console.log(err);
    }
  };

  const toggleCheckIn = () => {
    console.log("toggle");
    hasCheckedIn ? checkOut() : checkIn();
    setCheckedIn(!hasCheckedIn);
  };

  return (
    <div class="div_format pt-3">
      <span class="heading_text">Check In</span>
      <br />
      <span class="muted_text text-muted">
        Check In/Out to make an attendance
      </span>
      <div class="desc">
        <div class="row">
          <div class="col-md-3">
          <button class="btn btn-primary check_in_background btn-xl" disabled={disableCheckIn} onClick={toggleCheckIn}>{checkInStrings[hasCheckedIn]}</button>
          </div>
          <div class="col-md-9">
            <div class="medium_font">
              <span class="">29 Nov</span>
              <br />
              <span class="text-muted muted_text ">Check In :</span>
              <span class="time pr-4 ">10:45 AM</span>
              <span>Check Out :</span>
              <span class="time">03:45 PM</span>
            </div>
            <div class="medium_font primary_color pt-3">
              <h5>Today</h5>
              <div class="d-flex justify-content-between medium_font">
                <div>
                  <h6>Check In </h6>
                  <i class="fa fa-minus" aria-hidden="true"></i>
                </div>
                <div>
                  <h6>Check Out</h6>
                  <i class="fa fa-minus" aria-hidden="true"></i>
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

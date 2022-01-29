import React, {useState, useEffect} from "react";
import Layout from "../../HOC/Layout";
import InfoBar from "../../component/Bar/InfoBar";
import CheckIn from "../../component/Dashboard/Check/CheckIn";
import Notice from "../../component/Dashboard/Notice/Notice";
import CheckInHistory from "../../component/Dashboard/Check/CheckInHistory";

import axiosInstance from "../../HelperFunction/Axios";

import { calculateDuration, secondsToHms, getDaysFromDate } from "../../HelperFunction/GenericFunction"

const Dashboard = () => {
  const [attendances, setAttendances] = useState([]);
  const [lastAttendence, setLastAttendence] = useState({});
  
  const [appearance, setAppearance] = useState("0 ");
  const [active, setActive] = useState("0 mins");
  const [earning, setEarning] = useState("0 %");
  const [leave, setLeave] = useState("0 ");

  useEffect(() => {
    getAttendance();
    const currentDate = new Date();
    getMonthlyAttendenceHistory(currentDate);
    getMonthlyLeaveHistory(currentDate);
  }, []);

  const getAttendance = async () => {
    await axiosInstance
      .get("/attendance/self/list/")
      .then((res) => {
        setAttendances(res.data.results);
        if(res.data.results.length > 1){
          setLastAttendence(res.data.results[1]);
        }

      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getMonthlyLeaveHistory = async (date) => {
    let selectedDate = date.toISOString().slice(0, 7);
    await axiosInstance
      .get(`/leave_history/${selectedDate}/self/month/view/`)
      .then((res) => {
        setLeave(res.data.history.leaves_taken);
      })
      .catch((err) => {
      });
  };

  const getMonthlyAttendenceHistory = async (date) => {
    let selectedDate = date.toISOString().slice(0, 7);
    await axiosInstance
      .get(`/attendance/self/list/${selectedDate}/`)
      .then((res) => {
        setAppearance(res.data.length);
        setActive(secondsToHms(calculateDuration(res.data)))
      })
      .catch((err) => {

      });
  };

  return (
    <div className="body">
      <Layout></Layout>
      <div className="container">
        <div className="row mt-4">
          <div className="col-md-3">
            <InfoBar title = "ACTIVE" value = {active} />
          </div>
          <div className="col-md-3">
            <InfoBar title = "MY EARNING" value = {earning}  />
          </div>
          <div className="col-md-3">
            <InfoBar title = "APPEARANCE" value = {appearance + " Days"} />
          </div>
          <div className="col-md-3">
            <InfoBar title = "TOTAL LEAVES" value = {leave + " Days"}  />
          </div>
        </div>
      </div>
      {/* Check_In and notice */}
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-7">
            <CheckIn lastAttendence={lastAttendence}/>
          </div>
          <div className="col-md-5">
            <Notice />
          </div>
        </div>
      </div>

      {/* Check In or Checkout History */}
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <CheckInHistory attendances = {attendances} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;

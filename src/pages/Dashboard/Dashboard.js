import React, {useState, useEffect} from "react";
import Layout from "../../HOC/Layout";
import InfoBar from "../../component/Bar/InfoBar";
import CheckIn from "../../component/Dashboard/Check/CheckIn";
import Notice from "../../component/Dashboard/Notice/Notice";
import CheckInHistory from "../../component/Dashboard/Check/CheckInHistory";
import moment from 'moment'

import axiosInstance from "../../HelperFunction/Axios";

import { calculateDuration, secondsToHms, getDaysFromDate } from "../../HelperFunction/GenericFunction"

const Dashboard = () => {
  const [attendances, setAttendances] = useState([]);
  const [lastAttendence, setLastAttendence] = useState({});
  
  const [appearance, setAppearance] = useState("0 ");
  const [active, setActive] = useState("0 mins");
  const [earning, setEarning] = useState("0 %");
  const [leave, setLeave] = useState("0 ");
  const selectedDate = moment().format('YYYY-MM')

  useEffect(() => {
    getAttendance();
    const currentDate = new Date();
    getMonthlyAttendenceHistory(currentDate);
    getMonthlyLeaveHistory(currentDate);
  }, []);

  const getAttendance = async () => {
    axiosInstance
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

  const getMonthlyLeaveHistory = async () => {
    axiosInstance
      .get(`/leave_history/${selectedDate}/self/month/view/`)
      .then((res) => {
        setLeave(res.data.history.leaves_taken);
      })
      .catch((err) => {
      });
  };

  const getMonthlyAttendenceHistory = async () => {
    axiosInstance
      .get(`/attendance/self/list/${selectedDate}/`)
      .then((res) => {
        setAppearance(res.data.length);
        setActive(secondsToHms(calculateActiveDuration(res.data[0])))
      })
      .catch((err) => {

      });
  };

  const calculateActiveDuration = (attendance) => {
    console.log(attendance)
    if(!attendance) return 0
    
    if(moment().format('YYYY-MM-DD') !== attendance.date) return 0
    
    if(attendance.checked_out_time) return attendance.duration
    var current_time = moment();
    var check_in = moment(attendance.date+"T"+attendance.checked_in_time);
    return(current_time.diff(check_in,'seconds'))
  }

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

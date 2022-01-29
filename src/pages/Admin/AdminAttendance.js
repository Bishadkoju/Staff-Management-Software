import React,{useState, useEffect} from "react";
import AdminLayout from "../../HOC/AdminLayout";
import AdminSideNavBar from "../../component/Bar/AdminSideNavBar";
import CheckIn from "../../component/Dashboard/Check/CheckIn";
import CheckInHistory from "../../component/Dashboard/Check/CheckInHistory";
import { calculateDuration, secondsToHms, getDaysFromDate } from "../../HelperFunction/GenericFunction"

import axiosInstance from "../../HelperFunction/Axios";

const AdminAttendance = () => {

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
      <AdminLayout />
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-2">
            <AdminSideNavBar />
          </div>
          <div className="col-md-10">
            <h2>Attendance</h2>
            <CheckIn lastAttendence={lastAttendence}/>
            <CheckInHistory attendances = {attendances} />

          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminAttendance;

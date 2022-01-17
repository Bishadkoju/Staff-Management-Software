import React, { useState, useEffect } from "react";
import CheckTable from "../../component/Dashboard/Check/CheckTable";
import Layout from "../../HOC/Layout";
import axiosInstance from "../../HelperFunction/Axios";
import DatePicker from "react-datepicker";

const CheckInOut = () => {
  const [attendence, setAttendence] = useState([]);
  const [attendenceDate, setAttendenceDate] = useState(new Date());

  useEffect(() => {
    const currentDate = new Date();
    getMonthlyAttendenceHistory(currentDate);
  }, []);

  const getMonthlyAttendenceHistory = async (date) => {
    let selectedDate = date.toISOString().slice(0, 7);
    await axiosInstance
      .get(`/attendance/self/list/${selectedDate}/`)
      .then((res) => {
        console.log("attendence result : ", res.data);
        setAttendence(res.data);
      })
      .catch((err) => {
        setAttendence([]);
      });
  };

  const getDateData = (date) => {
    getMonthlyAttendenceHistory(date);
    setAttendenceDate(date);
  };

  const displayAttendenceTable = () => {
    console.log("from function", attendence);
    if (attendence.length > 0) {
      console.log("inside");
      return (
        <CheckTable
          attendence={attendence}
          month={attendenceDate.getMonth()}
          year={attendenceDate.getFullYear()}
        />
      );
    } else {
      return <h4 className="mt-3">No data for selected month and year</h4>;
    }
  };

  return (
    <div className="body">
      <Layout></Layout>
      <div className="container">
        <div className="row">
          <div className="col-md-12 d-flex justify-content-between pt-3">
            <div>
              <h2>Check In/Out</h2>
            </div>
          </div>
        </div>
      </div>

      {/* calendar */}
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-12">
            <DatePicker
              selected={attendenceDate}
              onChange={(date) => getDateData(date)}
              dateFormat="yyyy-MM"
              showMonthYearPicker
            />
          </div>
        </div>
      </div>
      {/* end of calendar */}
      <div className="container">
        <div className="row">
          <div className="col-md-12">{displayAttendenceTable()}</div>
        </div>
      </div>
    </div>
  );
};

export default CheckInOut;

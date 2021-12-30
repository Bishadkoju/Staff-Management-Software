import React, { useState, useEffect } from "react";
import CheckTable from "../../component/Dashboard/Check/CheckTable";
import Layout from "../../HOC/Layout";
import axiosInstance from "../../HelperFunction/Axios";

const CheckInOut = () => {
  const [attendenceDate, setAttendenceDate] = useState("");
  const [attendence, setAttendence] = useState([]);

  const handleChange = async (e) => {
    let date = e.target.value.slice(0, 7);
  
    setAttendenceDate(e.target.value);
    await axiosInstance
      .get(`/attendance/self/list/${date}/`)
      .then((res) => {
        setAttendence(res.data.results);
        console.log("check")
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  
  useEffect(() => {
    const getAttendenceList = async () => {
      await axiosInstance
        .get("/attendance/list/")
        .then((res) => {
          setAttendence(res.data.results);
        })
        .catch((err) => {
          // error handling
        });
    };

    getAttendenceList();
  }, []);

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
            <input
              type="date"
              className="attendence_date date_input"
              name="attendence_date"
              value={attendenceDate}
              onChange={(e) => handleChange(e)}
            />
          </div>
        </div>
      </div>
      {/* end of calendar */}
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <CheckTable attendence={attendence} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckInOut;

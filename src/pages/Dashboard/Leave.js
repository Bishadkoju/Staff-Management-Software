import React, { useState, useEffect } from "react";
import Layout from "../../HOC/Layout";
import LeaveSummaryBar from "../../component/Dashboard/Leave/LeaveSummaryBar";
import LeaveTable from "../../component/Dashboard/Leave/LeaveTable";
import ApplyLeaveModal from "../../component/Dashboard/Modal/ApplyLeaveModal";

import axiosInstance from "../../HelperFunction/Axios";
import DatePicker from "react-datepicker";

const Earning = () => {
  const [leaveHistory, setLeaveHistory] = useState([]);
  const [startDate, setStartDate] = useState(new Date());

  useEffect(() => {
    const currentDate = new Date();
    getMonthlyLeaveHistory(currentDate);
  }, []);

  const getMonthlyLeaveHistory = async (date) => {
    let selectedDate = date.toISOString().slice(0, 7);
    await axiosInstance
      .get(`/leave_history/${selectedDate}/self/month/view/`)
      .then((res) => {
        console.log("Called");
        console.log(res.data);
        setLeaveHistory(res.data);
      })
      .catch((err) => {
        setLeaveHistory([]);
      });
  };

  const getDateData = (date) => {
    getMonthlyLeaveHistory(date);
    setStartDate(date);
  };

  const displayLeaveTableHistory = () => {
    if (leaveHistory.leaves) {
      if (leaveHistory.leaves.length > 0) {
        return (
          <LeaveTable
            leaveDetail={leaveHistory.leaves}
            month={startDate.getMonth()}
            year={startDate.getFullYear()}
          />
        );
      } else {
        return (
          <div>
            <h4 className="pt-4">No Leave History for this month and year</h4>
          </div>
        );
      }
    }
  };

  return (
    <div className="body">
      <Layout></Layout>
      <div className="container">
        <div className="row">
          <div className="col-md-12 d-flex justify-content-between pt-3">
            <div>
              <h2>My Leave</h2>
            </div>
            <div>
              <button
                className="btn btn_primary"
                data-toggle="modal"
                data-target="#leaveModal"
              >
                <i className="fa fa-plus pr-2" aria-hidden="true"></i>
                Apply for Leave
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Leave Main part */}
      <div className="container bg-white p-4 mt-4 rounded-div">
        <div className="row">
          <div className="col-md-9">
            {leaveHistory.history ? (
              <LeaveSummaryBar history={leaveHistory.history} />
            ) : (
              "No Leave in selected month and year"
            )}
          </div>
          <div className="col-md-3 d-flex justify-content-end date_input_div">
            <DatePicker
              selected={startDate}
              onChange={(date) => getDateData(date)}
              dateFormat="yyyy-MM"
              showMonthYearPicker
            />
          </div>

          <div className="col-md-12">{displayLeaveTableHistory()}</div>
        </div>
      </div>
      <ApplyLeaveModal />
    </div>
  );
};

export default Earning;

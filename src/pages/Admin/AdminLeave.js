import React, { useState, useEffect } from "react";
import AdminLayout from "../../HOC/AdminLayout";
import AdminSideNavBar from "../../component/Bar/AdminSideNavBar";

import LeaveTable from "../../component/Dashboard/Leave/LeaveTable";
import ApplyLeaveModal from "../../component/Dashboard/Modal/ApplyLeaveModal";

import LeaveSummaryBar from "../../component/Dashboard/Leave/LeaveSummaryBar";

import axiosInstance from "../../HelperFunction/Axios";
import DatePicker from "react-datepicker";

const AdminLeave = () => {
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
        console.log(res.data);
        setLeaveHistory(res.data);
      })
      .catch((err) => {
        console.log(err);
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
      <AdminLayout />
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-2">
            <AdminSideNavBar />
          </div>
          <div className="col-md-10">
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
            <div className="row bg-white p-4 mt-4">
              <div className="col-md-9">
                <LeaveSummaryBar history={leaveHistory.history} />
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
        </div>
      </div>
      <ApplyLeaveModal />
    </div>
  );
};

export default AdminLeave;

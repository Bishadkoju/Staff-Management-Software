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
    const getLeaveHistory = async () => {
      await axiosInstance
        .get("/leave_history/self/view/")
        .then((res) => {
          console.log(res.data);
          setLeaveHistory(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };

    getLeaveHistory();
  }, []);

  const getDateData = (date) => {
    setStartDate(date);
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
      {/* Earning Main part */}
      <div className="container bg-white p-4 mt-4 rounded-div">
        <div className="row">
          <div className="col-md-9">
            <LeaveSummaryBar history={leaveHistory.history} />
          </div>
          <div className="col-md-3 d-flex justify-content-end date_input_div">
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              dateFormat="yyyy-MM"
              showMonthYearPicker
            />
          </div>

          <div className="col-md-12">
            <LeaveTable leaveDetail={leaveHistory.leaves} />
          </div>
        </div>
      </div>
      <ApplyLeaveModal />
    </div>
  );
};

export default Earning;

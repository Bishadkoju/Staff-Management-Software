import React, {useState, useEffect} from "react";
import Layout from "../../HOC/Layout";
import LeaveSummaryBar from "../../component/Dashboard/Leave/LeaveSummaryBar";
import LeaveTable from "../../component/Dashboard/Leave/LeaveTable";
import ApplyLeaveModal from "../../component/Dashboard/Modal/ApplyLeaveModal";

import axiosInstance from "../../HelperFunction/Axios";


function Earning() {
  const [leaveHistory, setLeaveHistory] = useState([]);

  useEffect(() => {
    const getLeaveHistory = async () => {
      await axiosInstance.get('/leave_history/self/view/')
      .then(res => {
        console.log(res.data);
        setLeaveHistory(res.data);
      })
      .catch(err => {
        console.log(err);
      })
    }

    getLeaveHistory();
  }, [])

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
            <LeaveSummaryBar history = {leaveHistory.history} />
          </div>
          <div className="col-md-3 d-flex justify-content-end">
            <div className="dropdown">
              <button
                className="btn btn-primary dropdown-toggle"
                type="button"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i className="fa fa-calendar pr-2" aria-hidden="true"></i>
                December 2021
              </button>
              <div
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton"
              >
                <a className="dropdown-item" href="#">
                  Action
                </a>
                <a className="dropdown-item" href="#">
                  Another action
                </a>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-12">
            <LeaveTable leaveDetail = {leaveHistory.leaves} />
          </div>
        </div>
      </div>

      <ApplyLeaveModal />
    </div>
  );
}

export default Earning;

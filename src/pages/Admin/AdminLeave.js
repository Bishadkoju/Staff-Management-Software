import React from "react";
import AdminLayout from "../../HOC/AdminLayout";
import AdminSideNavBar from "../../component/Bar/AdminSideNavBar";

import LeaveTable from "../../component/Dashboard/Leave/LeaveTable";
import ApplyLeaveModal from "../../component/Dashboard/Modal/ApplyLeaveModal";

import LeaveSummaryBar from "../../component/Dashboard/Leave/LeaveSummaryBar";

const AdminLeave = () => {
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
                <LeaveSummaryBar />
              </div>
              <div className="col-md-3 d-flex justify-content-end">
                <input type="date" />
              </div>

              <div className="col-md-12">
                <LeaveTable />
              </div>
            </div>
          </div>
        </div>
      </div>
      <ApplyLeaveModal />
    </div>
  );
};

export default AdminLeave;

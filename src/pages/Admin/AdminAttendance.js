import React from "react";
import AdminLayout from "../../HOC/AdminLayout";
import AdminSideNavBar from "../../component/Bar/AdminSideNavBar";
import CheckIn from "../../component/Dashboard/Check/CheckIn";
import CheckInHistory from "../../component/Dashboard/Check/CheckInHistory";

const AdminAttendance = () => {
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
            <CheckIn/>

            
          <CheckInHistory attendances = {[]} />

          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminAttendance;

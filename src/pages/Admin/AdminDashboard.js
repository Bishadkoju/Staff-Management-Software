import React from "react";
import AdminLayout from "../../HOC/AdminLayout";
import AdminSideNavBar from "../../component/Bar/AdminSideNavBar";
import InfoBar from "../../component/Bar/InfoBar";
import Stores from "../../component/Admin/Stores";

const AdminDashboard = () => {
  return (
    <div class="body">
      <AdminLayout />
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-2">
            <AdminSideNavBar />
          </div>
          <div class="col-md-10">
            <h2>Dashboard</h2>
            <div className="row mt-4">
              <div className="col-md-3">
                <InfoBar />
              </div>
              <div className="col-md-3">
                <InfoBar />
              </div>
              <div className="col-md-3">
                <InfoBar />
              </div>
              <div className="col-md-3">
                <InfoBar />
              </div>
            </div>

            <div class="row mb-3">
              <div class="col-md-12 mt-4">
                <div class="div_format">
                  <span class="heading_text">Stores Details</span>
                  <hr />
                  <Stores />
                  <Stores />
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;

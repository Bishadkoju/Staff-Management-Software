import React from "react";
import Layout from "../../HOC/Layout";
import InfoBar from "../../component/Bar/InfoBar";
import Check_In from "../../component/Dashboard/Check/CheckIn";
import Notice from "../../component/Dashboard/Notice/Notice";
import Check_in_history from "../../component/Dashboard/Check/CheckInHistory";

function Dashboard() {
  return (
    <div className="body">
      <Layout></Layout>
      <div className="container">
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
      </div>
      {/* Check_In and notice */}
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-7">
            <Check_In />
          </div>
          <div className="col-md-5">
            <Notice />
          </div>
        </div>
      </div>

      {/* Check In or Checkout History */}
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <Check_in_history />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;

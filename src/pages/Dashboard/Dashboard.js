import React from "react";
import Layout from "../../HOC/Layout";
import InfoBar from "../../component/Bar/InfoBar";
import CheckIn from "../../component/Dashboard/Check/CheckIn";
import Notice from "../../component/Dashboard/Notice/Notice";
import CheckInHistory from "../../component/Dashboard/Check/CheckInHistory";

const Dashboard = () => {
  return (
    <div className="body">
      <Layout></Layout>
      <div className="container">
        <div className="row mt-4">
          <div className="col-md-3">
            <InfoBar title = "ACTIVE" value = "2048 Hours" />
          </div>
          <div className="col-md-3">
            <InfoBar title = "MY EARNING" value = "29.4%"  />
          </div>
          <div className="col-md-3">
            <InfoBar title = "APPEARANCE" value = "20 Days"  />
          </div>
          <div className="col-md-3">
            <InfoBar title = "LEAVES REMAINING" value = "4 Days"  />
          </div>
        </div>
      </div>
      {/* Check_In and notice */}
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-7">
            <CheckIn/>
          </div>
          <div className="col-md-5">
            <Notice />
          </div>
        </div>
      </div>

      {/* Check In or Checkout History */}
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <CheckInHistory />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;

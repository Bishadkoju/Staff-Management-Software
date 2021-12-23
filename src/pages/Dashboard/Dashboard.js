import React, {useState, useEffect} from "react";
import Layout from "../../HOC/Layout";
import InfoBar from "../../component/Bar/InfoBar";
import CheckIn from "../../component/Dashboard/CheckIn";
import Notice from "../../component/Dashboard/Notice/Notice";
import CheckInHistory from "../../component/Dashboard/CheckInHistory";

const Dashboard = () => {

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

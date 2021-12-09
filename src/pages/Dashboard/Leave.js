import React from "react";
import Layout from "../../HOC/Layout";
import SummaryBar from "../../component/Dashboard/Summary_Bar";
import Leave_table from "../../component/Dashboard/Leave_table";

function Earning() {
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
              <button className="btn btn_primary">
                <i className="fa fa-plus pr-2" aria-hidden="true"></i>
                Apply for Leave
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-4">
        <div className="row">
          <div className="col-md-12">
            <div className="d-flex justify-content-between">
              <SummaryBar title="PAID LEAVE" value="0" />
              <SummaryBar title="LEAVE TAKEN" value="0" />
              <SummaryBar title="LEAVE REMAINING" value="30" />
              <SummaryBar title="EARNING DEDUCT FROM LEAVE" value="0" />
            </div>
          </div>
        </div>
      </div>

      {/* calendar */}
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-12">
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
        </div>
      </div>
      {/* end of calendar */}

      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <Leave_table />
          </div>
        </div>
      </div>


    </div>
  );
}

export default Earning;

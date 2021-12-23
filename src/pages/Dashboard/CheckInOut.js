import React from "react";
import CheckTable from "../../component/Dashboard/Check/CheckTable";
import Layout from "../../HOC/Layout";

const CheckInOut = () => {
  return (
    <div className="body">
      <Layout></Layout>
      <div className="container">
        <div className="row">
          <div className="col-md-12 d-flex justify-content-between pt-3">
            <div>
              <h2>Check In/Out</h2>
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
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <CheckTable />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckInOut;

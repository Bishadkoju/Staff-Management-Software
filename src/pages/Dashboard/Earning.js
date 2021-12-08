import React from "react";
import Layout from "../../HOC/Layout";
import Summary_Bar from "../../component/Dashboard/Summary_Bar";

function Earning() {
  return (
    <div className="body">
      <Layout></Layout>
      {/* Heading part */}
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h2>My Earning</h2>
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
      {/* end of heading part */}

      <div class="container mt-4">
        <div class="row">
          <div class="col-md-12">
            <div class="d-flex justify-content-between">
              <Summary_Bar title = "FROM SALARY" value = "0"/>
              <Summary_Bar title = "FROM BONUS" value = "0"/>
              <Summary_Bar title = "FROM COMMISSION" value = "771.56"/>
              <Summary_Bar title = "TAX" value="0"/>
              <Summary_Bar title = "TOTAL EARNING" value="0"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Earning;

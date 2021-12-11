import React from "react";
import Layout from "../../HOC/Layout";
import EarningGraph from "../../component/Dashboard/EarningGraph";
import PiggyImg from "../../assets/piggy.png";
import NoBoxInfoBar from "../../component/Dashboard/General/NoBoxInfoBar";

function Earning() {
  const imgStyle = {
    width: "30%",
  };

  return (
    <div className="body">
      <Layout></Layout>
      {/* Heading part */}
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h2 className="pt-4">My Earning</h2>
          </div>
        </div>
      </div>
      {/* end of heading part */}

      {/* Earning Main part */}
      <div className="container bg-white p-4 mt-4 rounded-div">
        <div className="row">
          <div className="col-md-9">
            <div className="d-flex justify-content-start muted_text">
              <div class="media" style={{maxWidth : "200px"}}>
                <img class="mr-2" src={PiggyImg} alt="Piggy Image" style={imgStyle} />
                <div>
                  <span className="muted_text text-muted">TOTAL EARNING</span>
                  <br />
                  <h4>$249, 500</h4>
                </div>
              </div>

              <div className="pr-4">
                <NoBoxInfoBar title="FROM SALARY" value="$495, 650" />
              </div>
              <div className="pr-4">
                <NoBoxInfoBar title="FROM SALARY" value="$495, 650" />
              </div>
              <div className="pr-4">
                <NoBoxInfoBar title="FROM SALARY" value="$495, 650" />
              </div>
              <div className="pr-4">
                <NoBoxInfoBar title="FROM SALARY" value="$495, 650" />
              </div>
            </div>
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
        </div>
        <EarningGraph />
      </div>
    </div>
  );
}

export default Earning;

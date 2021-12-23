import React from "react";

function Check_In() {

  return (
    <div className="div_format pt-3">
      <span className="heading_text">Check In</span>
      <br />
      <span className="muted_text text-muted">
        Check In/Out to make an attendance
      </span>
      <div className="desc">
        <div className="row">
          <div className="col-md-3">
            <div className="check_in_background text-center">
              <br />
              <span className="">
                <a href="/check">Check In</a>
              </span>
            </div>
          </div>
          <div className="col-md-9">
            <div className="medium_font">
              <span className="">29 Nov</span>
              <br />
              <span className="text-muted muted_text ">Check In :</span>
              <span className="time pr-4 ">10:45 AM</span>
              <span>Check Out :</span>
              <span className="time">03:45 PM</span>
            </div>
            <div className="medium_font primary_color pt-3">
              <h5>Today</h5>
              <div className="d-flex justify-content-between medium_font">
                <div>
                  <h6>Check In </h6>
                  <i className="fa fa-minus" aria-hidden="true"></i>
                </div>
                <div>
                  <h6>Check Out</h6>
                  <i className="fa fa-minus" aria-hidden="true"></i>
                </div>
                <div>
                  <h6>Total</h6>
                  <h5>05 Hr</h5>
                  <h6>6mins</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Check_In;

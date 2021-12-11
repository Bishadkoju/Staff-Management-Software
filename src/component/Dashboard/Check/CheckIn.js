import React from 'react'

function Check_In() {
    return (
        <div class="div_format pt-3">
            <span class="heading_text">Check In</span><br />
            <span class="muted_text text-muted">Check In/Out to make an attendance</span>
            <div class="desc">
              <div class="row">
                <div class="col-md-3">
                  <div class="check_in_background text-center">
                    <br />
                    <span class="">
                      <a href="/check">Check In</a> 
                    </span>
                  </div>
                </div>
                <div class="col-md-9">
                  <div class="medium_font">
                    <span class="">29 Nov</span><br />
                    <span class="text-muted muted_text ">Check In :</span>
                    <span class="time pr-4 ">10:45 AM</span>
                    <span>Check Out :</span>
                    <span class="time">03:45 PM</span>
                  </div>
                  <div class="medium_font primary_color pt-3">
                    <h5>Today</h5>
                    <div class="d-flex justify-content-between medium_font">
                      <div>
                        <h6>Check In </h6>
                        <i class="fa fa-minus" aria-hidden="true"></i>
                      </div>
                      <div>
                        <h6>Check Out</h6>
                        <i class="fa fa-minus" aria-hidden="true"></i>
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
    )
}

export default Check_In

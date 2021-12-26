import React from "react";

const IncreaseSalaryModal = () => {
  return (
    <div
      className="modal fade bd-example-modal"
      id="increaseSalaryModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="myLargeModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-lg">
        <div className="modal-content p-3">
          <div className="row">
            <div className="col-md-12">
              <div className="heading_modal d-flex justify-content-between">
                <div>
                  <span className="heading_text">Increase Salary</span>
                </div>
                <div>
                  <a className="btn cross_button" data-dismiss="modal" href="/#">
                    <i className="fa fa-times" aria-hidden="true"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <form>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label for="current_salary">Current Salary</label>
                  <br />
                  <span className="f_24 text-primary">$15.5</span>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label for="increase_by">Increase By : </label>
                  <br />
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="increase_by"
                      id="inlineRadio1"
                      value="percentage"
                      selected
                    />
                    <label className="form-check-label" for="inlineRadio1">
                      Percentage(%)
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="increase_by"
                      id="inlineRadio2"
                      value="fixed_amount"
                    />
                    <label className="form-check-label" for="inlineRadio2">
                      Fixed Amount
                    </label>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <label for="amount" className="form_input_head">
                  Amount
                </label>
                <div className="input-group mb-3 ">
                  <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon3">
                      +%
                    </span>
                  </div>
                  <input
                    type="text"
                    className="form-control"
                    id="amount"
                    aria-describedby="basic-addon3"
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label for="valid_from">Valid From</label>
                  <input
                    type="date"
                    className="form-control"
                    name="valid_from"
                    id="valid_from"
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label for="addition_amount">Addition Amount</label>
                  <br />
                  <span className="f_24 text-primary">+$15.5</span>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label for="new_salary">New Salary</label>
                  <br />
                  <span className="f_36 text-primary">
                    25<sup>$</sup>
                  </span>
                </div>
              </div>
            </div>
            <hr />
            <div className="col-md-12">
              <button className="btn btn_primary mr-3">Submit</button>
              <button className="btn btn-secondary" data-dismiss="modal">
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default IncreaseSalaryModal;

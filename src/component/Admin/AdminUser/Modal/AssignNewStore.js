import React from "react";

const AssignNewStore = () => {
  return (
    <div
      className="modal fade bd-example-modal"
      id="assignNewStore"
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
                  <span className="heading_text">New Store</span>
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
                  <label for="current_store">Current Store</label>
                  <br />
                  <span className="f_24 text-primary">SMJ STORE</span>
                  <br />
                  <span className="f_14 text-primary">
                    <i className="fa fa-map-marker" aria-hidden="true"></i>
                    &nbsp;Jawlakhel
                  </span>
                </div>
              </div>
              <div className="col-md-6">
                <label for="assign_new_store" className="form_input_head">
                  Assign New Store
                </label>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    name="assign_new_store"
                    id="assign_new_store"
                    aria-describedby="basic-addon3"
                    placeholder="New Store"
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
                <label for="location" className="form_input_head">
                  Location
                </label>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    name="location"
                    id="location"
                    aria-describedby="basic-addon3"
                    placeholder="Store Location"
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label for="valid_to">Valid To</label>
                  <input
                    type="date"
                    className="form-control"
                    name="valid_to"
                    id="valid_to"
                  />
                </div>
              </div>
              <div className="col-md-6">
                <label for="contact_number" className="form_input_head">
                  Contact Number
                </label>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    name="contact_number"
                    id="contact_number"
                    aria-describedby="basic-addon3"
                    placeholder="98xxxxxxxx"
                  />
                </div>
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-md-12">
                <button className="btn btn_primary mr-3">Submit</button>
                <button className="btn btn-secondary" data-dismiss="modal">
                  Cancel
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AssignNewStore;

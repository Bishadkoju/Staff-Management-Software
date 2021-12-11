import React from "react";

const ApplyLeaveModal = () => {
  return (
    <div
      className="modal fade bd-example-modal-lg"
      id="leaveModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="myLargeModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-lg">
        <div className="modal-content px-3 py-3">
          <div className="heading_modal">
            <span className="heading_text">Apply for leave</span>
            <br />
            <span className="muted_text text-muted">
              Fill up the form to apply for leave
            </span>
            <hr />
          </div>

          <form>
            <div className="Modalform leaveModalForm px-4">
              {/* Leave  Type and Day type   */}
              <div className="row">
                <div className="col-md-6">
                  {/* leave type radio button */}
                  <div className="form-group">
                    <span className="form_input_head">Leave Type*</span>
                    <br />
                    <div className="form-check form-check-inline pt-2">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="leave_type"
                        id="day_type1"
                        value="casual"
                      />
                      <label
                        className="form-check-label text-muted muted_text"
                        for="day_type1"
                      >
                        Casual
                      </label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="leave_type"
                        id="day_type2"
                        value="sick"
                      />
                      <label
                        className="form-check-label text-muted muted_text"
                        for="day_type2"
                      >
                        Sick
                      </label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="leave_type"
                        id="day_type3"
                        value="compensation"
                      />
                      <label
                        className="form-check-label text-muted muted_text"
                        for="day_type3"
                      >
                        Compensation
                      </label>
                    </div>
                  </div>
                  {/* end of leave type radio button  */}
                  <div class="form-group">
                      <label for="leave_from">From*</label>
                      <input
                        type="date"
                        class="form-control"
                        name="leave_from"
                        id="leave_from"
                      />
                    </div>
                </div>

                <div className="col-md-6">
                  <div className="form-group">
                    <span className="form_input_head">Day Type*</span>
                    <br />
                    <div className="form-check form-check-inline pt-2">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="day_type"
                        id="day_type_1"
                        value="casual"
                      />
                      <label
                        className="form-check-label text-muted muted_text"
                        for="day_type_1"
                      >
                        Full
                      </label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="day_type"
                        id="day_type_2"
                        value="sick"
                      />
                      <label
                        className="form-check-label text-muted muted_text"
                        for="day_type_2"
                      >
                        First Half
                      </label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="day_type"
                        id="day_type_3"
                        value="compensation"
                      />
                      <label
                        className="form-check-label text-muted muted_text"
                        for="day_type_3"
                      >
                        Second Half
                      </label>
                    </div>
                  </div>

                  <div class="form-group">
                      <label for="leave_to">To*</label>
                      <input
                        type="date"
                        class="form-control"
                        name="leave_to"
                        id="leave_to"
                      />
                    </div>
                </div>
              </div>
              {/* Leave  Type and Day type  */}
              <div className="row mt-3">
                <div className="col-md-12">
                  <label for="basic-url" className="form_input_head">
                    I want to inform*
                  </label>
                  <div className="input-group mb-3 pt-2">
                    <div className="input-group-prepend">
                      <span className="input-group-text" id="basic-addon3">
                        Team
                      </span>
                    </div>
                    <input
                      type="text"
                      className="form-control"
                      id="basic-url"
                      aria-describedby="basic-addon3"
                    />
                  </div>

                  <div className="input-group mb-3">
                    <div className="input-group-prepend">
                      <span className="input-group-text" id="basic-addon3">
                        Peers
                      </span>
                    </div>
                    <input
                      type="text"
                      className="form-control"
                      id="basic-url"
                      aria-describedby="basic-addon3"
                      placeholder="Start typing your Peer's name"
                    />
                  </div>
                </div>
                <div className="col-md-12 mt-3">
                  <span className="form_input_head">
                    I am available for urgent call
                  </span>
                  <br />
                  <div className="form-check form-check-inline pt-2">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="urgent_call_bool"
                      id="urgent_call"
                      value="yes"
                    />
                    <label className="form-check-label" for="urgent_call_bool">
                      Yes
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="urgent_call_bool"
                      id="urgent_call"
                      value="no"
                    />
                    <label className="form-check-label" for="urgent_call_bool">
                      No
                    </label>
                  </div>
                </div>
                <div className="col-md-12 mt-3">
                  <div className="form-group">
                    <label for="reason_textarea">Reason*</label>
                    <textarea
                      className="form-control"
                      id="reason_textarea"
                      rows="3"
                    ></textarea>
                  </div>
                </div>

                <div className="col-md-12">
                  <button className="btn btn_primary mr-3" type="submit">
                    Submit
                  </button>
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-dismiss="modal"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ApplyLeaveModal;

import React, {useState} from "react";
import axiosInstance from '../../../HelperFunction/Axios';

const ApplyLeaveModal = () => {
  const [formData, setFormData] = useState({
    leave_type : "",
    day_type : "",
    leave_from : "",
    leave_to : "",
    inform_team : "",
    inform_peers : "",
    contact_availability : "",
    reason : ""
  });

  const {leave_type, day_type, leave_from, leave_to, inform_team, inform_peers, contact_availability, reason} = formData;

  const handleChange = (e) => {
    setFormData((prevFormData) => {
      return {...prevFormData, [e.target.name]: e.target.value};
    });
  };

  const handleSubmit = (e) => {
    console.log("Submitted");
    console.log(e);
    e.preventDefault();
    axiosInstance.post("/leave/request/add/", {leave_type, day_type, leave_from, leave_to, inform_team, inform_peers, contact_availability, reason})
    .then(res => {
      // console.log(res.data);
      // console.log("Submitted")
      document.getElementById('closeLeaveModal').click();
    })
    .catch(err => {
      console.log("error");
      console.log(err);
    })
  }

  return (
    <div
      className="modal fade bd-example-modal-lg"
      id="leaveModal"
      tabIndex="-1"
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

          <form onSubmit={(e) => handleSubmit(e)}>
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
                        value="CAS"
                        onChange={(e) => handleChange(e)}
                      />
                      <label
                        className="form-check-label text-muted muted_text"
                        htmlFor="day_type1"
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
                        value="SK"
                        onChange={(e) => handleChange(e)}
                      />
                      <label
                        className="form-check-label text-muted muted_text"
                        htmlFor="day_type2"
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
                        value="COM"
                        onChange={(e) => handleChange(e)}
                      />
                      <label
                        className="form-check-label text-muted muted_text"
                        htmlFor="day_type3"
                      >
                        Compensation
                      </label>
                    </div>
                  </div>
                  {/* end of leave type radio button  */}
                  <div className="form-group">
                    <label htmlFor="leave_from">From*</label>
                    <input
                      type="date"
                      className="form-control"
                      name="leave_from"
                      id="leave_from"
                      value={leave_from}
                      onChange={(e) => handleChange(e)}
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
                        value="F"
                        onChange={(e) => handleChange(e)}
                      />
                      <label
                        className="form-check-label text-muted muted_text"
                        htmlFor="day_type_1"
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
                        value="FH"
                        onChange={(e) => handleChange(e)}
                      />
                      <label
                        className="form-check-label text-muted muted_text"
                        htmlFor="day_type_2"
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
                        value="SH"
                        onChange={(e) => handleChange(e)}
                      />
                      <label
                        className="form-check-label text-muted muted_text"
                        htmlFor="day_type_3"
                      >
                        Second Half
                      </label>
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="leave_to">To*</label>
                    <input
                      type="date"
                      className="form-control"
                      name="leave_to"
                      id="leave_to"
                      value={leave_to}
                      onChange={(e) => handleChange(e)}
                    />
                  </div>
                </div>
              </div>
              {/* Leave  Type and Day type  */}
              <div className="row mt-3">
                <div className="col-md-12">
                  <label htmlFor="basic-url" className="form_input_head">
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
                      name="inform_team"
                      aria-describedby="basic-addon3"
                      onChange={(e) => handleChange(e)}
                      value={inform_team}
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
                      name="inform_peers"
                      className="form-control"
                      id="basic-url"
                      aria-describedby="basic-addon3"
                      placeholder="Start typing your Peer's name"
                      onChange={(e) => handleChange(e)}
                      value={inform_peers}
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
                      name="contact_availability"
                      id="urgent_call"
                      value="yes"
                      onChange={(e) => handleChange(e)}
                    />
                    <label className="form-check-label" htmlFor="contact_availability">
                      Yes
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="contact_availability"
                      id="urgent_call"
                      value="no"
                      onChange={(e) => handleChange(e)}
                    />
                    <label className="form-check-label" htmlFor="contact_availability">
                      No
                    </label>
                  </div>
                </div>
                <div className="col-md-12 mt-3">
                  <div className="form-group">
                    <label htmlFor="reason_textarea">Reason*</label>
                    <textarea
                      className="form-control"
                      id="reason_textarea"
                      rows="3"
                      name="reason"
                      onChange={(e) => handleChange(e)}
                      value={reason}
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
                    id="closeLeaveModal"
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

import React from "react";

const ProfileModal = () => {
  return (
    <React.Fragment>
      {/* beginning of modal  */}
      <div
        className="modal fade"
        id="editProfileModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="myLargeModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content p-4">
            <div className="heading_modal">
              <span className="heading_text">Edit My Profile</span>
              <span className="text-muted">(1 of 2)</span>
              <hr />
            </div>

            <form>
              <div className="row">
                <div className="col-md-12">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label for="full_name">Full Name</label>
                        <input
                          type="text"
                          name="full_name"
                          id="full_name"
                          className="form-control"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="file"
                          name="profile_pic"
                          id="profile_pic"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label for="gender">Gender</label>
                        <br />
                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="gender"
                            id="gender1"
                            value="male"
                          />
                          <label className="form-check-label" for="gender1">
                            Male
                          </label>
                        </div>
                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="gender"
                            id="gender2"
                            value="female"
                          />
                          <label className="form-check-label" for="gender2">
                            Female
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label for="date_birth">Date of Birth</label>
                        <input
                          type="date"
                          name="date_birth"
                          id="date_birth"
                          className="form-control"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label for="contact_number">Contact Number</label>
                        <input
                          type="text"
                          className="form-control"
                          name="contact_number"
                          id="contact_number"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label for="address">Address</label>
                        <input
                          type="text"
                          className="form-control"
                          name="address"
                          id="address"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label for="emergency_number">Emergency Number</label>
                        <input
                          type="text"
                          className="form-control"
                          name="emergency_number"
                          id="emergency_number"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label for="relation">Relation</label>
                        <input
                          type="text"
                          className="form-control"
                          name="relation"
                          id="relation"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Pagination Div */}
                <div className="col-md-12">
                  <a className="btn btn_primary btn-circle btn-active">
                      <span className="activeTextButton">1</span>
                    </a>
                  <a
                    href="#editProfileModalPage2"
                    className="btn btn-secondary btn-circle"
                    data-toggle="modal"
                    data-dismiss="modal"
                    data-target="#editProfileModalPage2"
                  >
                    <span>2</span>
                  </a>
                </div>
              </div>
              <hr />

              <div className="row">
                <div className="col-md-12">
                  <a
                    href="#editProfileModalPage2"
                    className="btn btn_primary mr-3"
                    data-toggle="modal"
                    data-dismiss="modal"
                    data-target="#editProfileModalPage2"
                  >
                    Next
                  </a>
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-dismiss="modal"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* end of first modal   */}

      {/* modal second page   */}

      <div
        className="modal fade"
        id="editProfileModalPage2"
        tabindex="-1"
        role="dialog"
        aria-labelledby="myLargeModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content p-4">
            <div className="heading_modal">
              <span className="heading_text">Edit My Profile</span>
              <span className="text-muted">(2 of 2)</span>
              <hr />
            </div>

            <form>
              <div className="row">
                <div className="col-md-12">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label for="father_name">Father's Name</label>
                        <input
                          type="text"
                          name="father_name"
                          id="father_name"
                          className="form-control"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <div className="form-group">
                          <label for="mother_name">Mother's Name</label>
                          <input
                            type="text"
                            name="mother_name"
                            id="mother_name"
                            className="form-control"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label for="marital_status">Marital Status</label>
                        <br />
                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="marital_status"
                            id="marital_status1"
                            value="married"
                          />
                          <label
                            className="form-check-label"
                            for="marital_status1"
                          >
                            Married
                          </label>
                        </div>
                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="marital_status"
                            id="marital_status2"
                            value="single"
                          />
                          <label
                            className="form-check-label"
                            for="marital_status2"
                          >
                            Single
                          </label>
                        </div>
                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="marital_status"
                            id="marital_status2"
                            value="divorced"
                          />
                          <label
                            className="form-check-label"
                            for="marital_status2"
                          >
                            Divorced
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label for="educational_status">
                          Educational Status
                        </label>
                        <input
                          type="text"
                          name="educational_status"
                          id="educational_status"
                          className="form-control"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label for="pan_number">PAN No.</label>
                        <input
                          type="text"
                          className="form-control"
                          name="pan_number"
                          id="pan_number"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label for="store_name">Store Name</label>
                        <input
                          type="text"
                          className="form-control"
                          name="store_name"
                          id="store_name"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label for="starting_date">Starting Date</label>
                        <input
                          type="date"
                          className="form-control"
                          name="starting_date"
                          id="starting_date"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label for="Termination Date">Termination Date</label>
                        <input
                          type="date"
                          className="form-control"
                          name="Termination Date"
                          id="Termination Date"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-12">
                  {/* Pagination Div */}
                  <div className="col-md-12">
                    <a
                      href="#editProfileModal"
                      className="btn btn-secondary btn-circle btn-active"
                      data-toggle="modal"
                      data-dismiss="modal"
                      data-target="#editProfileModal"
                    >
                      <span className="activeTextButton">1</span>
                    </a>
                    <a
                      className="btn btn_primary btn-circle"
                    >
                      2
                    </a>
                  </div>
                </div>
              </div>
              <hr />

              <div className="row">
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
            </form>
          </div>
        </div>
      </div>
      {/* end of modal second page  */}
    </React.Fragment>
  );
};

export default ProfileModal;

import React, {useState} from "react";
import axiosInstance from '../../../HelperFunction/Axios'

const ProfileModal = (props) => {
  const currentUserData = props.userInfo; 
  console.log("From modal")
  console.log(currentUserData);

  const [formData, setFormData] = useState({
    emergency_contact : "",
    is_active : true,
    first_name : "",
    middle_name : "",
    last_name : "",
    phone_number : "",
    father_name : "",
    mother_name : "",
    address : "",
    pan_number : "",
    gender : "",
    date_of_birth : "",
    marital_status : "",
    joined_date : "",
    termination_date : "",
    educational_status : "",
    account_number : "",
    store : ""
  });

  const {emergency_contact, is_active, first_name, middle_name, last_name, phone_number, father_name, mother_name, address, pan_number, gender, date_of_birth, marital_status, joined_date, termination_date, educational_status, account_number, store} = formData;

  const handleChange = (e) => {
    setFormData((prevFormData) => {
      return { ...prevFormData, [e.target.name]: e.target.value };
    });
  };

  const handleEditSumbit = (e) => {
    e.preventDefault();
    const id = currentUserData.id;
    axiosInstance.put(`/user/${id}/update/`, {emergency_contact, is_active, first_name, middle_name, last_name, phone_number, father_name, mother_name, address, pan_number, gender, date_of_birth, marital_status, joined_date, termination_date, educational_status, account_number, store})
    .then(res => {
      console.log(res);
    })
    .catch(err => {
      console.log(err);
    })
  }


  return (
    <React.Fragment>
      {/* beginning of modal  */}
      <div
        className="modal fade"
        id="editProfileModal"
        tabIndex="-1"
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
                        <label htmlFor="first_name">Full Name</label>
                        <input
                          type="text"
                          name="first_name"
                          id="first_name"
                          className="form-control"
                          value = {first_name}
                          onChange={(e) => handleChange(e)}
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
                        <label htmlFor="gender">Gender</label>
                        <br />
                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="gender"
                            id="gender1"
                            value="M"
                            onChange={(e) => handleChange(e)}
                          />
                          <label className="form-check-label" htmlFor="gender1">
                            Male
                          </label>
                        </div>
                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="gender"
                            id="gender2"
                            value="F"
                            onChange={(e) => handleChange(e)}
                          />
                          <label className="form-check-label" htmlFor="gender2">
                            Female
                          </label>
                        </div>
                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="gender"
                            id="gender3"
                            value="O"
                            onChange={(e) => handleChange(e)}
                          />
                          <label className="form-check-label" htmlFor="gender3">
                            Other
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="date_birth">Date of Birth</label>
                        <input
                          type="date"
                          name="date_of_birth"
                          id="date_of_birth"
                          className="form-control"
                          value={date_of_birth}
                          onChange={(e) => handleChange(e)}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="contact_number">Contact Number</label>
                        <input
                          type="text"
                          className="form-control"
                          name="phone_number"
                          id="phone_number"
                          value={phone_number}
                          onChange={(e) => handleChange(e)}
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="address">Address</label>
                        <input
                          type="text"
                          className="form-control"
                          name="address"
                          id="address"
                          value={address}
                          onChange={(e) => handleChange(e)}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="emergency_number">Emergency Number</label>
                        <input
                          type="text"
                          className="form-control"
                          name="emergency_contact"
                          id="emergency_contact"
                          value={emergency_contact}
                          onChange={(e) => handleChange(e)}
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="relation">Relation</label>
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
                  <a className="btn btn_primary btn-circle btn-active" href="/#">
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
        tabIndex="-1"
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
                        <label htmlFor="father_name">Father's Name</label>
                        <input
                          type="text"
                          name="father_name"
                          id="father_name"
                          className="form-control"
                          value={father_name}
                          onChange={(e) => handleChange(e)}
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <div className="form-group">
                          <label htmlFor="mother_name">Mother's Name</label>
                          <input
                            type="text"
                            name="mother_name"
                            id="mother_name"
                            className="form-control"
                            value={mother_name}
                            onChange={(e) => handleChange(e)}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="marital_status">Marital Status</label>
                        <br />
                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="marital_status"
                            id="marital_status1"
                            value="M"
                            onChange={(e) => handleChange(e)}
                          />
                          <label
                            className="form-check-label"
                            htmlFor="marital_status1"
                          >
                            Married
                          </label>
                        </div>
                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="marital_status"
                            id="S"
                            value="single"
                            onChange={(e) => handleChange(e)}
                          />
                          <label
                            className="form-check-label"
                            htmlFor="marital_status2"
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
                            value="D"
                            onChange={(e) => handleChange(e)}
                          />
                          <label
                            className="form-check-label"
                            htmlFor="marital_status2"
                          >
                            Divorced
                          </label>
                        </div>
                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="marital_status"
                            id="marital_status3"
                            value="W"
                            onChange={(e) => handleChange(e)}
                          />
                          <label
                            className="form-check-label"
                            htmlFor="marital_status3"
                          >
                            Widowed
                          </label>
                        </div>
                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="marital_status"
                            id="marital_status5"
                            value="O"
                            onChange={(e) => handleChange(e)}
                          />
                          <label
                            className="form-check-label"
                            htmlFor="marital_status5"
                          >
                            Other
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="educational_status">
                          Educational Status
                        </label>
                        <input
                          type="text"
                          name="educational_status"
                          id="educational_status"
                          className="form-control"
                          value={educational_status}
                          onChange={(e) => handleChange(e)}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="pan_number">PAN No.</label>
                        <input
                          type="text"
                          className="form-control"
                          name="pan_number"
                          id="pan_number"
                          value={pan_number}
                          onChange={(e) => handleChange(e)}
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="store_name">Store Name</label>
                        <input
                          type="text"
                          className="form-control"
                          name="store_name"
                          id="store_name"
                          value={store}
                          onChange={(e) => handleChange(e)}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="starting_date">Starting Date</label>
                        <input
                          type="date"
                          className="form-control"
                          name="joined_date"
                          id="joined_date"
                          value={joined_date}
                          onChange={(e)=> handleChange(e)}
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="Termination Date">Termination Date</label>
                        <input
                          type="date"
                          className="form-control"
                          name="termination_date"
                          id="termination_date"
                          value={termination_date}
                          onChange={(e) => handleChange(e)}
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
                      href="/#"
                    >
                      2
                    </a>
                  </div>
                </div>
              </div>
              <hr />

              <div className="row">
                <div className="col-md-12">
                  <button className="btn btn_primary mr-3" type="submit" onClick={(e) => handleEditSumbit(e)}>
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

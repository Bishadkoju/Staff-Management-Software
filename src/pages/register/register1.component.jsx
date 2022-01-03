import React, { Component } from "react";
import Background from "../../component/background/background.component";
import Header from "../../component/header/header.compoent";

import register1 from "../../assets/register1.svg";

import "./register.styles.scss";

// const ImgUpload = ({ name, onChange, src }) => (
//   <input name={name} type="file" onChange={onChange} />
// );

export default class Register extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const { inputs,handleChange, handleImageChange, imagePreviewUrl } = this.props;

    return (
      <>
        <Background />
        <Header />
        <div className="register-form-container">
          <form className="register-form" enctype="multipart/form-data">
            <div className="register-top-header">
              <h3 className="header-text bigfont"> Register</h3>
              <p className="login-text marginup smallfont">
                {" "}
                Get access to the management <br /> tool by loggin in
              </p>
            </div>
            <div className="registerOrder marginup">
              <img src={register1} className="registerImage" alt="register"></img>
            </div>
            <div className="form-title">
              <h3 className="formTitle">Personal Details</h3>
            </div>
            <div className="form-wrapper">
              <div className="form-input2 col-small">
                <input
                  type="text"
                  className=""
                  placeholder="Fist Name*"
                  required
                  name="first_name"
                  value={inputs["first_name"]}
                  onChange={handleChange}
                />
              </div>
              <div className="form-input2 col-small">
                <input
                  type="text"
                  className=""
                  placeholder="Middle Name*"
                  required
                  name="middle_name"
                  value={inputs["middle_name"]}
                  onChange={handleChange}
                />
              </div>
              <div className="form-input2 col-small">
                <input
                  type="text"
                  className=""
                  placeholder="Last Name*"
                  required
                  name="last_name"
                  value={inputs["last_name"]}
                  onChange={handleChange}
                />
              </div>

              <div className="form-input2 col-small">
                <select name="gender" value={inputs["gender"]} onChange={handleChange}>
                  <option value="">Gender</option>
                  <option value="M">Male</option>
                  <option value="F">Female</option>
                </select>
              </div>

              <div className="form-input2 col-md">
                <input
                  type="text"
                  onFocus={(e) => {
                    e.currentTarget.type = "date";
                    e.currentTarget.focus();
                  }}
                  placeholder="Date of Birth"
                  name="date_of_birth"
                  value={inputs["date_of_birth"]}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="secondPart">
              <div className="form-title">
                <h3 className="formTitle">Contact Details</h3>
              </div>
              <div className="form-wrapper">
                <div className="form-input2 col-big">
                  <input
                    type="email"
                    className=""
                    placeholder="Email Address*"
                    required
                    name="email"
                    value={inputs["email"]}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-input2 col-md">
                  <input
                    type="phone_number"
                    className=""
                    placeholder="Phone Number*"
                    required
                    name="phone_number"
                    value={inputs["phone_number"]}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-input2 col-md">
                  <input
                    type="text"
                    className=""
                    placeholder="Address*"
                    required
                    name="address"
                    value={inputs["address"]}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>

            <div className="secondPart">
              <div className="form-title">
                <h3 className="formTitle">Emergency Contact Details</h3>
              </div>
              <div className="form-wrapper">
                <div className="form-input2 col-md">
                  <input
                    type="text"
                    className=""
                    placeholder="Full Name"
                    required
                    name="emergency_full_name"
                    value={inputs["emergency_full_name"]}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-input2 col-md">
                  <input
                    type="text"
                    className=""
                    placeholder="Relation"
                    required
                    name="emergency_relation"
                    value={inputs["emergency_relation"]}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-input2 col-md">
                  <input
                    type="number"
                    className=""
                    placeholder="Contact No."
                    required
                    name="emergency_phone_number"
                    value={inputs["emergency_phone_number"]}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-input2 col-md">
                  <input
                    type="text"
                    className=""
                    placeholder="Address"
                    required
                    name="emergency_address"
                    value={inputs["emergency_address"]}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>

            <div className="button-container">
              <button onClick={this.continue} className="login-button">
                Next
              </button>
              <button className="login-button-2">Cancel</button>
            </div>
          </form>
        </div>
      </>
    );
  }
}

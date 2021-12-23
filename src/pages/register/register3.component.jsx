import React, { Component } from "react";
import axios from "axios";

import Background from "../../component/background/background.component";
import Header from "../../component/header/header.compoent";
import { Link } from "react-router-dom";
import image1 from "../../assets/profile.svg";
import register3 from "../../assets/registration3.svg";

import "./register.styles.scss";

export default class Register extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };

  register = (e) => {
    e.preventDefault();
    this.props.formSubmit();
  };


  render() {
    const { handleChange, handleImageChange, imagePreviewUrl } = this.props;

    return (
      <>
        <Background />
        <Header />

        <div className="register-form-container">
          <form className="register-form">
            <div className="register-top-header">
              <h3 className="header-text bigfont"> Register</h3>
              <p className="login-text marginup smallfont">
                {" "}
                Get access to the management <br /> tool by loggin in
              </p>
            </div>
            <div className="registerOrder marginup">
              <img src={register3} className="registerImage"></img>
            </div>
            <div className="form-title">
              <h3 className="formTitle">Management Details</h3>
            </div>
            <div className="form-wrapper">
              <div className="form-input2 col-big">
                <select
                  name="role"
                  onChange={handleChange}
                >
                  <option value="">Roles</option>
                  <option value="general-manager" disabled>General Manager</option>
                  <option value="store-manager" disabled>Store Manager</option>
                  <option value="employee" >Employee</option>
                </select>
              </div>

              <div className="form-input2 col-big">
                <input
                  type="text"
                  className=""
                  placeholder="Store*"
                  name="store"
                  onChange={handleChange}
                />
              </div>

              <div className="form-input2 col-md">
                <input
                  type="password"
                  className=""
                  placeholder="Password*"
                  name="password1"
                  onChange={handleChange}
                />
              </div>
              <div className="form-input2 col-md">
                <input
                  type="password"
                  className=""
                  placeholder="Confirm Password*"
                  name="password2"
                  onChange={handleChange}
                />
              </div>

              <div className="form-input2 col-big">
                <input
                  type="text"
                  onFocus={(e) => {
                    e.currentTarget.type = "date";
                    e.currentTarget.focus();
                  }}
                  placeholder="Starting Date*"
                  name="joined_date"
                  onChange={handleChange}
                />
              </div>
              <div className="form-input2 col-big">
                <input
                  type="text"
                  onFocus={(e) => {
                    e.currentTarget.type = "date";
                    e.currentTarget.focus();
                  }}
                  placeholder="Termination Date*"
                  name="termination_date"
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="button-container">
            <button onClick={this.props.formSubmit} className="login-button">
                Finish
              </button>
              <button onClick={this.props.prevStep} className="login-button-2">
                Back
              </button>
            </div>
          </form>
        </div>
      </>
    );
  }
}

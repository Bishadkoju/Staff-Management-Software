import React, { Component } from "react";
import axiosInstance from "../../HelperFunction/Axios";

import Background from "../../component/background/background.component";
import Header from "../../component/header/header.compoent";
import { Link } from "react-router-dom";
import image1 from "../../assets/profile.svg";
import register3 from "../../assets/registration3.svg";

import "./register.styles.scss";

export default class Register extends Component {

  constructor(props) {
    super(props);
    // Don't call this.setState() here!
    this.state = { stores: [] };
  }

  componentDidMount = async () => {
    const res = await axiosInstance.get("store/list");
    if(res.status === 200) {
      this.setState({
        stores: res.data
      })
      console.log(res.data)
    }
    
  }

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
          <form class="register-form">
            <div class="register-top-header">
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
                <select name="user_type" onChange={handleChange}>
                  <option value="">Roles</option>
                  <option value="2" >
                    General Manager
                  </option>
                  <option value="3" >
                    Store Manager
                  </option>
                  <option value="4">Employee</option>
                </select>
              </div>
              {
                console.log(this.state)
              }

              <div className="form-input2 col-big">
                <select
                  name="store"
                  onClick={handleChange}
                >
                  <option value="0">Store</option>
                  {this.state.stores.map((store, index) => (
                    <option key={index} value={store.id}>{store.name}</option>
                  ))}
                </select>
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

            <div class="button-container">
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

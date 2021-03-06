import React, { Component } from "react";
import Background from "../../component/background/background.component";
import Header from "../../component/header/header.compoent";
import register1 from "../../assets/registration2.svg";
import ImageUpload from "../../component/ImageUpload/ImageUpload";

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
  render() {
    const { inputs, handleChange, handleImageChange, imageSource } = this.props;

    return (
      <>
        <Background />
        <Header />
        <div className="register-form-container">
          <form className="register-form">
            <div className="register-top-header">
              <h3 className="header-text bigfont marginup-lg"> Register</h3>
              <p className="login-text marginup smallfont">
                {" "}
                Get access to the management <br /> tool by loggin in
              </p>
            </div>
            <div className="registerOrder marginup">
              <img
                src={register1}
                className="registerImage"
                alt="register2"
              ></img>
            </div>
            <div className="form-title">
              <h3 className="formTitle">General Details</h3>
            </div>
            <div className="form-wrapper">
              <div className="form-input2 col-md">
                <input
                  type="text"
                  className=""
                  placeholder="Father's Name*"
                  required
                  name="father_name"
                  value={inputs["father_name"]}
                  onChange={handleChange}
                />
              </div>
              <div className="form-input2 col-md">
                <input
                  type="text"
                  className=""
                  placeholder="Mother's Name*"
                  required
                  name="mother_name"
                  value={inputs["mother_name"]}
                  onChange={handleChange}
                />
              </div>
              <div className="form-input2 col-md">
                <select
                  name="marital_status"
                  value={inputs["marital_status"]}
                  onChange={handleChange}
                >
                  <option value="">Marital Status</option>
                  <option value="S">Single</option>
                  <option value="M">Married</option>
                  <option value="D">Divorced</option>
                  <option value="W">Widowed</option>
                  <option value="O">Other</option>
                </select>
              </div>

              <div className="form-input2 col-big">
                <input
                  type="text"
                  className=""
                  placeholder="Education Status*"
                  required
                  name="educational_status"
                  value={inputs["educational_status"]}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="secondPart">
              <div className="form-title">
                <h3 className="formTitle">Document Details</h3>
              </div>
              <div className="form-wrapper">
                <div className="form-input2 col-md">
                  <input
                    type="text"
                    className=""
                    placeholder="PAN No*"
                    required
                    name="pan_number"
                    value={inputs["pan_number"]}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-input2 col-md">
                  <input
                    type="text"
                    className=""
                    placeholder="Bank Account Number*"
                    name="account_number"
                    value={inputs["account_number"]}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-input2 col-md image3">
                  <ImageUpload
                    name="photo"
                    src={imageSource["photo"]}
                    value={inputs["photo"]}
                    label="Photo"
                    onChange={handleImageChange}
                  />

                  <ImageUpload
                    name="valid_document"
                    src={imageSource["valid_document"]}
                    value={inputs["valid_document"]}
                    label="Valid Document"
                    onChange={handleImageChange}
                  />
                </div>
                <div className="form-input2 col-md image3">
                  <ImageUpload
                    name="contract_paper"
                    src={imageSource["contract_paper"]}
                    value={inputs["contract_paper"]}
                    label="Contract"
                    onChange={handleImageChange}
                  />
                </div>
              </div>
            </div>

            <div className="button-container buttonRegister2">
              <button onClick={this.continue} className="login-button">
                Next
              </button>
              <button onClick={this.back} className="login-button-2">
                Back
              </button>
            </div>
          </form>
        </div>
      </>
    );
  }
}

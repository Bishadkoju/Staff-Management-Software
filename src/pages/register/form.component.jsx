import React, { useState } from "react";
import Register1 from "./register1.component";
import Register2 from "./register2.component";
import Register3 from "./register3.component";
import image1 from "../../assets/profile.svg";
import image2 from "../../assets/contract.svg";
import image3 from "../../assets/citizenship.svg";
import { baseURL } from "../../HelperFunction/Axios";
import axios from "axios";

const Form = () => {
  const [step, setStep] = useState(1);
  const [inputs, setInputs] = useState({});
  const [imageInputs, setImageInputs] = useState(null);
  const [imageSource, setImageSource] = useState(null);

  const nextStep = () => {
    setStep((currentStep) => currentStep + 1);
  };

  const prevStep = () => {
    setStep((currentStep) => currentStep - 1);
  };

  const handleChange = (event) => {
    console.log("change");
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleImageChange = (event) => {
    var image = event.target.files[0];
    var imageName = event.target.name;
    setImageInputs((prev) => ({ ...prev, [imageName]: image }));

    var reader = new FileReader();
    reader.readAsDataURL(image);
    reader.onloadend = function (e) {
      setImageSource({ [imageName]: reader.result });
    };
  };

  // On file upload (click the upload button)
  const formSubmit = (e) => {
    e.preventDefault();
    const data = {
      email: "user@example.com",
      first_name: "string",
      middle_name: "string",
      last_name: "string",
      password1: "hello@ccount",
      password2: "hello@ccount",
      father_name: "string",
      mother_name: "string",
      phone_number: 0,
      address: "string",
      pan_number: 0,
      gender: "M",
      date_of_birth: "2021-12-07",
      joined_date: "2021-12-07",
      termination_date: "2021-12-07",
      marital_status: "S",
      store: 1,
      educational_status: "string",
      account: "54645",
      emergency_full_name: "",
      emergency_phone_number: "",
      emergency_relation: "",
    };

    // Create an object of formData
    const formData = new FormData();

    // Update the formData object
    // formData.append(
    //   "citizenship",
    //   this.state.selectedFile,
    //   this.state.selectedFile.name
    // );

    Object.keys(data).map((key, index) => {
      formData.append(key, data[key]);
    });
    Object.keys(inputs).map((key, index) => {
      formData.append(key, inputs[key]);
    });
    if (imageInputs) {
      Object.keys(imageInputs).map((key, index) => {
        formData.append(key, imageInputs[key], imageInputs[key].name);
      });
    }

    // Details of the uploaded file
    console.log(imageInputs);

    // Request made to the backend api
    // Send formData object
    axios.post(baseURL + "/auth/register/employee/", formData);
  };
  const commonProps = {
    nextStep,
    prevStep,
    handleChange,
    handleImageChange,
    imageSource,
    formSubmit,
  };

  switch (step) {
    case 1:
      return <Register1 {...commonProps} />;
    case 2:
      return <Register2 {...commonProps} />;
    case 3:
      return <Register3 {...commonProps} />;
    default:
      return (
        <form>
          <input
            type="file"
            id="myFile"
            name="citizenship"
            encoding="multipart/form-data"
            onChange={handleImageChange}
          />

          <label>
            Enter your name:
            <input
              type="text"
              name="username"
              value={inputs.username || ""}
              onChange={handleChange}
            />
          </label>
          <label>
            Enter your age:
            <input
              type="number"
              name="age"
              value={inputs.age || ""}
              onChange={handleChange}
            />
          </label>
          <button onClick={formSubmit}>Submit</button>
        </form>
      );
  }
};

export default Form;

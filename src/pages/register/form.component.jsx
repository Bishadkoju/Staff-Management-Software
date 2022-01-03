import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Register1 from "./register1.component";
import Register2 from "./register2.component";
import Register3 from "./register3.component";

import axiosInstance from "../../HelperFunction/Axios";

const Form = () => {
  const [step, setStep] = useState(1);
  const [inputs, setInputs] = useState({});
  const [imageInputs, setImageInputs] = useState({});
  const [imageSource, setImageSource] = useState({});
  const navigate = useNavigate();

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
      setImageSource((prev)=>({...prev, [imageName]: reader.result }));
      };
    };

  // On file upload (click the upload button)
  const formSubmit = async (e) => {
    e.preventDefault();
    
    // const data = {
    //   email: "user@example.com",
    //   first_name: "string",
    //   middle_name: "string",
    //   last_name: "string",
    //   father_name: "string",
    //   mother_name: "string",
    //   phone_number: 0,
    //   address: "string",
    //   pan_number: 0,
    //   gender: "M",
    //   date_of_birth: "2021-12-07",
    //   joined_date: "2021-12-07",
    //   termination_date: "2021-12-07",
    //   marital_status: "S",
    //   store: 1,
    //   educational_status: "string",
    //   account: "54645",
    //   emergency_full_name: "afwefwef",
    //   emergency_phone_number: "98448",
    //   emergency_relation: "wfwewef",
    //   user_type: 4,
    //   account_number: 987897,
    //   photo: null,
    //   valid_document: null,
    //   contract_paper: null,
    //   emergency_email: "emergency@ene.com",
    //   emergency_address: "afwefwefwf",
    // };

    // Create an object of formData
    const formData = new FormData();

    // Object.keys(data).map((key, index) => {
    //   formData.append(key, data[key]);
    // });
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
    // axios.post(baseURL + "/auth/register/", formData);
    
    try {
      const res = await axiosInstance.post("/auth/register/", formData)
      console.log(res)
      if(res.status === 201) {
          navigate('/')
          alert("User successfully created")
          console.log('ok')
      }
    } catch (err) {
      console.log(err);
        alert("Something went wrong")
    }
  };

  const commonProps = {
    inputs,
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

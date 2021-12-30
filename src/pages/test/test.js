import axios from "axios";
import { baseURL } from "../../HelperFunction/Axios";


import React, { useState } from "react";

const  Test = () => {
  
  const [imageInputs, setImageInputs] = useState(null)
  const [imageSource, setImageSource] = useState(null)

  const handleImageInput = (event) => {
    var image = event.target.files[0];
    var imageName = event.target.name
    setImageInputs((prev) => ({...prev, [imageName]: image}))
    
    var reader = new FileReader();
    reader.readAsDataURL(image);
    reader.onloadend = function (e) {
      setImageSource({[imageName]: reader.result})
    }
  };



  // On file upload (click the upload button)
  const onFileUpload = (e) => {
    e.preventDefault()
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
    };

    const formData = new FormData();
    Object.keys(data).map((key, index) => {
      formData.append(key, data[key]);
    });
    Object.keys(imageInputs).map((key, index) => {
      formData.append(key, imageInputs[key], imageInputs[key].name)
    });

    axios.post(
      baseURL+"/auth/register/employee/",
      formData
    );
  };
  const fileData = (selectedFile, imgSrc) => {
    if (selectedFile) {
      return (
        <div>
          <h2>File Details:</h2>

          <p>File Name: {selectedFile.name}</p>

          <p>File Type: {selectedFile.type}</p>
          <img src={imgSrc} alt='preview'/>
          <p>
            Last Modified:{" "}
            {selectedFile.lastModifiedDate.toDateString()}
          </p>
        </div>
      );
    } else {
      return (
        <div>
          <br />
          <h4>Choose before Pressing the Upload button</h4>
        </div>
      );
    }
  };

    return (
      <div>
        <div>
          <form>
          <input name="citizenship" type="file" onChange={handleImageInput} />
          <input name="photo" type="file" onChange={handleImageInput} />
          <input name="contract_paper" type="file" onChange={handleImageInput} />
          <button onClick={onFileUpload}>Upload!</button>
          </form>
        </div>
        {
        //fileData(imageInputs.citizenship, imageSource.citizenship)
      }
      </div>
    );
}

export default Test;

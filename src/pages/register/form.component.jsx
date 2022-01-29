import React, { useState, useEffect } from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import _ from "lodash"

import ImageUpload from "../../component/ImageUpload/ImageUpload";

import Background from "../../component/background/background.component";
import Header from "../../component/header/header.compoent";
import register1 from "../../assets/register1.svg";
import register2 from "../../assets/registration2.svg";
import register3 from "../../assets/registration3.svg";

import "./register.styles.scss";

import axiosInstance, { baseURL } from "../../HelperFunction/Axios";
import { urlToFile, toDataURL, dataURLtoFile } from "../../HelperFunction/image";

const Form = () => {
  const [step, setStep] = useState(1);
  const [stores, setStores] = useState([]);
  const [edit, setEdit] = useState(false)
  const [imageInputs, setImageInputs] = useState({});
  const [imageSource, setImageSource] = useState({});
  const {id} = useParams()
  const navigate = useNavigate();
  const location = useLocation()
  const registerImage = [register1, register2, register3]

  const validationSchema = Yup.object().shape({
    first_name: Yup.string().required("First Name is required"),
    last_name: Yup.string().required("Last Name is required"),
    account_number: Yup.string().required("Account Number is required"),
    address: Yup.string().required("Address is required"),
    // contract_paper: Yup.mixed().required(" File is required"),
    date_of_birth: Yup.string().required(" Field is required"),
    educational_status: Yup.string().required(" Field is required"),
    email: Yup.string().required(" Field is required").email("Email not valid"),
    emergency_full_name: Yup.string().required(" Field is required"),
    emergency_phone_number: Yup.string().required(" Field is required"),
    father_name: Yup.string().required(" Field is required"),
    gender: Yup.string().required(" Field is required"),
    joined_date: Yup.string().required("Field  is required"),
    marital_status: Yup.string().required("Field  is required"),
    pan_number: Yup.string().required("Field  is required"),
    mother_name: Yup.string().required(" Field is required"),
    password1: Yup.string().required("Field  is required"),
    password2: Yup.string().required("Field  is required"),
    phone_number: Yup.string().required("Field  is required"),
    // photo: Yup.object().shape({
    //   length: Yup.number().min(1).required(),
    // }),
    store: Yup.number().required(" Field is required"),
    salary: Yup.number().required(" Field is required"),
    user_type: Yup.string().required(" Field is required"),
    // valid_document: Yup.mixed().required(" File is required"),
  });
  const formOptions = { resolver: yupResolver(validationSchema) };

  const {
    register,
    handleSubmit,
    setValue,
    trigger,
    formState: { errors },
  } = useForm(formOptions);

  useEffect(() => {
    fetchStores();
    console.log("id", id)
    let url = "https://cdn.shopify.com/s/files/1/0234/8017/2591/products/yc39.jpg"
    if (id) {
      setEdit(true)
      setValues(id)
    }
  }, []);

  const setUrlToFile = (url, name)=> {
    toDataURL(url)
    .then(dataUrl => {
       var fileData = dataURLtoFile(dataUrl, name);
      setValue(name, fileData)
       return fileData
     })
  }

  const setValues = async (id) => {
    const res = await axiosInstance.get(`user/${id}/view`);
    if (res.status === 200) {
      console.log(res.data);
      const selectedFields = [
        'email', 'first_name', 'middle_name', 'last_name', 'father_name', 'mother_name', 'phone_number', 'address',
        'pan_number', 'gender', 'date_of_birth', 'joined_date', 'termination_date', 'marital_status', 'store',
        'educational_status', 'user_type', 'account_number']
      var a = _.pick(res.data, selectedFields)
      console.log(a)
      Object.keys(a).map((key) => {
        setValue(key, a[key], {shouldValidate: false})
      })
      const imageFields = ['photo','valid_document', 'contract_paper']
      imageFields.map((name) => {
        // if (res.data[name]) {
          const url = baseURL + res.data[name]
          setImageSource((prev) => ({ ...prev, [name]: url }));
          setUrlToFile(url, name)
          console.log(name)
        // }
      })
      
      const { emergency_contact } = res.data
      if (emergency_contact) {
        setValue('emergency_email', emergency_contact.email)
        setValue('emergency_full_name', emergency_contact.full_name)
        setValue('emergency_phone_number', emergency_contact.contact_number)
        setValue('emergency_address', emergency_contact.address)
        setValue('emergency_relation', emergency_contact.relation)
      }
      // set dummy values to bypass validation
      setValue('password1', "ddummy")
      setValue('password2', "dddummy")
      setValue('salary', 12345)

      
      // emergency_email: "emergency@ene.com",
      // emergency_address: "afwefwefwf",
      // emergency_full_name: "afwefwef",
      // emergency_phone_number: "98448",
    }
  }

  const fetchStores = async () => {
    const res = await axiosInstance.get("store/list");
    if (res.status === 200) {
      setStores(res.data);
      console.log(res.data);
    }
  };

  const nextStep = (e) => {
    e.preventDefault();
    setStep((currentStep) => currentStep + 1);
  };

  const prevStep = (e) => {
    e.preventDefault();
    setStep((currentStep) => currentStep - 1);
  };

  const cancel = (e) => {
    navigate("/");
  };

  const handleImageChange = (event) => {
    var image = event.target.files[0];
    var imageName = event.target.name;
    setImageInputs((prev) => ({ ...prev, [imageName]: image }));

    var reader = new FileReader();
    reader.readAsDataURL(image);
    reader.onloadend = function (e) {
      setImageSource((prev) => ({ ...prev, [imageName]: reader.result }));
    };
  };

  // On file upload (click the upload button)
  const formSubmit = async (inputs) => {
    console.log(inputs);
    

    // const data = {
    //   email: "user@example2.com",
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
    //   password1: "hello@1234",
    //   password2: "hello@1234"
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
    console.log(formData)

    // Details of the uploaded file
    console.log(imageInputs, "hello");

    if (edit) {
      formData.append("emergency_contact.full_name", inputs['emergency_full_name'])
      formData.append("emergency_contact.contact_number", inputs['emergency_phone_number'])
      formData.append("emergency_contact.relation", inputs['emergency_relation'])
      formData.append("emergency_contact.email", inputs['emergency_email'])
      formData.append("emergency_contact.address", inputs['emergency_address'])
      formData.append("is_active", true)
      
      /* ................

        TEMPORARY SOLUTION

      */
        const res = await axiosInstance.put(`user/${id}/update/`, formData);
        console.log(res);
        navigate(`/admin/user/${id}/`);
        alert("User updated successfully");

    } else {
      try {
        const res = await axiosInstance.post("/auth/register/", formData);
        console.log(res);
        if (res.status === 201) {
          navigate("/");
          alert("User successfully created");
          console.log("ok");
        }
      } catch (err) {
        console.log(err.response.data);
        alertError(err);
      }
    }
  };
  const alertError = (err) => {
    var errorText = "";
      Object.keys(err.response.data).map((a)=>errorText +=`${a} - ${err.response.data[a]?.[0]}\n`)
      alert(errorText)
  }

  return (
    <>
      <Background />
      <Header />
      <div className="register-form-container">
        <form
          className="register-form"
          onSubmit={handleSubmit(formSubmit)}
          enctype="multipart/form-data"
        >
          <div className="register-top-header">
            <h3 className="header-text bigfont"> Register</h3>
            <p className="login-text marginup smallfont">
              {" "}
              Get access to the management <br /> tool by loggin in
            </p>
          </div>
          <div className="registerOrder marginup">
            <img src={registerImage[step-1]} className="registerImage" alt="register"></img>
          </div>

          {step === 1 && (
            <>
              <div className="form-title">
                <h3 className="formTitle">Personal Details</h3>
              </div>
              <div className="form-wrapper">
                <div className="form-input2 col-small">
                  <input
                    type="text"
                    placeholder="First Name*"
                    {...register("first_name")}
                  />
                  <div className="error">{errors.first_name?.message}</div>
                </div>
                <div className="form-input2 col-small">
                  <input
                    type="text"
                    placeholder="Middle Name"
                    {...register("middle_name")}
                  />
                  <div className="error">{errors.middle_name?.message}</div>
                </div>
                <div className="form-input2 col-small">
                  <input
                    type="text"
                    placeholder="Last Name*"
                    name="last_name"
                    {...register("last_name")}
                  />
                  <div className="error">{errors.last_name?.message}</div>
                </div>

                <div className="form-input2 col-small">
                  <select name="gender" {...register("gender")}>
                    <option value="">Gender</option>
                    <option value="M">Male</option>
                    <option value="F">Female</option>
                  </select>
                  <div className="error">{errors.gender?.message}</div>
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
                    {...register("date_of_birth")}
                  />
                  <div className="error">{errors.date_of_birth?.message}</div>
                </div>
              </div>

              <div className="secondPart">
                <div className="form-title">
                  <h3 className="formTitle">Contact Details</h3>
                </div>
                <div className="form-wrapper">
                  <div className="form-input2 col-big">
                    <input
                      placeholder="Email Address*"
                      name="email"
                      {...register("email")}
                    />
                    <div className="error">{errors.email?.message}</div>
                  </div>
                  <div className="form-input2 col-md">
                    <input
                      type="phone_number"
                      placeholder="Phone Number*"
                      name="phone_number"
                      {...register("phone_number")}
                    />
                    <div className="error">{errors.phone_number?.message}</div>
                  </div>

                  <div className="form-input2 col-md">
                    <input
                      type="text"
                      placeholder="Address*"
                      name="address"
                      {...register("address")}
                    />
                    <div className="error">{errors.address?.message}</div>
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
                      placeholder="Full Name"
                      name="emergency_full_name"
                      {...register("emergency_full_name")}
                    />
                    <div className="error">
                      {errors.emergency_full_name?.message}
                    </div>
                  </div>

                  <div className="form-input2 col-md">
                    <input
                      type="text"
                      placeholder="Relation"
                      name="emergency_relation"
                      {...register("emergency_relation")}
                    />
                    <div className="error">
                      {errors.emergency_relation?.message}
                    </div>
                  </div>
                  <div className="form-input2 col-md">
                    <input
                      type="number"
                      placeholder="Contact No."
                      name="emergency_phone_number"
                      {...register("emergency_phone_number")}
                    />
                    <div className="error">
                      {errors.emergency_phone_number?.message}
                    </div>
                  </div>

                  <div className="form-input2 col-md">
                    <input
                      type="text"
                      placeholder="Address"
                      name="emergency_address"
                      {...register("emergency_address")}
                    />
                    <div className="error">
                      {errors.emergency_address?.message}
                    </div>
                  </div>
                  <div className="form-input2 col-big">
                    <input
                      placeholder="Email Address*"
                      name="emergency_email"
                      {...register("emergency_email")}
                    />
                    <div className="error">{errors.emergency_email?.message}</div>
                  </div>
                </div>
              </div>
            </>
          )}

          {step === 2 && (
            <>
              <div className="form-title">
                <h3 className="formTitle">General Details</h3>
              </div>
              <div className="form-wrapper">
                <div className="form-input2 col-md">
                  <input
                    type="text"
                    placeholder="Father Name*"
                    {...register("father_name")}
                  />
                  <div className="error">{errors.father_name?.message}</div>
                </div>
                <div className="form-input2 col-md">
                  <input
                    type="text"
                    placeholder="Fist Name*"
                    {...register("mother_name")}
                  />
                  <div className="error">{errors.mother_name?.message}</div>
                </div>
                <div className="form-input2 col-md">
                  <select {...register("marital_status")}>
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
                    placeholder="Education Status"
                    {...register("educational_status")}
                  />
                  <div className="error">
                    {errors.educational_status?.message}
                  </div>
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
                      placeholder="PAN No*"
                      {...register("pan_number")}
                    />
                    <div className="error">{errors.pan_number?.message}</div>
                  </div>
                  <div className="form-input2 col-md">
                    <input
                      type="text"
                      placeholder="Bank Account Number*"
                      {...register("account_number")}
                    />

                    <div className="error">
                      {errors.account_number?.message}
                    </div>
                  </div>

                  <div className="form-input2 col-md image3">
                    <ImageUpload
                      name="photo"
                      register={register}
                      src={imageSource["photo"]}
                      label="Photo"
                      onChange={handleImageChange}
                      errors={
                        <div className="error">{errors.photo?.message}</div>
                      }
                    />

                    <ImageUpload
                      name="valid_document"
                      register={register}
                      src={imageSource["valid_document"]}
                      label="Valid Document"
                      onChange={handleImageChange}
                      errors={
                        <div className="error">
                          {errors.valid_document?.message}
                        </div>
                      }
                    />
                  </div>
                  <div className="form-input2 col-md image3">
                    <ImageUpload
                      name="contract_paper"
                      register={register}
                      src={imageSource["contract_paper"]}
                      label="Contract"
                      onChange={handleImageChange}
                      errors={
                        <div className="error">
                          {errors.contract_paper?.message}
                        </div>
                      }
                    />
                  </div>
                </div>
              </div>
            </>
          )}

          {step === 3 && (
            <>
              <div className="form-title">
                <h3 className="formTitle">Management Details</h3>
              </div>
              <div className="form-wrapper">
                <div className="form-input2 col-big">
                  <select {...register("user_type")}>
                    <option value="">Roles</option>
                    <option value="2">General Manager</option>
                    <option value="3">Store Manager</option>
                    <option value="4">Employee</option>
                  </select>
                  <div className="error">{errors.user_type?.message}</div>
                </div>

                <div className="form-input2 col-big">
                  <select
                    {...register("store")}
                  >
                    <option value="0">Store</option>
                    {stores.map((store, index) => (
                      <option key={index} value={store.id}>
                        {store.name}
                      </option>
                    ))}
                  </select>
                  <div className="error">{errors.store?.message}</div>
                </div>
                {!edit &&  
                  <div className="form-input2 col-md">
                    <input
                      type="password"
                      placeholder="Password*"
                      {...register("password1")}
                    />
                    <div className="error">{errors.password1?.message}</div>
                  </div>}
               { !edit &&
                <div className="form-input2 col-md">
                    <input
                      type="password"
                      placeholder="Confirm Password*"
                      {...register("password2")}
                    />
                    <div className="error">{errors.password2?.message}</div>
                  </div>}
                {!edit &&
                  <div className="form-input2 col-big">
                    <input
                      type="text"
                      placeholder="Salary*"
                      {...register("salary")}
                    />
                    <div className="error">{errors.salary?.message}</div>
                  </div>}

                <div className="form-input2 col-big">
                  <input
                    type="text"
                    onFocus={(e) => {
                      e.currentTarget.type = "date";
                      e.currentTarget.focus();
                    }}
                    placeholder="Starting Date*"
                    {...register("joined_date")}
                  />
                  <div className="error">{errors.joined_date?.message}</div>
                </div>
                <div className="form-input2 col-big">
                  <input
                    type="text"
                    onFocus={(e) => {
                      e.currentTarget.type = "date";
                      e.currentTarget.focus();
                    }}
                    placeholder="Termination Date"
                    {...register("termination_date")}
                  />
                  <div className="error">{errors.termination_date?.message}</div>
                </div>
              </div>
            </>
          )}

          <div className="button-container">
            {step <= 2 && (
              <button onClick={nextStep} className="login-button">
                Next
              </button>
            )}
            {true && (
              <button
                type="submit"
                onClick={() => {
                  if (errors.length !== 0) {
                    setStep(1);
                  }
                }}
                className="login-button"
              >
                Submit
              </button>
            )}

            {step >= 2 && (
              <button onClick={prevStep} className="login-button">
                Back
              </button>
            )}
            <button onClick={cancel} className="cancel-button">
              Cancel
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Form;

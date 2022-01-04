import React, { useState } from "react";
import axiosInstance from "../../HelperFunction/Axios";
import { Link } from "react-router-dom";
import { Navigate } from "react-router";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

import "./login.styles.scss";
import Header from "../../component/header/header.compoent";
import Background from "../../component/background/background.component";

const Login = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  const validationSchema = Yup.object().shape({
    email: Yup.string().required("Email is required").email("Email is invalid"),
    password: Yup.string()
      .required("Password is required"),
  });
  const formOptions = { resolver: yupResolver(validationSchema) };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm(formOptions);

  const onSubmit = async (data) => {

    try {
      const res = await axiosInstance.post("auth/login/", data);
      console.log(res);
      if (res.status === 200) {
        console.log("ok");
        localStorage.setItem("token", res.data.key);
        setLoggedIn(true);
      }
    } catch (err) {
      alert(err.response.data.non_field_errors[0]);
    }
  };
  if (loggedIn) {
    return <Navigate to={"/dashboard"} />;
  }
  return (
    <>
      <Background />
      <Header />
      <div className="form-container">
        <form onSubmit={handleSubmit(onSubmit)} className="login-form">
          <h3 className="header-text"> Log In</h3>
          <p className="login-text">
            {" "}
            Get access to the management <br /> tool by loggin in
          </p>
          <div className="form-input">
            <input {...register("email",{required: true})} placeholder="Email address" />
            <div className='error'>{errors.email?.message}</div>
            <input
              {...register("password",)}
              type="password"
              placeholder="Password"
            />
            <div className='error'>{errors.password?.message}</div>
          </div>

          <p className="forgot">
            <Link className="forgot-text" to={"/forgot"}>
              Forgot Password ?
            </Link>
            <br />
            <Link className="forgot-text" to={"/register"}>
              Register
            </Link>
          </p>

          <div className="button-container">
            <button className="login-button" type="submit">
              Login
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;

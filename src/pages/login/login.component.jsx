import React, { useState, useEffect } from "react";
import axiosInstance from "../../HelperFunction/Axios";
import { Link, useNavigate } from "react-router-dom";
import { Navigate } from "react-router";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

import "./login.styles.scss";
import Header from "../../component/header/header.compoent";
import Background from "../../component/background/background.component";
import { useAuth } from "../../context/auth";
import useLocalStorage from "../../hooks/useLocalStorage";

const Login = (props) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [userType, setUserType] = useState(0);
  const { setAuthTokens, setUser } = useAuth();
  const [redirect, setRedirect] = useLocalStorage("redirect");
  const navigate = useNavigate();

  useEffect(() => {
    test();
  }, []);

  const test = async () => {
    const res = await axiosInstance.get("user/self/view/");
    if (res) {
      console.log("success");
      const user = localStorage.getItem("user");
      if (user) {
        setUserType(JSON.parse(user).user_type);
      }
    }
    console.log(res);
  };
  const validationSchema = Yup.object().shape({
    email: Yup.string().required("Email is required").email("Email is invalid"),
    password: Yup.string().required("Password is required"),
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
        setAuthTokens(res.data.key);
        setUser(res.data.user);
        setUserType(res.data.user.user_type);
        setLoggedIn(true);
        if (redirect) {
          setRedirect(false);
          navigate(-1);
        }
      }
    } catch (err) {
      alert(err.response.data.non_field_errors[0]);
    }
  };

  if ([1,2,3].indexOf(userType) !== -1) {
    return <Navigate to="/admin" />;
  } else if (userType === 4) {
    return <Navigate to={"/dashboard"} />;
    
  }  else {
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
              <input
                {...register("email", { required: true })}
                placeholder="Email address"
              />
              <div className="error">{errors.email?.message}</div>
              <input
                {...register("password")}
                type="password"
                placeholder="Password"
              />
              <div className="error">{errors.password?.message}</div>
            </div>

            <p className="forgot">
              <Link className="forgot-text" to={"/forgot"}>
                Forgot Password ?
              </Link>
              <br />
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
  }
};

export default Login;

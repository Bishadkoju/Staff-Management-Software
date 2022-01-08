import React, { useEffect, useState } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import { useAuth } from "../context/auth";

// Dashboard
import Dashboard from "../pages/Dashboard/Dashboard";
import Earning from "../pages/Dashboard/Earning";
import Leave from "../pages/Dashboard/Leave";
import Profile from "../pages/Dashboard/Profile";
import CheckInOut from "../pages/Dashboard/CheckInOut";
import DashboardHandbook from "../pages/Dashboard/Handbook/DashboardHandbook";
import DashboardHandbookDetail from "../pages/Dashboard/Handbook/DashboardHandbookDetail";

import Test from "../pages/test/test";

// Admin Pages
import AdminDashboard from "../pages/Admin/AdminDashboard";
import AdminUsers from "../pages/Admin/AdminUsers";
import AdminEarning from "../pages/Admin/AdminEarning";
import AdminLeave from "../pages/Admin/AdminLeave";
import AdminProfile from "../pages/Admin/AdminProfile";

// Admin Handbook
import AdminHandbook from "../pages/Admin/Handbook/AdminHandbook";
import AdminHandbookDetail from "../pages/Admin/Handbook/AdminHandbookDetail";
import AdminHandbookCreate from "../pages/Admin/Handbook/AdminHandbookCreate";
import AdminHandbookEditor from "../pages/Admin/Handbook/AdminHandbookEditor";

import Register from "../pages/register/form.component"

// Not found
import NotFound from "../component/NotFound";
import useLocalStorage from "../hooks/useLocalStorage";

const userPageAccess = {
  1: [
    AdminDashboard,
    AdminEarning,
    AdminHandbook,
    AdminUsers,
    AdminLeave,
    AdminProfile,
    AdminHandbookDetail,
    AdminHandbookCreate,
    AdminHandbookEditor,
    Register
  ],
  2: [],
  3: [],
  4: [
    Dashboard,
    Earning,
    Leave,
    Profile,
    CheckInOut,
    DashboardHandbook,
    DashboardHandbookDetail,
  ],
};

const PrivateRoute = ({ Target }) => {
  const { authTokens, user } = useAuth();
  const [permittedd, setPermitted] = useState(false);
  const navigate = useNavigate();
  console.log(authTokens);
  useEffect(() => {
    if (!authTokens) {
      // user not logged in
      alert("you need to login first");
      navigate("/");
    } else {
      if (user && userPageAccess[user.user_type].indexOf(Target) !== -1) {
        setPermitted(true);
      } else {
        alert("Access Denied");
        navigate(-1);
      }
    }
  }, []);

  if (permittedd) {
    return <Target />;
  } else {
    return <></>;
  }
};

export default PrivateRoute;
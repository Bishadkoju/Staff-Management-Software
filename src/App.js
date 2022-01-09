import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React, { Fragment, useEffect, useState } from "react";

import Login from "./pages/login/login.component";
import PrivateRoute from "./component/PrivateRoute";
import { AuthContext } from "./context/auth";

import ForgotPassword from "./pages/forgot-password/forgot-password.component";
import Reset from "./pages/reset/reset.component";
import Home from "./pages/Home/home.component";
import Register from "./pages/register/form.component";

// Dashboard
import Dashboard from "./pages/Dashboard/Dashboard";
import Earning from "./pages/Dashboard/Earning";
import Leave from "./pages/Dashboard/Leave";
import Profile from "./pages/Dashboard/Profile";
import CheckInOut from "./pages/Dashboard/CheckInOut";
import DashboardHandbook from "./pages/Dashboard/Handbook/DashboardHandbook";
import DashboardHandbookDetail from "./pages/Dashboard/Handbook/DashboardHandbookDetail";

import Test from "./pages/test/test";

// Admin Pages
import AdminDashboard from "./pages/Admin/AdminDashboard";
import AdminUsers from "./pages/Admin/AdminUsers";
import AdminUserProfile from "./pages/Admin/AdminUserProfile";
import AdminEarning from "./pages/Admin/AdminEarning";
import AdminLeave from "./pages/Admin/AdminLeave";
import AdminProfile from "./pages/Admin/AdminProfile";

// Admin Handbook
import AdminHandbook from "./pages/Admin/Handbook/AdminHandbook";
import AdminHandbookDetail from "./pages/Admin/Handbook/AdminHandbookDetail";
import AdminHandbookCreate from "./pages/Admin/Handbook/AdminHandbookCreate";
import AdminHandbookEditor from "./pages/Admin/Handbook/AdminHandbookEditor";
import AdminFeedback from "./pages/Admin/AdminFeedback";
import AdminAttendance from "./pages/Admin/AdminAttendance";

// Not found
import NotFound from "./component/NotFound";
import useLocalStorage from "./hooks/useLocalStorage";
import { logout } from "./HelperFunction/loginHelper";

const  App = () => {
  const [authTokens, setAuthTokens] = useLocalStorage("token");
  const [user, setUser] = useLocalStorage("user");
  const logOut = () =>{
    setAuthTokens(null)
    logout()
  }
  const setTokens = (key) => {
    setAuthTokens({value:key})
  }

  const roleBasedPermissions = () => {
    const {user_type} = user
    const isAdmin = user_type === 1;
    const isGeneralManager = user_type === 2;
    const isStoreManager = user_type === 3;
    const isEmployee = user_type === 4;
    
    const isStoreManagerOrHigher = user_type <=3 && user_type >0
    const isGeneralManagerOrHigher = user_type <=2 && user_type >0

    return {
      isAdmin,
      isGeneralManager,
      isStoreManager,
      isEmployee,
      isStoreManagerOrHigher,
      isGeneralManagerOrHigher
    }
  }
    return (
      <AuthContext.Provider value ={{authTokens,logOut, setAuthTokens: setTokens, user, setUser, roleBasedPermissions}}>
        <Router>
          <Fragment>
          <Routes>
            <Route exact path="/" element={<Login />} />
            <Route
              exact
              path="/login"
              element={<Login />}
            />

            <Route exact path="/dashboard" element={<PrivateRoute Target={Dashboard}/>} />
            <Route exact path="/dashboard/earning" element={<PrivateRoute Target={Earning} />} />
            <Route exact path="/dashboard/leave" element={<PrivateRoute Target={Leave} />} />
            <Route exact path="/dashboard/profile" element={<PrivateRoute Target={Profile} />} />
            <Route exact path="/dashboard/check" element={<PrivateRoute Target={CheckInOut} />} />

            <Route exact path="/dashboard/handbook" element={<PrivateRoute Target={DashboardHandbook} />} />
            <Route exact path="/dashboard/handbook/:id" element={<PrivateRoute Target={DashboardHandbookDetail} />} />

            <Route exact path="/admin" element={<PrivateRoute Target={AdminDashboard} />} />
            <Route exact path="/admin/user" element={<PrivateRoute Target={AdminUsers} />} />
            <Route exact path="/admin/user/:id" element={<PrivateRoute Target={AdminUserProfile} />} />

            <Route exact path="/admin/attendance" element={<PrivateRoute Target={AdminAttendance} />} />
            <Route exact path="/admin/earning" element={<PrivateRoute Target={AdminEarning} />} />
            <Route exact path="/admin/leave" element={<PrivateRoute Target={AdminLeave} />} />
            <Route exact path="/admin/profile" element={<PrivateRoute Target={AdminProfile} />} />
            <Route exact path="/admin/feedback" element={<PrivateRoute Target={AdminFeedback} />} />

            <Route exact path="/admin/handbook" element={<PrivateRoute Target={AdminHandbook} />} />
            <Route exact path="/admin/handbook/create" element={<PrivateRoute Target={AdminHandbookCreate} />}/>
            <Route exact path="/admin/handbook/edit/:id" element={<PrivateRoute Target={AdminHandbookEditor} />}/>
            <Route exact path="/admin/handbook/:id" element={<PrivateRoute Target={AdminHandbookDetail} />} />

            <Route exact path="/register" element={<PrivateRoute Target={Register} />} />
            <Route exact path="/forgot" element={<ForgotPassword />} />
            <Route exact path="/home" element={<Home />}/>

            <Route path="/reset" element={<Reset />} />
            <Route path="/test" element={<Test />} />

            <Route path ='/*' element={<NotFound/>} />

          </Routes>
          </Fragment>
        </Router>
      </AuthContext.Provider>
    );
}

export default App;

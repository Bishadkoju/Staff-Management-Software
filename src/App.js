import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from "react";

import Login from "./pages/login/login.component";

// import Register1 from './pages/register/ready/register1.component';
// import Register2 from "./pages/register/ready/register2.component"
// import Register3 from "./pages/register/ready/register3.component"

import ForgotPassword from "./pages/forgot-password/forgot-password.component";
import Reset from "./pages/reset/reset.component";
import Home from "./pages/Home/home.component";
import Form from "./pages/register/form.component";

// Dashboard
import Dashboard from "./pages/Dashboard/Dashboard";
import Earning from "./pages/Dashboard/Earning";
import Leave from "./pages/Dashboard/Leave";
import Handbook from "./pages/Dashboard/Handbook";
import Profile from "./pages/Dashboard/Profile";
import CheckInOut from "./pages/Dashboard/CheckInOut";

// Admin Pages
import AdminDashboard from "./pages/Admin/AdminDashboard";
import AdminUsers from "./pages/Admin/AdminUsers";
import AdminEarning from "./pages/Admin/AdminEarning";
import AdminLeave from "./pages/Admin/AdminLeave";
import AdminHandbook from "./pages/Admin/AdminHandbook";
import AdminProfile from "./pages/Admin/AdminProfile";

import Test from "./pages/test/test";


class App extends React.Component {
  state = {};


  setUser = (user) => {
    this.setState({
      user: user,
    });
  };
  render() {
    return (
      <div>
        <Router>
          <Routes>
            <Route exact path="/" element={<Login />} />
            <Route
              exact
              path="/login"
              element={<Login setUser={this.setUser} />}
            />
            <Route exact path="/dashboard" element={<Dashboard />} />
            <Route exact path="/earning" element={<Earning />} />
            <Route exact path="/leave" element={<Leave />} />
            <Route exact path="/handbook" element={<Handbook />} />
            <Route exact path="/profile" element={<Profile />} />
            <Route exact path="/check" element={<CheckInOut />} />


            <Route exact path="/admin" element={<AdminDashboard />} />
            <Route exact path="/admin/user" element={<AdminUsers />} />
            <Route exact path="/admin/earning" element={<AdminEarning />} />
            <Route exact path="/admin/leave" element={<AdminLeave />} />
            <Route exact path="/admin/handbook" element={<AdminHandbook />} />
            <Route exact path="/admin/profile" element={<AdminProfile />} />

            <Route exact path="/register" element={<Form />} />
            <Route exact path="/forgot" element={<ForgotPassword />} />
            <Route
              exact
              path="/home"
              element={<Home user={this.state.user} />}
            />

            <Route path="/reset" element={<Reset />} />
            <Route path="/test" element={<Test />} />
          </Routes>
        </Router>
      </div>
    );
  }
}

export default App;

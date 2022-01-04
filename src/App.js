import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from "react";

import Login from "./pages/login/login.component";

import ForgotPassword from "./pages/forgot-password/forgot-password.component";
import Reset from "./pages/reset/reset.component";
import Home from "./pages/Home/home.component";
import Form from "./pages/register/form.component";

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

// Not found
import NotFound from "./component/NotFound";

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
            <Route exact path="/dashboard/earning" element={<Earning />} />
            <Route exact path="/dashboard/leave" element={<Leave />} />
            <Route exact path="/dashboard/profile" element={<Profile />} />
            <Route exact path="/dashboard/check" element={<CheckInOut />} />

            <Route exact path="/dashboard/handbook" element={<DashboardHandbook />} />
            <Route exact path="/dashboard/handbook/:id" element={<DashboardHandbookDetail />} />

            <Route exact path="/admin" element={<AdminDashboard />} />
            <Route exact path="/admin/user" element={<AdminUsers />} />
            <Route exact path="/admin/user/:id" element={<AdminUserProfile />} />

            <Route exact path="/admin/earning" element={<AdminEarning />} />
            <Route exact path="/admin/leave" element={<AdminLeave />} />
            <Route exact path="/admin/profile" element={<AdminProfile />} />

            <Route exact path="/admin/handbook" element={<AdminHandbook />} />
            <Route
              exact
              path="/admin/handbook/create"
              element={<AdminHandbookCreate />}
            />
            <Route
              exact
              path="/admin/handbook/edit/:id"
              element={<AdminHandbookEditor />}
            />
            <Route
              exact
              path="/admin/handbook/:id"
              element={<AdminHandbookDetail />}
            />

            <Route exact path="/register" element={<Form />} />
            <Route exact path="/forgot" element={<ForgotPassword />} />
            <Route
              exact
              path="/home"
              element={<Home user={this.state.user} />}
            />

            <Route path="/reset" element={<Reset />} />
            <Route path="/test" element={<Test />} />

            <Route component={NotFound} />

          </Routes>
        </Router>
      </div>
    );
  }
}

export default App;

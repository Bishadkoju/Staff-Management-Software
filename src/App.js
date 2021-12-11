import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from "react";
import axios from "axios";

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

class App extends React.Component {
  state = {};

  componentDidMount() {
    axios.get("user").then(
      (res) => {
        this.setUser(res.data);
      },
      (err) => {
        console.log(err);
      }
    );
  }

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

            <Route exact path="/register" element={<Form />} />
            <Route exact path="/forgot" element={<ForgotPassword />} />
            <Route
              exact
              path="/home"
              element={<Home user={this.state.user} />}
            />

            <Route path="/reset" element={<Reset />} />
          </Routes>
        </Router>
      </div>
    );
  }
}

export default App;

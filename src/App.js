
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import React from 'react';
import axios from 'axios';

import Login from './pages/login/login.component';

// import Register1 from './pages/register/ready/register1.component';
// import Register2 from "./pages/register/ready/register2.component"
// import Register3 from "./pages/register/ready/register3.component"
import ForgotPassword from './pages/forgot-password/forgot-password.component';
import Reset from './pages/reset/reset.component';
import Home from './pages/Home/home.component';
import Form from './pages/register/form.component';
import Dashboard from './pages/dashboard/dashboard.component';

class App extends React.Component {
  
  state={}

  setUser = user => {
      this.setState({
      user: user
  })
  }
  render(){
  return (
    <div>

        <Router>
          <Routes>
            <Route exact path="/" element = {<Login />} />
            <Route exact path="/login" element = {<Login setUser={this.setUser}/>} />
            <Route exact path="/dashboard" element = {<Dashboard user = {this.state.user}/>} />
            
            <Route exact path="/register" element = {<Form />} />
            <Route exact path="/forgot" element = {<ForgotPassword />} />
            <Route exact path="/home" element = {<Home user ={this.state.user}/>} />
            <Route path="/reset" element = {<Reset />} />
        </Routes>
      </Router>

      
    </div>
  );
  }
}

export default App;

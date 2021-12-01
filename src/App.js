
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import React from 'react';
import axios from 'axios';

import Login from './pages/login/login.component';
import Register from './pages/register/register.component';
import Register1 from './pages/register/register1.component';
import Register2 from "./pages/register/register2.component"
import Register3 from "./pages/register/register3.component"
import ForgotPassword from './pages/forgot-password/forgot-password.component';
import Reset from './pages/reset/reset.component';
import Home from './pages/Home/home.component';

class App extends React.Component {
  
  state={}

  componentDidMount(){

      axios.get("user").then(
          res => {
              this.setUser(res.data)
          },
          err => {
              console.log(err);
          }
      )
  }

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
            <Route exact path="/" element = {<Try />} />
            <Route exact path="/login" element = {<Login setUser={this.setUser}/>} />
            
            <Route exact path="/register1" element = {<Register1 />} />
            <Route exact path="/register2" element = {<Register2 />} />
            <Route exact path="/register3" element = {<Register3 />} />
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

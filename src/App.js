
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import React from 'react';
import SignIn from './component/sign-in/sign-in.component';
import Login from './component/login/login.component';
import Register from './component/register/register.component';
import ForgotPassword from './component/forgot-password/forgot-password.component';
import Reset from './component/reset/reset.component';
class App extends React.Component {
  render(){
  return (
    <div>

        <Router>
          <Routes>
            <Route exact path="/" element = {<Register />} />
            <Route exact path="/login" element = {<Login />} />
            <Route exact path="/register" element = {<Register />} />
            <Route exact path="/forgot" element = {<ForgotPassword />} />
            <Route exact path="/reset" element = {<Reset />} />
        </Routes>
      </Router>

      
    </div>
  );
  }
}

export default App;

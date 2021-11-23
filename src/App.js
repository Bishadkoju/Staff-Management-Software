
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import React from 'react';
import SignIn from './component/sign-in/sign-in.component';
import Login from './pages/login/login.component';
import Register from './pages/register/register.component';
import ForgotPassword from './pages/forgot-password/forgot-password.component';
import Reset from './pages/reset/reset.component';
class App extends React.Component {
  render(){
  return (
    <div>

        <Router>
          <Routes>
            <Route exact path="/" element = {<Login />} />
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

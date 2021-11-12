
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import React from 'react';
import SignIn from './component/sign-in/sign-in.component';
import Login from './component/sign-in/sign-in.component';
class App extends React.Component {
  render(){
  return (
    <div>

        <Router>
          <Routes>
            <Route exact path="/" element = {<SignIn />} />
            <Route exact path="/signin" element = {<SignIn />} />
        </Routes>
      </Router>

      
    </div>
  );
  }
}

export default App;

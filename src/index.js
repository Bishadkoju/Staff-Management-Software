import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import axios from "axios"

axios.defaults.baseURL = "http://127.0.0.1:8000/api/v1/auth/"
axios.defaults.headers.common["Authorization"] = "Token " + localStorage.getItem("token")

// localStorage.setItem("token", "6677ebfbe105a8bbbbdd74dd9030309e1d0b7033")

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();

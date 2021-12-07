import axiosInstance from "../../HelperFunction/Axios";
import React, { Component, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Dropdown } from "react-bootstrap";

const Home = (props) => {
  const [hasCheckedIn, setCheckedIn] = useState(false);
  const [stores, setStores] = useState([]);
  const [selectedStore, setSelectedStore] = useState('0');

  useEffect(() => {
    setAllStores();
  }, []);

  const setAllStores = async () => {
    const res = await axiosInstance.get("store/all");
    if (res.status === 200) {
    }
    console.log(res.data);
    setStores(res.data);
  };

  const checkInStrings = {
    true: "Check Out",
    false: "Check In",
  };
  const checkIn = async() => {
    console.log("check in");
    const data = {
      "checked_in": true,
      "store": selectedStore
    }
    try {
      const res = await axiosInstance.post("employee/check_in",data)
      console.log(res)
      if(res.status === 200) {
          console.log('ok')
      }
    } catch (err) {
      console.log(err);
    }
  };

  const checkOut = async () => {
    console.log("check out");
    const data = {
      "checked_in": false,
      "store": selectedStore
    }
    try {
      const res = await axiosInstance.post("employee/check_out",data)
      console.log(res)
      if(res.status === 200) {
          console.log('ok')
      }
    } catch (err) {
      console.log(err);
    }
  };

  const toggleCheckIn = () => {
    console.log("toggle");
    hasCheckedIn ? checkOut() : checkIn();
    setCheckedIn(!hasCheckedIn);
  };
  const register = () => {
    console.log("register");
  };
  return (
    <div className="container">
      <Link to="/register">
        <button onClick={register} className="login-button">
          Register
        </button>
      </Link>
      <br />
      <br />
      <button disabled={selectedStore==='0'} onClick={toggleCheckIn} className="login-button">
        {checkInStrings[hasCheckedIn]}
      </button>
      <select disabled={hasCheckedIn} name="store" onClick={(a) => setSelectedStore(a.target.value)}>
        <option value="0">Store</option>
        {stores.map((store, index) => (
          <option value={store[0]}>{store[1]}</option>
        ))}
      </select>
    </div>
  );
};

export default Home;

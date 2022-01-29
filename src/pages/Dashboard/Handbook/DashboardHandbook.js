import React, { useState, useEffect } from "react";
import Layout from "../../../HOC/Layout";

import HandbookSideNav from "../../../component/Handbook/Dashboard/HandbookSideNav";
import HandbookBasicInfo from "../../../component/Handbook/HandbookBasicInfo";

import axiosInstance from "../../../HelperFunction/Axios";
import { useLocation } from "react-router-dom";

const Handbook = () => {
  const [handbooks, setHandbooks] = useState([]);

  //assigning location variable
  const location = useLocation();

  //destructuring pathname from location
  const { pathname } = location;

  //Javascript split method to get the name of the path in array
  const splitLocation = pathname.split("/");

  useEffect(() => {
    const getHandbook = async () => {
      await axiosInstance
        .get("/handbook/list/")
        .then((res) => {
          setHandbooks(res.data.handbooks);
          console.log(res.data.handbooks);
        })
        .catch((err) => {
          console.log(err);
        });
    };

    getHandbook();
  }, []);

  return (
    <div className="body">
      <Layout />
      <div className="container">
        <div className="row">
          <HandbookSideNav handbooks = {handbooks} splitLocation = {splitLocation} />
          <HandbookBasicInfo />
        </div>
      </div>
    </div>
  );
};

export default Handbook;

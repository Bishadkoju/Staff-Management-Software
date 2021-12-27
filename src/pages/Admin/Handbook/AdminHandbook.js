import React, { useState, useEffect } from "react";
import AdminLayout from "../../../HOC/AdminLayout";
import AdminSideNavBar from "../../../component/Bar/AdminSideNavBar";
import axiosInstance from "../../../HelperFunction/Axios";
import HandbookSideNav from "../../../component/Handbook/HandbookSideNav";
import HandbookDetail from "../../../component/Handbook/HandbookDetail";
import HandbookBasicInfo from "../../../component/Handbook/HandbookBasicInfo";

import { useLocation } from "react-router-dom";


const AdminHandbook = () => {
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
      <AdminLayout />
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-2">
            <AdminSideNavBar />
          </div>
          <HandbookSideNav handbooks = {handbooks} splitLocation = {splitLocation} />
          {/* <HandbookDetail splitLocation = {splitLocation}/> */}
          <HandbookBasicInfo />
        </div>
      </div>
    </div>
  );
};

export default AdminHandbook;

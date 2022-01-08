import React, { useState, useEffect } from "react";
import AdminLayout from "../../HOC/AdminLayout";
import AdminSideNavBar from "../../component/Bar/AdminSideNavBar";
import InfoBar from "../../component/Bar/InfoBar";
import Stores from "../../component/Admin/Stores";

import axiosInstance from "../../HelperFunction/Axios";

const AdminDashboard = () => {
  const [storeList, setStoreList] = useState([]);

  useEffect(() => {
    const getStoreList = async () => {
      await axiosInstance
        .get(`/store/list/`)
        .then((res) => {
          console.log(res.data);
          setStoreList(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getStoreList();
  }, []);

  const displayStoreList = () => {
    let result = [];
    if (storeList) {
      storeList.map((store) => {
        result.push(<Stores key={store.id} store = {store} />);
      });
    }
    return result;
  };

  return (
    <div className="body">
      <AdminLayout />
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-2">
            <AdminSideNavBar />
          </div>
          <div className="col-md-10">
            <h2>Dashboard</h2>
            <div className="row mt-4">
              <div className="col-md-3">
                <InfoBar title="ACTIVE" value="2040 Hours" />
              </div>
              <div className="col-md-3">
                <InfoBar title="MY EARNING" value="29.4%" />
              </div>
              <div className="col-md-3">
                <InfoBar title="APPEARANCE" value="20 Days" />
              </div>
              <div className="col-md-3">
                <InfoBar title="LEAVE" value="4 Days" />
              </div>
            </div>

            <div className="row mb-3">
              <div className="col-md-12 mt-4">
                <div className="div_format">
                  <span className="heading_text">Stores Details</span>
                  <hr />
                  {displayStoreList()}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;

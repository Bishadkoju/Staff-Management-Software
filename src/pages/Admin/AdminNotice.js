import React, { useState, useEffect } from "react";
import axiosInstance from "../../HelperFunction/Axios";
import AdminLayout from "../../HOC/AdminLayout";
import AdminSideNavBar from "../../component/Bar/AdminSideNavBar";

import CreateNoticeModal from "../../component/Admin/AdminNotice/CreateNoticeModal";
import AdminNoticeTable from "../../component/Admin/AdminNotice/AdminNoticeTable";

function AdminNotice() {
  const [notices, setNotices] = useState([]);

  useEffect(() => {
    const getNotices = async () => {
      await axiosInstance
        .get(`/notice/all/`)
        .then((res) => {
          setNotices(res.data);
        })
        .catch((err) => {});
    };

    getNotices();
  }, []);

  return (
    <div className="body">
      <AdminLayout />
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-2">
            <AdminSideNavBar />
          </div>
          <div className="col-md-10">
            <div className="row">
              <div className="col-md-12 d-flex justify-content-between pt-3">
                <div>
                  <h2>Notice</h2>
                </div>
                <div>
                  <button
                    className="btn btn_primary"
                    data-toggle="modal"
                    data-target="#createNoticeModal"
                  >
                    <i className="fa fa-plus pr-2" aria-hidden="true"></i>
                    Add Notice
                  </button>
                </div>
              </div>
            </div>
            <div className="div_format">
                <AdminNoticeTable notices = {notices}/>
            </div>
          </div>
        </div>
      </div>
      <CreateNoticeModal />
    </div>
  );
}

export default AdminNotice;

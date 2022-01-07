import React, { useState, useEffect } from "react";
import AdminFeedbackTable from "../../component/Admin/AdminUser/AdminFeedbackTable";
import axiosInstance from "../../HelperFunction/Axios";
import AdminLayout from "../../HOC/AdminLayout";
import AdminSideNavBar from "../../component/Bar/AdminSideNavBar";

const AdminFeedback = () => {
  const [feedback, setFeedback] = useState([]);

  useEffect(() => {
    const getFeedback = async () => {
      await axiosInstance
        .get(`/feedback/list/`)
        .then((res) => {
          console.log("first");
          console.log(res);
          setFeedback(res.data.feedbacks);
        })
        .catch((err) => {
          console.log(err);
        });
    };

    getFeedback();
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
            <h2>Feedback</h2>
            <div className="div_format">
              <AdminFeedbackTable feedback={feedback} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminFeedback;

import React, { useState, useEffect } from "react";
import AdminLayout from "../../../HOC/AdminLayout";
import AdminSideNavBar from "../../../component/Bar/AdminSideNavBar";
import axiosInstance from "../../../HelperFunction/Axios";
import HandbookSideNav from "../../../component/Handbook/HandbookSideNav";

const AdminHandbook = () => {
  const [handbooks, setHandbooks] = useState([]);

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
          <HandbookSideNav handbooks = {handbooks} />
          <div className="col-md-8 ">
            <div className="bg-white">
              <div className="p-2">
                <h1>HEADING 1</h1>
                <hr />
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </p>

                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminHandbook;

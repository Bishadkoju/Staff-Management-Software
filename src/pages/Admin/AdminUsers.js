import React from "react";
import AdminLayout from "../../HOC/AdminLayout";
import AdminSideNavBar from "../../component/Bar/AdminSideNavBar";
import AdminUserHeading from "../../component/Admin/AdminUser/AdminUserHeading";
import AdminUserTable from "../../component/Admin/AdminUser/AdminUserTable";

const AdminUsers = () => {
  return (
    <div className="body">
      <AdminLayout />
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-2">
            <AdminSideNavBar />
          </div>
          <div className="col-md-10">
            <AdminUserHeading />
            <AdminUserTable />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminUsers;

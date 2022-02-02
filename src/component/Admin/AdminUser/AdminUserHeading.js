import React from "react";
import { useAuth } from "../../../context/auth";
import AdminRegisterModal from "./Modal/AdminRegisterModal";

const AdminUserHeading = () => {
  const { roleBasedPermissions } = useAuth();
  const { isGeneralManagerOrHigher, isAdmin } = roleBasedPermissions();
  return (
    <div className="d-flex justify-content-between mt-3">
      <div>
        <h2>Users</h2>
      </div>
      {isAdmin && (
        <div>
          <div className="btn btn_primary" data-target="#adminRegisterModal" data-toggle="modal">+ Register admin</div>
        </div>
      )}
      {isGeneralManagerOrHigher && (
        <div>
          <a href="/register">
            <div className="btn btn_primary">+ Register user</div>
          </a>
        </div>
      )}

      <AdminRegisterModal />
    </div>
  );
};

export default AdminUserHeading;

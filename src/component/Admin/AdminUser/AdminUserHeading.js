import React from "react";
import { useAuth } from "../../../context/auth";

const AdminUserHeading = () => {
  const { roleBasedPermissions } = useAuth();
  const { isGeneralManagerOrHigher } = roleBasedPermissions();
  return (
    <div className="d-flex justify-content-between mt-3">
      <div>
        <h2>Users</h2>
      </div>
      {isGeneralManagerOrHigher && (
        <div>
          <a href="/register" className="btn btn_primary">
            <span className="pr-2">+</span>
            <span>Register a user</span>
          </a>
        </div>
      )}
    </div>
  );
};

export default AdminUserHeading;

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
          <a href="/register">
            <div className="btn btn_primary">+ Register a user</div>
          </a>
        </div>
      )}
    </div>
  );
};

export default AdminUserHeading;

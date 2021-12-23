import React from "react";

const AdminUserHeading = () => {
  return (
    <div className="d-flex justify-content-between mt-3">
      <div>
        <h2>Users</h2>
      </div>
      <div>
        <a href="/register" className="btn btn_primary">
          <span className="pr-2">+</span>
          <span>Register a user</span>
        </a>
      </div>
    </div>
  );
};

export default AdminUserHeading;

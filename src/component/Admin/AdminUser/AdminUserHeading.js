import React from "react";

const AdminUserHeading = () => {
  return (
    <div class="d-flex justify-content-between mt-3">
      <div>
        <h2>Users</h2>
      </div>
      <div>
        <a href="/register" class="btn btn_primary">
          <span class="pr-2">+</span>
          <span>Register a user</span>
        </a>
      </div>
    </div>
  );
};

export default AdminUserHeading;

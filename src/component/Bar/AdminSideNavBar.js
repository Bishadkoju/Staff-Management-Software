import React from "react";

const AdminSideNavBar = () => {
  return (
    <div class="bg-white side-menu pr-3 pt-3">
      <div
        class="
                mb-2
                active-side-nav
                pl-2
                py-1
                d-flex
                justify-content-start
                admin_nav
              "
      >
        <div class="div_flex_icon">
          <i class="fa fa-user" aria-hidden="true"></i>
        </div>
        <div>
          <span>Dashboard</span>
        </div>
      </div>

      <div class="mb-2 pl-2 d-flex justify-content-start admin_nav">
        <div class="div_flex_icon">
          <i class="fa fa-user" aria-hidden="true"></i>
        </div>
        <div>
          <span>User</span>
        </div>
      </div>
      <div class="mb-2 pl-2 d-flex justify-content-start admin_nav">
        <div class="div_flex_icon">
          <i class="fa fa-usd" aria-hidden="true"></i>
        </div>
        <div>
          <span>My Earning</span>
        </div>
      </div>
      <div class="mb-2 pl-2 d-flex justify-content-start admin_nav">
        <div class="div_flex_icon">
          <i class="fa fa-sign-out" aria-hidden="true"></i>
        </div>
        <div>
          <span>My Leave</span>
        </div>
      </div>

      <div class="mb-2 pl-2 d-flex justify-content-start admin_nav">
        <div class="div_flex_icon">
          <i class="fa fa-archive" aria-hidden="true"></i>
        </div>
        <div>
          <span>Stores</span>
        </div>
      </div>
    </div>
  );
};

export default AdminSideNavBar;

import React from "react";
import IncreaseSalaryModal from "./IncreaseSalaryModal";
import AssignNewStore from "./AssignNewStore";

const ActionMenuTable = () => {
  return (
    <React.Fragment>
      <div class="dropdown show">
        <a
          class="dropdown-toggle drop_menu_no_down_arrow"
          href="#"
          role="button"
          id="dropdownMenuLink"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
        </a>

        <div
          class="dropdown-menu dropdownMenuAdminTable"
          aria-labelledby="dropdownMenuLink"
        >
          <a
            class="dropdown-item"
            href="#increaseSalaryModal"
            data-toggle="modal"
            data-target="#increaseSalaryModal"
          >
            <div
              class="
                dropdown_item_desc
                d-flex
                justify-content-start
              "
            >
              <div class="icon div_flex_icon">
                <i class="fa fa-usd" aria-hidden="true"></i>
              </div>
              <div>
                <span class="heading_text">Increase Salary</span>
                <br />
              </div>
            </div>
          </a>
          <a class="dropdown-item" href="#">
            <div
              class="
                dropdown_item_desc
                d-flex
                justify-content-start
              "
            >
              <div class="icon div_flex_icon">
                <i class="fa fa-line-chart" aria-hidden="true"></i>
              </div>
              <div>
                <span class="heading_text">Increase Commission</span>
                <br />
              </div>
            </div>
          </a>
          <a class="dropdown-item" href="#">
            <div
              class="
                dropdown_item_desc
                d-flex
                justify-content-start
              "
            >
              <div class="icon div_flex_icon">
                <i class="fa fa-usd" aria-hidden="true"></i>
              </div>
              <div>
                <span class="heading_text">Increase Bonus</span>
                <br />
              </div>
            </div>
          </a>
          <hr />
          <a
            class="dropdown-item"
            href="#assignNewStore"
            data-toggle="modal"
            data-target="#assignNewStore"
          >
            <div
              class="
                dropdown_item_desc
                d-flex
                justify-content-start
              "
            >
              <div class="icon div_flex_icon">
                <i class="fa fa-usd" aria-hidden="true"></i>
              </div>
              <div>
                <span class="heading_text">Assign New Store</span>
                <br />
              </div>
            </div>
          </a>
          <hr />
          <a class="dropdown-item" href="#">
            <div
              class="
                              dropdown_item_desc
                              d-flex
                              justify-content-start
                            "
            >
              <div class="icon div_flex_icon">
                <i class="fa fa-usd" aria-hidden="true"></i>
              </div>
              <div>
                <span class="heading_text">Edit Profile</span>
                <br />
              </div>
            </div>
          </a>
          <a class="dropdown-item" href="#">
            <div
              class="
                dropdown_item_desc
                d-flex
                justify-content-start
              "
            >
              <div class="icon div_flex_icon">
                <i class="fa fa-trash-o" aria-hidden="true"></i>
              </div>
              <div>
                <span class="heading_text text-danger">Delete</span>
                <br />
              </div>
            </div>
          </a>
        </div>
      </div>
      <IncreaseSalaryModal />
      <AssignNewStore />
    </React.Fragment>
  );
};

export default ActionMenuTable;

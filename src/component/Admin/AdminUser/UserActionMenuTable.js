import React from "react";
import IncreaseSalaryModal from "./Modal/IncreaseSalaryModal";
import IncreaseCommisionModal from "./Modal/IncreaseCommisionModal";
import IncreaseBonusModal from "./Modal/IncreaseBonusModal";

import AssignNewStore from "./Modal/AssignNewStore";

const ActionMenuTable = (props) => {
  const userId = props.userId;

  return (
    <React.Fragment>
      <div className="dropdown show">
        <a
          className="dropdown-toggle drop_menu_no_down_arrow"
          href="/#"
          role="button"
          id="dropdownMenuLink"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          <i className="fa fa-ellipsis-v" aria-hidden="true"></i>
        </a>

        <div
          className="dropdown-menu dropdownMenuAdminTable"
          aria-labelledby="dropdownMenuLink"
        >
          <a
            className="dropdown-item"
            href={`#increaseSalaryModal${userId}`}
            data-toggle="modal"
            data-target={`#increaseSalaryModal${userId}`}
          >
            <div
              className="
                dropdown_item_desc
                d-flex
                justify-content-start
              "
            >
              <div className="icon div_flex_icon">
                <i className="fa fa-usd" aria-hidden="true"></i>
              </div>
              <div>
                <span className="heading_text">Increase Salary</span>
                <br />
              </div>
            </div>
          </a>
          <a
            className="dropdown-item"
            href={`#IncreaseCommisionModal${userId}`}
            data-toggle="modal"
            data-target={`#IncreaseCommisionModal${userId}`}
          >
            <div
              className="
                dropdown_item_desc
                d-flex
                justify-content-start
              "
            >
              <div className="icon div_flex_icon">
                <i className="fa fa-line-chart" aria-hidden="true"></i>
              </div>
              <div>
                <span className="heading_text">Increase Commission</span>
                <br />
              </div>
            </div>
          </a>
          <a
            className="dropdown-item"
            href={`#IncreaseBonusModal${userId}`}
            data-toggle="modal"
            data-target={`#IncreaseBonusModal${userId}`}
          >
            <div
              className="
                dropdown_item_desc
                d-flex
                justify-content-start
              "
            >
              <div className="icon div_flex_icon">
                <i className="fa fa-usd" aria-hidden="true"></i>
              </div>
              <div>
                <span className="heading_text">Increase Bonus</span>
                <br />
              </div>
            </div>
          </a>
          <hr />
          <a
            className="dropdown-item"
            href="#assignNewStore"
            data-toggle="modal"
            data-target="#assignNewStore"
          >
            <div
              className="
                dropdown_item_desc
                d-flex
                justify-content-start
              "
            >
              <div className="icon div_flex_icon">
                <i className="fa fa-usd" aria-hidden="true"></i>
              </div>
              <div>
                <span className="heading_text">Assign New Store</span>
                <br />
              </div>
            </div>
          </a>
          <hr />
          <a className="dropdown-item" href="/#">
            <div
              className="
                              dropdown_item_desc
                              d-flex
                              justify-content-start
                            "
            >
              <div className="icon div_flex_icon">
                <i className="fa fa-usd" aria-hidden="true"></i>
              </div>
              <div>
                <span className="heading_text">Edit Profile</span>
                <br />
              </div>
            </div>
          </a>
          <a className="dropdown-item" href="/#">
            <div
              className="
                dropdown_item_desc
                d-flex
                justify-content-start
              "
            >
              <div className="icon div_flex_icon">
                <i className="fa fa-trash-o" aria-hidden="true"></i>
              </div>
              <div>
                <span className="heading_text text-danger">Delete</span>
                <br />
              </div>
            </div>
          </a>
        </div>
      </div>
      <IncreaseSalaryModal userId={userId} />
      <IncreaseCommisionModal userId = {userId} />
      <IncreaseBonusModal userId = {userId} />
      <AssignNewStore />
    </React.Fragment>
  );
};

export default ActionMenuTable;

import React, { useState } from "react";
import AdminLayout from "../../HOC/AdminLayout";
import AdminSideNavBar from "../../component/Bar/AdminSideNavBar";
import EarningGraph from "../../component/Dashboard/Earning/EarningGraph";
import EarningSummaryBar from "../../component/Dashboard/Earning/EarningSummaryBar";

import DatePicker from "react-datepicker";

const AdminEarning = () => {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <div className="body">
      <AdminLayout />
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-2">
            <AdminSideNavBar />
          </div>
          <div className="col-md-10">
            <h2 className="pt-4">My Earning</h2>
            <div className="row">
              <div className="col-md-9">
                <EarningSummaryBar />
              </div>
              <div className="col-md-3 d-flex justify-content-end date_input_div">
                <DatePicker
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  showYearPicker
                  dateFormat="yyyy"
                />
              </div>
            </div>
            <EarningGraph />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminEarning;

import React, { useState, useEffect } from "react";
import Layout from "../../HOC/Layout";
import EarningGraph from "../../component/Dashboard/Earning/EarningGraph";
import EarningSummaryBar from "../../component/Dashboard/Earning/EarningSummaryBar";

import DatePicker from "react-datepicker";

const Earning = () => {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <div className="body">
      <Layout></Layout>
      {/* Heading part */}
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h2 className="pt-4">My Earning</h2>
          </div>
        </div>
      </div>
      {/* end of heading part */}

      {/* Earning Main part */}
      <div className="container bg-white p-4 mt-4 rounded-div">
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
  );
}

export default Earning;

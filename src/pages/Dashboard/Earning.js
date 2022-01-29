import React, { useState, useEffect } from "react";
import Layout from "../../HOC/Layout";
import EarningGraph from "../../component/Dashboard/Earning/EarningGraph";
import EarningSummaryBar from "../../component/Dashboard/Earning/EarningSummaryBar";

import DatePicker from "react-datepicker";
import axiosInstance from "../../HelperFunction/Axios";

const Earning = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [salary, setSalary] = useState("");
  const [commission, setCommission] = useState("");
  const [bonus, setBonus] = useState("");

  useEffect(() => {
    const getSCBData = async () => {
      await axiosInstance
        .get(`/salary/list/`)
        .then((res) => {
          setSalary(res.data.amount);
        })
        .catch((err) => {});

        await axiosInstance
        .get(`/commission/list/`)
        .then((res) => {
          setCommission(res.data.amount);
        })
        .catch((err) => {});

        await axiosInstance
        .get(`/bonus/list/`)
        .then((res) => {
          setBonus(res.data.amount);
        })
        .catch((err) => {});
    };
    getSCBData();
  }, []);

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
        <div className="row div_format mt-4">
          <div className="col-md-12">
            <EarningGraph />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Earning;

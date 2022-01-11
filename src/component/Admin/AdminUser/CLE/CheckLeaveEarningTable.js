import React, { useState, useEffect } from "react";
import CheckInHistory from "./CheckInHistory";
import LeaveTable from "./LeaveTable";
import EarningGraph from "./EarningGraph";
import axiosInstance from "../../../../HelperFunction/Axios";

const CheckLeaveEarningTable = (props) => {
  // 0 -> check in/out
  // 1 -> leave
  // 2 -> Earning
  const id = props.id;

  const [select, setSelect] = useState(1);
  const [leaveData, setLeaveData] = useState([]);
  const [checkData, setCheckData] = useState([]);

  useEffect(() => {
    const getCheckData = async () => {
      await axiosInstance
        .get(`/attendance/${id}/list/`)
        .then((res) => {
          setCheckData(res.data.results);
        })
        .catch((err) => {
          console.log(err);
        });
    };

    const getLeaveData = async () => {
      await axiosInstance
        .get(`/leave_history/${id}/view/`)
        .then((res) => {
          console.log(res.data);
          setLeaveData(res.data.leaves);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    getCheckData();
    getLeaveData();
  }, []);

  const updateSelect = (selectData) => {
    setSelect(selectData);
  };

  const displayHeading = () => {
    let result = [];
    result.push(
      <div className="d-flex justify-content-start">
        <div className="pr-3">
          <span
            className={select === 1 ? "nav_cle_head_active" : "nav_cle_head"}
            onClick={() => updateSelect(1)}
          >
            Leave
          </span>
        </div>
        <div className="pr-3">
          <span
            className={select === 0 ? "nav_cle_head_active" : "nav_cle_head"}
            onClick={() => updateSelect(0)}
          >
            Check In/Out
          </span>
        </div>
        <div className="pr-3">
          <span
            className={select === 2 ? "nav_cle_head_active" : "nav_cle_head"}
            onClick={() => updateSelect(2)}
          >
            Earning
          </span>
        </div>
      </div>
    );
    return result;
  };

  const displayTable = () => {
    let result = [];

    if(select === 0){
      result.push(<CheckInHistory attendances = {checkData}/>)
    }
    else if(select === 1){
      result.push(<LeaveTable leaveDetail = {leaveData} />)
    }
    else if(select == 2){
      result.push(<EarningGraph />)
    }
    return result;
  }

  return (
    <div className="div_format mt-4 pt-4">
      <div>{displayHeading()}</div>
      <hr />
      {displayTable()}
    </div>
  );
};

export default CheckLeaveEarningTable;

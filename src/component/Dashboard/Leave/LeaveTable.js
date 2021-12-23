import React, { useState, useEffect } from "react";
import axiosInstance from "../../../HelperFunction/Axios";

function Leave_table() {
  const [leaveTableData, setLeaveTableData] = useState([]);

  useEffect(() => {
    getLeaveTableData();
  }, []);

  const getLeaveTableData = async () => {
    await axiosInstance
      .get(`/leave/request/list/`)
      .then((res) => {
        setLeaveTableData(res.data);
        // console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const displayLeaveData = () => {
    let result = [];
    leaveTableData.map((data) => {
      result.push(
        <tr key={data.leave_id}>
          <td className="text-muted muted_text">{data.leave_from} - {data.leave_to}</td>
          <td>{(data.pay == "P") ? "Paid" : "Unpaid"}</td>
          <td className="text-muted muted_text">{data.leave_type}</td>
          <td className="text-muted muted_text">{data.reason}</td>
          <td className="text-muted muted_text">{data.inform_team}</td>
          <td>
            <input
              type="checkbox"
              name="action_check_in"
              id="action_check_in"
            />
          </td>
        </tr>
      );
    });

    return result;
  };

  return (
    <div className="div_format mt-4 pt-3">
      <span className="heading_text">My leave History</span>
      <div className="check_in_table">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">From-To Date</th>
              <th scope="col">Paid/Unpaid</th>
              <th scope="col">Leave Type</th>
              <th scope="col">Reason</th>
              <th scope="col">Approved By</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="text-muted muted_text">
                15 Nov 2021 - 15 Nov 2021
              </td>
              <td>Paid</td>
              <td className="text-muted muted_text">Sick</td>
              <td className="text-muted muted_text">Headached</td>
              <td className="text-muted muted_text">Ram</td>
              <td>
                <input
                  type="checkbox"
                  name="action_check_in"
                  id="action_check_in"
                />
              </td>
            </tr>
            {displayLeaveData()}
          </tbody>
        </table>
        <div className="see_more_check_in_table d-flex justify-content-end">
          <div>
            <a href="" className="btn btn-primary">
              See More...
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Leave_table;

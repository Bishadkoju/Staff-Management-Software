import React from "react";
import ApproveImg from "../../../../assets/icons/check.svg";
import UnapproveImg from "../../../../assets/icons/x.svg";

import axiosInstance from "../../../../HelperFunction/Axios";
import { statusStyle } from "../../../../HelperFunction/GenericFunction";

const LeaveTable = (props) => {
  const leaveTableData = props.leaveDetail;

  const getMessage = (leaveData, res) => {
    const notification = `Leave from ${leaveData.leave_from} to ${leaveData.leave_to} has been ${res.data.approved === "A" ? "approved" : "rejected"} for reason : ${leaveData.reason}`;
    return notification;
  };

  const approveLeave = async (data, approved) => {
    let id = data.leave_id;
    await axiosInstance
      .patch(`/leave/request/${id}/respond/`, { approved })
      .then((res) => {
        // Call for Notifications
        const [datetime, message, read, posted_for] = [
          new Date().toISOString(),
          getMessage(data, res),
          false,
          data.employee.id,
        ];
        axiosInstance
          .post(`/notification/create/`, {
            datetime,
            message,
            read,
            posted_for,
          })
          .then((res) => {
            window.location.reload();
          })
          .catch((err) => {
            window.alert("Error approving leave!!!");
          });
      })
      .catch((err) => {
        window.alert("Error approving leave!!!");
      });
  };

  const displayLeaveData = () => {
    let result = [];

    leaveTableData.map((data) => {
      result.push(
        <tr key={data.leave_id}>
          <td className="text-muted muted_text">
            {data.leave_from} - {data.leave_to}
          </td>
          <td>{data.pay === "P" ? "Paid" : "Unpaid"}</td>
          <td className="text-muted muted_text">{data.leave_type}</td>
          <td className="text-muted muted_text">{data.reason}</td>
          <td className={`muted_text ${statusStyle(data.approved)}`}>
            {data.approved}
          </td>
          {data.approved === "Pending" ? (
            <td>
              <span
                className="mr-2 cursor_pointer"
                onClick={() => approveLeave(data, "A")}
              >
                <img src={ApproveImg} alt="approve" />
              </span>
              <span
                className="cursor_pointer"
                onClick={() => approveLeave(data, "R")}
              >
                <img src={UnapproveImg} alt="approve" />
              </span>
            </td>
          ) : (
            <td>-</td>
          )}
        </tr>
      );
    });

    return result;
  };

  return (
    <div>
      {leaveTableData && (
        <div className="div_format mt-4 pt-3">
          <span className="heading_text">My leave History</span>
          <div className="check_in_table mt-3">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">From-To Date</th>
                  <th scope="col">Paid/Unpaid</th>
                  <th scope="col">Leave Type</th>
                  <th scope="col">Reason</th>
                  <th scope="col">Status</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>{displayLeaveData()}</tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default LeaveTable;

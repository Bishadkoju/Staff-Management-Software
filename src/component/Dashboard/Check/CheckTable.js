import React from "react";
import { timeDisplayer,secondsToHms } from "../../../HelperFunction/GenericFunction";

const CheckTable = (props) => {
  const attendence = props.attendence;

  const displayAttendenceHistory = () => {
    let result = [];

    if (attendence) {
      console.log("attendence result")
      attendence.map((data) => {
        return result.push(
          <tr key={data.duration}>
            <td className="text-muted muted_text">{data.date}</td>
            <td>Jawalakhel</td>
            <td className="text-muted muted_text">{timeDisplayer(data.checked_in_time)}</td>
            <td className="text-muted muted_text">{timeDisplayer(data.checked_out_time)}</td>
            <td className="text-muted muted_text">
              {secondsToHms(data.duration)}
            </td>
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
    }

    return result;
  };

  return (
    <div className="div_format mt-4 pt-3">
      <span className="heading_text">Check in/out History</span>
      <div className="check_in_table">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Date</th>
              <th scope="col">Branch</th>
              <th scope="col">Check In</th>
              <th scope="col">Check Out</th>
              <th scope="col">Total Hours</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>{displayAttendenceHistory()}</tbody>
        </table>
      </div>
    </div>
  );
};

export default CheckTable;

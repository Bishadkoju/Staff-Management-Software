import React from "react";
import {
  timeDisplayer,
  secondsToHms,
} from "../../../../HelperFunction/GenericFunction";

import checkAction from "../../../../assets/icons/checkAction.svg"

const CheckInHistory = (props) => {
  let attendances = props.attendances;

  const attendanceData = () => {
    let result = [];

    if (attendances) {
      attendances.map((attendance) =>
        result.push(
          <tr key={attendance.date}>
            <td className="text-muted muted_text">{attendance.date}</td>
            <td>Jawalakhel</td>
            <td className="text-muted muted_text">
              {timeDisplayer(attendance.checked_in_time)}
            </td>
            <td className="text-muted muted_text">
              {timeDisplayer(attendance.checked_out_time)}
            </td>
            <td className="text-muted muted_text">
              {secondsToHms(attendance.duration)}
            </td>
            <td>
              <img src={checkAction} alt = "check action"/>
            </td>
          </tr>
        )
      );
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
            </tr>
          </thead>
          <tbody>{attendanceData()}</tbody>
        </table>
        <div className="see_more_check_in_table d-flex justify-content-end">
          <div>
            <a href="/dashboard/check" className="btn btn-primary">
              See More...
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckInHistory;

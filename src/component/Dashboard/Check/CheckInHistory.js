import React, { useState, useEffect } from "react";
import axiosInstance from "../../../HelperFunction/Axios";

function CheckInHistory(props) {
  const [attendances, setAttendances] = useState([]);
  const { limit } = props;
  useEffect(() => {
    getAttendance();
  }, []);

  const getAttendance = async () => {
    await axiosInstance
      .get("/attendance/list/")
      .then((res) => {
        setAttendances(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const attendanceData = () => {
    let result = [];

    attendances.map((attendance) =>
      result.push(
        <tr key={attendance.date}>
          <td className="text-muted muted_text">{attendance.date}</td>
          <td>Jawalakhel</td>
          <td className="text-muted muted_text">
            {attendance.checked_in_time}
          </td>
          <td className="text-muted muted_text">
            {attendance.checked_out_time}
          </td>
          <td className="text-muted muted_text">{attendance.duration}</td>
          <td>
            <input
              type="checkbox"
              name="action_check_in"
              id="action_check_in"
            />
          </td>
        </tr>
      )
    );
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
          <tbody>{attendanceData()}</tbody>
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

export default CheckInHistory;

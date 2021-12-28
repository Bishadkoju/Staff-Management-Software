import React from "react";

const CheckTable = (props) => {
  const attendence = props.attendence;

  const secondsToHms = (d) => {
    d = Number(d);
    var h = Math.floor(d / 3600);
    var m = Math.floor((d % 3600) / 60);
    var s = Math.floor((d % 3600) % 60);

    var hDisplay = h > 0 ? h + " hr" : "";
    var mDisplay = m > 0 ? m + " mins" : "";
    return hDisplay + " " + mDisplay;
  };

  const displayAttendenceHistory = () => {
    let result = [];

    console.log("child");
    console.log("props");
    console.log(props);
    console.log(attendence);

    if (attendence) {
      console.log("attendence result")
      attendence.map((data) => {
        return result.push(
          <tr key={data.duration}>
            <td className="text-muted muted_text">{data.date}</td>
            <td>Jawalakhel</td>
            <td className="text-muted muted_text">{data.checked_in_time}</td>
            <td className="text-muted muted_text">{data.checked_out_time}</td>
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

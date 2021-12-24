import React, {useState, useEffect} from "react";
import PiggyImg from "../../../assets/piggy.png";
import NoBoxInfoBar from "../General/NoBoxInfoBar";
import axiosInstance from "../../../HelperFunction/Axios";

const LeaveSummaryBar = () => {
  const imgStyle = {
    width: "30%",
  };

  const [leaveHistory, setLeaveHistory] = useState([]);

  useEffect(() => {
    const getLeaveHistory = async () => {
      await axiosInstance.get('/leave_history/self/view/')
      .then(res => {
        console.log(res.data);
        setLeaveHistory(res.data.history);
      })
      .catch(err => {
        console.log(err);
      })
    }

    getLeaveHistory();
  }, [])
  
  return (
    <div className="d-flex justify-content-start muted_text">
      <div className="media" style={{ maxWidth: "200px" }}>
        <img className="mr-2" src={PiggyImg} alt="Piggy Image" style={imgStyle} />
        <div>
          <span className="muted_text text-muted">TOTAL LEAVE</span>
          <br />
          <h4>03/15</h4>
        </div>
      </div>

      <div className="pr-4">
        <NoBoxInfoBar title="LEAVE LEFT" value={leaveHistory.leaves_taken} />
      </div>
      <div className="pr-4">
        <NoBoxInfoBar title="PAID LEAVE" value={leaveHistory.paid_leaves} />
      </div>
      <div className="pr-4">
        <NoBoxInfoBar title="UNPAID LEAVE" value={leaveHistory.unpaid_leaves} />
      </div>
      <div className="pr-4">
        <NoBoxInfoBar title="EARNING DEDUCT LEAVE" value={leaveHistory.leaves_taken} />
      </div>
    </div>
  );
};

export default LeaveSummaryBar;

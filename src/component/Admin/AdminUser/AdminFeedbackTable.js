import React from "react";
import checkAction from "../../../assets/icons/checkAction.svg";
import axiosInstance from "../../../HelperFunction/Axios";

const AdminFeedbackTable = (props) => {
  let feedbackData = props.feedback;

  const deleteFeedback = async (e, id) => {
    e.preventDefault();
    let confirm = window.confirm("Are you sure you want to delete?");
    if(confirm){
      await axiosInstance
        .delete(`/feedback/${id}/delete`)
        .then((res) => {
          window.location.reload(true)
        })
        .catch((err) => {
          // console.log(err);
        });
    }
  };

  const displayFeedbackTable = () => {
    let result = [];

    if (feedbackData) {
      feedbackData.map((feedback) => {
        result.push(
          <tr key={feedback.id}>
            <td className="text-muted">{feedback.datetime}</td>
            <td className="text-muted">{feedback.subject}</td>
            <td className="text-muted">{feedback.message}</td>
            <td>
              <span
                className="dropdown-toggle drop_menu_no_down_arrow"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <img
                  src={checkAction}
                  alt="check action"
                  style={{ cursor: "pointer" }}
                />
              </span>

              <div
                className="dropdown-menu feedbackActionDropdown"
                aria-labelledby="dropdownMenuButton"
              >
                <a
                  className="dropdown-item text_danger"
                  href="/#"
                  onClick={(e) => deleteFeedback(e, feedback.id)}

                >
                  Delete Feedback
                </a>
              </div>
            </td>
          </tr>
        );
      });
    }

    return result;
  };

  return (
    <div>
      <table className="table mt-5">
        <thead>
          <tr>
            <th scope="col">Date</th>
            <th scope="col">Subject</th>
            <th scope="col">Message</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>{displayFeedbackTable()}</tbody>
      </table>
    </div>
  );
};

export default AdminFeedbackTable;

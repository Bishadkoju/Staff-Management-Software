import React from "react";
import checkAction from "../../../assets/icons/checkAction.svg";
import axiosInstance from "../../../HelperFunction/Axios";

const AdminInboxTable = (props) => {
  let messages = props.messages;

  const displayFeedbackTable = () => {
    let result = [];
    if (messages) {
      if (messages.length > 0) {
        messages.map((message) => {
          result.push(
            <>
              <tr key={message.id}>
                <td className="text-muted">{message.datetime}</td>
                <td className="text-muted">
                  {message.sent_to.first_name + " " + message.sent_to.last_name}
                </td>
                <td className="text-muted">{message.subject}</td>
                <td className="text-muted">{message.message}</td>
                <td className="text-muted">
                  {message.files ? (
                    <img src={message.files} alt="files" />
                  ) : (
                    "No Attachments"
                  )}
                </td>
                {/* <td>
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
                      className="dropdown-item text-success cursor_pointer"
                    >
                      Edit Notice
                    </a>
                    <hr className="m-0" />
                    <a
                      className="dropdown-item text-danger cursor_pointer mt-2"
                    >
                      Delete Notice
                    </a>
                  </div>
                </td> */}
              </tr>
            </>
          );
        });
      }
    } else {
      result.push("No Recent Messages");
    }

    return result;
  };

  return (
    <div>
      <table className="table mt-5">
        <thead>
          <tr>
            <th scope="col">Date</th>
            <th scope="col">Sent To</th>
            <th scope="col">Subject</th>
            <th scope="col">Message</th>
            <th scope="col">Attachment</th>
            {/* <th scope="col">Action</th> */}
          </tr>
        </thead>
        <tbody>{displayFeedbackTable()}</tbody>
      </table>
    </div>
  );
};

export default AdminInboxTable;

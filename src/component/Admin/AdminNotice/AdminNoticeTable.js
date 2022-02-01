import React from "react";
import checkAction from "../../../assets/icons/checkAction.svg";
import axiosInstance from "../../../HelperFunction/Axios";

import EditNoticeModal from "./EditNoticeModal";

const AdminFeedbackTable = (props) => {
  let notices = props.notices;

  const displayFeedbackTable = () => {
    let result = [];
    if (notices) {
      if (notices.length > 0) {
        notices.map((notice) => {
          result.push(
            <>
              <tr key={notice.id}>
                <td className="text-muted">{notice.datetime}</td>
                <td className="text-muted">{notice.subject}</td>
                <td className="text-muted">{notice.message}</td>
                <td className="text-muted">
                  <img src={notice.file} alt="attachment" />
                </td>
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
                      className="dropdown-item text-success cursor_pointer"
                      data-toggle="modal"
                      data-target={`#editNoticeModal${notice.id}`}
                    >
                      Edit Notice
                    </a>
                    <hr className="m-0" />
                    <a
                      className="dropdown-item text-danger cursor_pointer mt-2"
                      onClick={(e) => deleteNotice(e, notice.id)}
                    >
                      Delete Notice
                    </a>
                  </div>
                </td>
              </tr>
              <EditNoticeModal notice={notice} />
            </>
          );
        });
      }
    } else {
      result.push("No Recent Notices");
    }

    return result;
  };

  const deleteNotice = (e, id) => {
    e.preventDefault();
    let confirm = window.confirm(
      "Are you sure you want to delete this notice ? "
    );
    if (confirm) {
      axiosInstance
        .delete(`/notice/${id}/delete`)
        .then((res) => {
          window.alert("Notice Deleted Successfully!");
          window.location.reload();
        })
        .catch((err) => {
          window.alert("Notice not deleted");
        });
    }
  };

  return (
    <div>
      <table className="table mt-5">
        <thead>
          <tr>
            <th scope="col">Date</th>
            <th scope="col">Subject</th>
            <th scope="col">Message</th>
            <th scope="col">Attachment</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>{displayFeedbackTable()}</tbody>
      </table>
    </div>
  );
};

export default AdminFeedbackTable;

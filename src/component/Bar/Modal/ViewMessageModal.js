import React from "react";
import MessagePost from "./MessagePost";

const ViewMessageModal = () => {
  return (
    <div
      className="modal fade text-dark bd-example-modal-lg"
      id="viewMessageModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="viewMessageModal"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-lg" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              Message
            </h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <div className="read_unread_div">
              <div>
                <button className="btn btn-primary mr-2">All</button>
                <button className="btn btn-secondary">Unread</button>
              </div>
            </div>
            <div className="messages_division">
              <MessagePost />
              <MessagePost />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewMessageModal;

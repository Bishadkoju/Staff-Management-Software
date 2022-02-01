import React, { useState, useEffect } from "react";
import axiosInstance from "../../../HelperFunction/Axios";

const CreateNoticeModal = () => {
  const [formData, setFormData] = useState({
    subject: "",
    message: "",
    file: null,
  });

  const { subject, message, file } = formData;

  const handleChange = (e) => {
    setFormData((prevFormData) => {
      return { ...prevFormData, [e.target.name]: e.target.value };
    });
  };

  const handleSubmit = (e) => {
    console.log("Posted Info :", subject, message, file);
    e.preventDefault();
    axiosInstance
      .post(`/notice/create/`, { subject, message, file })
      .then((res) => {
        document.getElementById("close").click();
        window.alert("Notice Published Successfully");
        window.location.reload();
      })
      .catch((err) => {
        window.alert("Error : Notice Not Published!!!");
      });
  };

  

  return (
    <div
      class="modal fade"
      id="createNoticeModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">
              Create Notice
            </h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <form onSubmit={(e) => handleSubmit(e)}>
            <div class="modal-body">
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  className="form-control"
                  name="subject"
                  id="subject"
                  value={subject}
                  onChange={(e) => handleChange(e)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <input
                  type="text"
                  className="form-control"
                  name="message"
                  id="message"
                  value={message}
                  onChange={(e) => handleChange(e)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="file">File</label>
                <input
                  type="file"
                  className="form-control"
                  name="file"
                  id="file"
                  value={file}
                  onChange={(e) => handleChange(e)}
                />
              </div>
            </div>
            <div class="modal-footer">
              <button className="btn btn-primary" type="submit">
                Create Notice
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateNoticeModal;

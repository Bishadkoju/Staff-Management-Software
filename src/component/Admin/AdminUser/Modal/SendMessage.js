import React, { useState } from "react";
import axiosInstance from "../../../../HelperFunction/Axios";

const SendMessage = () => {
  const [formData, setFormData] = useState({
    subject: "",
    message: "",
    read: true,
  });

  const { subject, message, read } = formData;

  const handleChange = (e) => {
    setFormData((prevFormData) => {
      return { ...prevFormData, [e.target.name]: e.target.value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axiosInstance
      .post(`/feedback/create/`, { subject, message, read })
      .then((res) => {
        document.getElementById("close").click();
        window.alert("Feedback Sent Successfully");
      })
      .catch((err) => {
        window.alert("Error : Feedback Not Sent!!!");
      });
  };

  return (
    <div
      className="modal fade"
      id="sendMessageModal"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="myLargeModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-lg">
        <div className="modal-content p-4">
          <div className="heading_modal">
            <span className="heading_text text-black">Send Message</span>
            <hr />
          </div>

          <form onSubmit={(e) => handleSubmit(e)}>
            <div className="form-group">
              <label htmlFor="subject" className="text-dark">
                Subject
              </label>
              <input
                className="form-control"
                name="subject"
                value={subject}
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="messageFile">File</label>
              <br />
              <input type="file" name="messageFile" />
            </div>
            <div className="form-group">
              <label htmlFor="message" className="text-dark">
                Message
              </label>
              <textarea
                name="message"
                id="feedback_message"
                rows="5"
                className="form-control"
                value={message}
                onChange={(e) => handleChange(e)}
              >
                Enter your message...
              </textarea>
              <button type="submit" className="btn btn_primary mt-3">
                Send Message
              </button>
              <button
                type="button"
                className="btn btn-secondary mt-3 ml-2"
                data-dismiss="modal"
                id="close"
              >
                Close
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SendMessage;

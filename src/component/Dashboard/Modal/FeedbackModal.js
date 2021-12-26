import React from 'react'

const FeedbackModal = () => {
    return (
    <div
      className="modal fade"
      id="feedbackModal"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="myLargeModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-lg">
        <div className="modal-content p-4">
          <div className="heading_modal">
            <span className="heading_text text-black">Subject</span>
            <hr />
          </div>

          <form>
            <div className="form-group">
              <textarea name="feedback_message" id="feedback_message" rows="5" className="form-control" defaultValue="Enter messege here"></textarea>
              <button type="submit" className="btn btn_primary mt-3">Send</button>
            </div>
          </form>

        </div>
      </div>
    </div>
    );
}

export default FeedbackModal

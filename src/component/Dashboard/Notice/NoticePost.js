import React from "react";

const Notice_post = (props) => {
  const notice = props.notice;

  return (
    <React.Fragment>
      <div id="notice_newsfeed" key={notice.id}>
        <div className="newsfeed">
          <div className="heading_newsfeed d-flex justify-content-start">
            <div className="profile_desc">
              <span className="heading_text pr-2">
                {notice.subject}
              </span><br />
              <span className="muted_text text-muted">
                Posted By : {notice.posted_by.first_name}
              </span>
              <br />
            </div>
          </div>
          <div className="notice_desc">
            <p className="text-justify">
              {notice.message}
            </p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Notice_post;

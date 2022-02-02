import React from "react";

const MessagePost = (props) => {
  const messege = props.messege;
  return (
    <>
      <hr />
      <div className="messagePost">
        <h6>{messege.subject}</h6>
        <span className="text-muted muted_text">{messege.datetime}</span>
        <br />
        <span>{messege.message}</span>
      </div>
    </>
  );
};

export default MessagePost;

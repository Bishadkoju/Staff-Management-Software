import React, { useState, useEffect } from "react";
import axiosInstance from "../../HelperFunction/Axios";
import AdminLayout from "../../HOC/AdminLayout";
import AdminSideNavBar from "../../component/Bar/AdminSideNavBar";
import AdminInboxTable from "../../component/Admin/AdminInbox/AdminInboxTable";

const AdminInbox = () => {
  const [search, setSearch] = useState("");

  const [messages, setMessages] = useState([]);
  const [filteredMessage, setFilteredMessage] = useState([]);

  useEffect(() => {
    const getMessages = async () => {
      axiosInstance
        .get(`/message/sent/`)
        .then((res) => {
          setMessages(res.data);
          setFilteredMessage(res.data);
        })
        .catch((err) => {});
    };
    getMessages();
  }, []);

  const searchMessage = (e) => {
    setSearch(e.target.value);
    let search_result = []
    messages.map(message => {
        let name = message.sent_to.first_name + message.sent_to.last_name;
        let sub = message.subject;
        let m = message.message;
        let text = name + sub + m;
        if(text.toLowerCase().search(e.target.value) != -1){
            search_result.push(message);
        }
    })
    setFilteredMessage(search_result);
  };

  return (
    <div className="body">
      <AdminLayout />
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-2">
            <AdminSideNavBar />
          </div>
          <div className="col-md-10">
            <div className="row">
              <div className="col-md-12 d-flex justify-content-between pt-3">
                <div>
                  <h2>Inbox</h2>
                </div>
              </div>
            </div>
            <div className="div_format pt-4">
              <input
                type="text"
                name="search"
                id="search"
                value={search}
                placeholder="Keyword : Name, Subject, Message"
                onChange={(e) => searchMessage(e)}
              />
              <AdminInboxTable messages={filteredMessage} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminInbox;

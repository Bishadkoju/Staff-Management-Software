import React, { useState, useRef } from "react";
import JoditEditor from "jodit-react";
import AdminLayout from "../../../HOC/AdminLayout";
import AdminSideNavBar from "../../../component/Bar/AdminSideNavBar";
import axiosInstance from "../../../HelperFunction/Axios";

export default function App() {
  const editor = useRef(null);
  const [formData, setFormData] = useState({
    topic: "",
  });

  const [content, setContent] = useState("Write you handbook description");
  const config = {
    readonly: false,
    height: 400,
  };

  const { topic } = formData;

  const handleChange = (e) => {
    setFormData((prevFormData) => {
      return { ...prevFormData, [e.target.name]: e.target.value };
    });
  };

  function edithandle(content) {
    setContent(content);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    await axiosInstance
      .post("/handbook/create/", {topic, content })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
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
            <h1>Create New Handbook</h1>
            <h2>Start editing to see some magic happen!</h2>
            <form onSubmit={(e) => handleSubmit(e)}>
              <div className="form-group">
                <label htmlFor="topic">Topic</label>
                <input
                  type="text"
                  className="form-control"
                  id="topic"
                  name="topic"
                  value={topic}
                  onChange={(e) => handleChange(e)}
                />
              </div>
              <JoditEditor
                ref={editor}
                value={content}
                config={config}
                onBlur={(e) => edithandle(e)}
                // onChange={(newContent) => {}}
              />
              <button type="submit" className="btn btn_primary mt-2 mb-2">
                Create
              </button>
              <div dangerouslySetInnerHTML={{ __html: content }} />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

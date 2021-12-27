import React, { useState, useEffect, useRef } from "react";
import JoditEditor from "jodit-react";
import AdminLayout from "../../../HOC/AdminLayout";
import AdminSideNavBar from "../../../component/Bar/AdminSideNavBar";
import axiosInstance from "../../../HelperFunction/Axios";
import { Navigate } from "react-router";

import { useParams } from "react-router-dom";

export default function App() {
  // Get ID from URL
  const params = useParams();

  const [created, setCreated] = useState(false);
  const [createdHandbookId, setCreatedHandbookId] = useState(0);

  const editor = useRef(null);
  const [formData, setFormData] = useState({
    topic: "",
  });

  const [instructions, setInstructions] = useState(
    "Write you handbook description"
  );
  const config = {
    readonly: false,
    height: 400,
  };

  const { topic } = formData;

  useEffect(() => {
    const getHandbook = async () => {
      await axiosInstance
        .get(`/handbook/${params.id}/detail`)
        .then((res) => {
          console.log(res);
          setInstructions(res.data.instructions);
        })
        .catch((err) => {
          console.log(err);
        });
    };

    getHandbook();
  }, []);

  

  const handleChange = (e) => {
    setFormData((prevFormData) => {
      return { ...prevFormData, [e.target.name]: e.target.value };
    });
  };

  function edithandle(content) {
    setInstructions(content);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submitted");

    await axiosInstance
      .put(`/handbook/${params.id}/edit/`, { topic, instructions })
      .then((res) => {
        console.log(res);
        setCreatedHandbookId(res.data.id);
        setCreated(true);
      })
      .catch((err) => {
        console.log("error submitted");
        console.log(err);
      });
  };

  if (created) {
    console.log(created);
    console.log(createdHandbookId);
    return <Navigate to={`/admin/handbook/${createdHandbookId}`} />;
  }

  return (
    <div className="body">
      <AdminLayout />
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-2">
            <AdminSideNavBar />
          </div>

          <div className="col-md-10">
            <h1>Edit Handbook</h1>
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
                value={instructions}
                config={config}
                onBlur={(e) => edithandle(e)}
                // onChange={(newContent) => {}}
              />
              <button type="submit" className="btn btn_primary mt-2 mb-2">
                Edit
              </button>
              <div dangerouslySetInnerHTML={{ __html: instructions }} />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

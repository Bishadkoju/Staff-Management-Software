import React, { useState, useRef } from "react";
import JoditEditor from "jodit-react";
import AdminLayout from "../../HOC/AdminLayout";
import AdminSideNavBar from "../../component/Bar/AdminSideNavBar";

export default function App() {
  const editor = useRef(null);
  const [content, setContent] = useState("Start writing");
  const config = {
    readonly: false,
    height: 400,
  };

  function edithandle(content){
    setContent(content);
  }

  return (
    <div className="body">
      <AdminLayout />
      <div className="container-fluid mt-4">
        <div className="row">
          <div className="col-md-2">
            <AdminSideNavBar />
          </div>
          <div className="col-md-2">
            <div className="handbook_left bg-white">
              <div className="p-2">
                <h5>Handbook</h5>
                <hr />
                <span className="active_handbook py-1 pr-4">
                  <a className>Heading 1</a>
                </span>
                <br />
                <span>Heading 2</span>
                <br />
                <span>Heading 3</span>
                <br />
                <span>Heading 4</span>
                <br />
                <span>Heading 5</span>
                <br />
              </div>
            </div>
          </div>
          <div className="col-md-8">
            <h1>React Editors</h1>
            <h2>Start editing to see some magic happen!</h2>
            <JoditEditor
              ref={editor}
              value={content}
              config={config}
              onBlur={(e) => edithandle(e)}
              // onChange={(newContent) => {}}
            />
            <div dangerouslySetInnerHTML={{ __html: content }} />
          </div>
        </div>
      </div>
    </div>
  );
}

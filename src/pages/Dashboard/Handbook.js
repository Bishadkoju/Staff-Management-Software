import React from "react";
import Layout from '../../HOC/Layout';

function Handbook() {
  return (
    <div className="body">
      <Layout></Layout>
      {/* beginning of Handbook */}
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-3">
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
          <div className="col-md-9 ">
            <div className="bg-white">
              <div className="p-2">
                <h1>HEADING 1</h1>
                <hr />
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </p>

                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end of Handbook */}
    </div>
  );
}

export default Handbook;

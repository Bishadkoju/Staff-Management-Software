import React, { useState, useEffect } from "react";
import axiosInstance from "../../HelperFunction/Axios";
import { useParams } from "react-router-dom";
import { Navigate } from "react-router";

const HandbookDetail = () => {
  const [del, setDel] = useState(false);

  const [handBook, setHandBook] = useState([]);

  // Get ID from URL
  const params = useParams();
  const id = params.id;

  useEffect(() => {
    const getHandbookDetail = async () => {
      await axiosInstance
        .get(`/handbook/${id}/detail/`)
        .then((res) => {
          setHandBook(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };

    getHandbookDetail();
  }, []);

  const deleteHandbook = async (e) => {
    e.preventDefault();
    let confirm = window.confirm("Are you sure you want to delete?");
    if (confirm === true) {
      await axiosInstance
        .delete(`/handbook/${id}/delete`, { id })
        .then((res) => {
          console.log(res.data);
          setDel(true);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  if (del) {
    console.log("del");
    return <Navigate to={`/admin/handbook/`} />;
  }

  return (
    <React.Fragment>
      <div className="col-md-8 ">
        <div className="bg-white vh-90">
          <div className="p-2">
            <div className="d-flex justify-content-between">
              <div>
                <h1>
                  {handBook.topic ? handBook.topic : "404 Handbook Not Found"}
                </h1>
              </div>
              <div>
                <a
                  href={`/admin/handbook/edit/${handBook.id}`}
                  className="btn btn-success mr-2"
                >
                  Edit
                </a>
                <button
                  className="btn btn-danger ml-2"
                  onClick={(e) => deleteHandbook(e)}
                >
                  Delete
                </button>
              </div>
            </div>

            <hr />
            <div dangerouslySetInnerHTML={{ __html: handBook.instructions }} />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default HandbookDetail;

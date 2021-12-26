import React, { useState, useEffect } from "react";
import axiosInstance from "../../HelperFunction/Axios";

const HandbookDetail = (props) => {
  const [handBook, setHandBook] = useState([]);
  const id = props.splitLocation[3] ? props.splitLocation[3] : 1;

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
    await axiosInstance
      .delete(`/handbook/${id}/delete/`, { id })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <React.Fragment>
      <div className="col-md-8 ">
        <div className="bg-white vh-90">
          <div className="p-2">
            <div className="d-flex justify-content-between">
              <div>
                <h1>{handBook.topic}</h1>
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

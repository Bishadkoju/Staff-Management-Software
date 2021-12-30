import React, { useState, useEffect } from "react";
import axiosInstance from "../../../HelperFunction/Axios";
import { useParams } from "react-router-dom";

const HandbookDetail = () => {
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
  }, [id]);

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

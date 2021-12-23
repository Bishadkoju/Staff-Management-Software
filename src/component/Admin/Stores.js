import React from "react";
import StoreImg from "../../assets/stores.jpeg"


const Stores = () => {
    const StoreImageStyle = {
        "width" : "100px"
    }

  return (
    <div className="row mb-3">
      <div className="col-md-6">
        <div className="media">
          <img
            className="mr-3"
            src={StoreImg}
            alt="Generic placeholder image"
            style={StoreImageStyle}
          />
          <div className="media-body">
            <span className="mt-0">SM&J Store</span>
            <br />
            <p className="text-muted mb-0">
              <i className="fa fa-map-marker" aria-hidden="true"></i>
              <span>Jawalakhel</span>
              <br />
            </p>
            <span className="text-muted">Incharge</span>
            <span className="text-primary pr-4">John</span>
            <span className="text-muted">Contact No.</span>
            <span className="text-primary">985478951</span>
          </div>
        </div>
      </div>
      <div className="col-md-6">
        <div className="d-flex justify-content-lg-between">
          <div>
            <span className="value font-weight-bold f_24">20</span>
            <br />
            <span className="text-muted">Total Staff</span>
          </div>
          <div>
            <span className="value font-weight-bold f_24 text-danger">2</span>
            <br />
            <span className="text-muted">On Leave</span>
          </div>
          <div>
            <span className="value font-weight-bold f_24 text-success">1</span>
            <br />
            <span className="text-muted">Transfer Staff</span>
          </div>
          <div>
            <span className="value font-weight-bold f_24">19</span>
            <br />
            <span className="text-muted">Working Staff</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stores;

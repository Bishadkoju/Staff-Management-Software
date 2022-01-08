import React from "react";
import StoreImg from "../../assets/stores.jpeg";

const Stores = (props) => {
  const StoreImageStyle = {
    width: "100px",
  };

  const store = props.store;

  return (
    <div className="row mb-3">
      <div className="col-md-6">
        <div className="media">
          <img
            className="mr-3"
            src={StoreImg}
            alt="Generic placeholder"
            style={StoreImageStyle}
          />
          <div className="media-body">
            <span className="mt-0">{store.name}</span>
            <br />
            <p className="text-muted mb-0">
              <i className="fa fa-map-marker" aria-hidden="true"></i>
              <span className="pl-2">{store.address}</span>
              <br />
            </p>
            <span className="text-muted pr-3">Incharge</span>
            <span className="text-primary pr-4">{store.incharge}</span>
            <span className="text-muted pr-3">Contact No.</span>
            <span className="text-primary">{store.contact_number}</span>
          </div>
        </div>
      </div>
      <div className="col-md-6">
        <div className="d-flex justify-content-lg-between">
          <div>
            <span className="value font-weight-bold f_24">
              {store.number_of_staffs}
            </span>
            <br />
            <span className="text-muted">Total Staff</span>
          </div>
          <div>
            <span className="value font-weight-bold f_24 text-danger">
              {store.staffs_in_leave}
            </span>
            <br />
            <span className="text-muted">On Leave</span>
          </div>
          <div>
            <span className="value font-weight-bold f_24 text-success">
              {store.minimum_staffs_required}
            </span>
            <br />
            <span className="text-muted">Min. Staff Required</span>
          </div>
          <div>
            <span className="value font-weight-bold f_24">
              {store.working_staffs}
            </span>
            <br />
            <span className="text-muted">Working Staff</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stores;

import React from "react";
import StoreImg from "../../assets/stores.jpeg"


const Stores = () => {
    const StoreImageStyle = {
        "width" : "100px"
    }

  return (
    <div class="row mb-3">
      <div class="col-md-6">
        <div class="media">
          <img
            class="mr-3"
            src={StoreImg}
            alt="Generic placeholder image"
            style={StoreImageStyle}
          />
          <div class="media-body">
            <span class="mt-0">SM&J Store</span>
            <br />
            <p class="text-muted mb-0">
              <i class="fa fa-map-marker" aria-hidden="true"></i>
              <span>Jawalakhel</span>
              <br />
            </p>
            <span class="text-muted">Incharge</span>
            <span class="text-primary pr-4">John</span>
            <span class="text-muted">Contact No.</span>
            <span class="text-primary">985478951</span>
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <div class="d-flex justify-content-lg-between">
          <div>
            <span class="value font-weight-bold f_24">20</span>
            <br />
            <span class="text-muted">Total Staff</span>
          </div>
          <div>
            <span class="value font-weight-bold f_24 text-danger">2</span>
            <br />
            <span class="text-muted">On Leave</span>
          </div>
          <div>
            <span class="value font-weight-bold f_24 text-success">1</span>
            <br />
            <span class="text-muted">Transfer Staff</span>
          </div>
          <div>
            <span class="value font-weight-bold f_24">19</span>
            <br />
            <span class="text-muted">Working Staff</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stores;

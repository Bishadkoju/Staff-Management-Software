import React, {useState} from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import axiosInstance from "../../../../HelperFunction/Axios";

const AdminRegisterModal = (props) => {
  const validationSchema = Yup.object().shape({
    first_name: Yup.string().required("Field is required"),
    last_name: Yup.string().required("Field is required"),
    email: Yup.string().required(" Field is required").email("Email not valid"),
    password1: Yup.string().required("Field  is required"),
    password2: Yup.string().required("Field  is required"),
    phone_number: Yup.string().required("Field  is required"),
  });
  const formOptions = { resolver: yupResolver(validationSchema) };

  const {
    register,
    handleSubmit,
    setValue,
    trigger,
    formState: { errors },
  } = useForm(formOptions);

  const formSubmit = async (inputs) => {
    console.log(inputs);
    const formData = new FormData();
    Object.keys(inputs).map((key, index) => {
      formData.append(key, inputs[key]);
    });
    try {
      const res = await axiosInstance.post(
        "/auth/register/super-admin/",
        formData
      );
      console.log(res);
      if (res.status === 201) {
        alert("User successfully created");
        window.document.getElementById(`register_close`).click();
        window.location.reload();
        console.log("ok");
      }
    } catch (err) {
      console.log(err.response.data);
      alertError(err);
    }
  };
  const alertError = (err) => {
    var errorText = "";
    Object.keys(err.response.data).map(
      (a) => (errorText += `${a} - ${err.response.data[a]?.[0]}\n`)
    );
    alert(errorText);
  };

  return (
    <React.Fragment>
      {/* beginning of modal  */}
      <div
        className="modal fade"
        id="adminRegisterModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="myLargeModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content p-4">
            <div className="heading_modal">
              <span className="heading_text">Register Admin</span>
              <hr />
            </div>

            <form onSubmit={handleSubmit(formSubmit)}>
              <div className="row">
                <div className="col-md-12">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>First Name</label>
                        <input
                          type="text"
                          {...register("first_name")}
                          className="form-control"
                        />
                        <div className="error_admin_register">
                          {errors.first_name?.message}
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>Last Name</label>
                        <input
                          type="text"
                          {...register("last_name")}
                          className="form-control"
                        />
                        <div className="error_admin_register">
                          {errors.last_name?.message}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>Email</label>
                        <input
                          type="text"
                          {...register("email")}
                          className="form-control"
                        />
                        <div className="error_admin_register">
                          {errors.email?.message}
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>Phone Number</label>
                        <input
                          type="number"
                          {...register("phone_number")}
                          className="form-control"
                        />
                        <div className="error_admin_register">
                          {errors.phone_number?.message}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>Password</label>
                        <input
                          type="password"
                          className="form-control"
                          {...register("password1")}
                        />
                        <div className="error_admin_register">
                          {errors.password1?.message}
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>Confirm Password</label>
                        <input
                          type="password"
                          className="form-control"
                          {...register("password2")}
                        />
                        <div className="error_admin_register">
                          {errors.password2?.message}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <hr />

              <div className="row">
                <div className="col-md-12">
                  <button className="btn btn-primary" type="submit">
                    Submit
                  </button>
                  <button
                    id="register_close"
                    type="button"
                    className="btn btn-secondary"
                    data-dismiss="modal"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default AdminRegisterModal;

import React from "react";
import { Formik } from "formik";

const ForgotPasswordCard = (props) => {
  return (
    <>
      <div className="col-md-7 col-lg-6 col-sm-12 border justify-content-center align-content-center card">
        <Formik
          initialValues={props.initialFormValues}
          validationSchema={props.yupValidation}
          onSubmit={props.submitForm}
        >
          {(formik) => (
            <div className="card-body">
              <div className="text-center">
                <h3 className="display-4">Forgot Password ?</h3>
                <p className="display-6">
                  {" "}
                  please Provide your registered Email
                </p>
              </div>
              <div className="p-3">
                <form onSubmit={formik.handleSubmit}>
                  <div className="mb-3 ">
                    <label className="form-label" htmlFor="username">
                      Email
                    </label>
                    <input
                      className="form-control"
                      type="email"
                      id="username"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.email}
                    />
                    {formik.touched.username && formik.errors.username && (
                      <div className="form-text text-danger">
                        {formik.errors.username}
                      </div>
                    )}
                    {formik.touched.username && !formik.errors.username && (
                      <div className="form-text text-success">
                        {formik.values.username} added to amnesia List
                      </div>
                    )}
                  </div>

                  <div className="">
                    <button
                      className="btn btn-success btn-lg"
                      disabled={!(formik.dirty && formik.isValid)}
                      type="submit"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}
        </Formik>
      </div>
    </>
  );
};

export default ForgotPasswordCard;

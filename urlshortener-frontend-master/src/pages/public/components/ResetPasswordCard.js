import React from "react";
import { Formik } from "formik";

const ResetPasswordCard = ({
  initialFormValues,
  yupValidation,
  submitForm,
}) => {
  return (
    <div className="col-md-7 col-lg-6 col-sm-12 border justify-content-center align-content-center card">
      <Formik
        initialValues={initialFormValues}
        validationSchema={yupValidation}
        onSubmit={submitForm}
      >
        {(formik) => (
          <div className="card-body">
            <div className="text-center">
              <h3 className="display-5">Password Reset Page</h3>
            </div>
            <div className="p-3">
              <form onSubmit={formik.handleSubmit}>
                <div className="mb-3 ">
                  <label className="form-label" htmlFor="secret">
                    Password
                  </label>
                  <input
                    className="form-control"
                    type="password"
                    id="secret"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.secret}
                  />
                  {formik.touched.secret && formik.errors.secret && (
                    <div className="form-text text-danger">
                      {formik.errors.secret}
                    </div>
                  )}
                  {formik.touched.secret && !formik.errors.secret && (
                    <div className="form-text text-success">
                      hope,you remember next time
                    </div>
                  )}
                </div>
                <div className="mb-3 ">
                  <label className="form-label" htmlFor="confirmSecret">
                    Confirm Password
                  </label>
                  <input
                    className="form-control"
                    type="password"
                    id="confirmSecret"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.confirmSecret}
                  />
                  {formik.touched.confirmSecret &&
                    formik.errors.confirmSecret && (
                      <div className="form-text text-danger">
                        {formik.errors.confirmSecret}
                      </div>
                    )}
                  {formik.touched.confirmSecret &&
                    !formik.errors.confirmSecret && (
                      <div className="form-text text-success">
                        you remember this already!!
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
  );
};

export default ResetPasswordCard;

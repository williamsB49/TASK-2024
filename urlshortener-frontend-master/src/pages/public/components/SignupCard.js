import React from "react";
import { Formik } from "formik";

const SignupCard = ({ initialFormValues, yupValidation, submitForm }) => {
  return (
    <>
      <div className="col-md-7 col-lg-6 col-sm-12 border justify-content-center align-content-center card">
        <Formik
          initialValues={initialFormValues}
          validationSchema={yupValidation}
          onSubmit={submitForm}
        >
          {(formik) => (
            <div className="card-body">
              <div className="text-center">
                <h3 className="display-2">SignUp</h3>
              </div>
              <div className="p-3">
                <form onSubmit={formik.handleSubmit}>
                  <div className="mb-3 ">
                    <label className="form-label" htmlFor="name">
                      Name
                    </label>
                    <input
                      className="form-control"
                      type="text"
                      id="name"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.name}
                    />
                    {formik.touched.name && formik.errors.name && (
                      <div className="form-text text-danger">
                        {formik.errors.name}
                      </div>
                    )}
                    {formik.touched.name && !formik.errors.name && (
                      <div className="form-text text-success">
                        Hello {formik.values.name}
                      </div>
                    )}
                  </div>
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
                        {formik.values.username} added to VIP list
                      </div>
                    )}
                  </div>
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
                      <div className="form-text text-success">Looks Good</div>
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

export default SignupCard;

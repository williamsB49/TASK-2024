import React from "react";
import { Link } from "react-router-dom";

const EmailActivationCard = ({ activated }) => {
  return (
    <>
      <div className="col-md-7 col-lg-6 col-sm-12 border justify-content-center align-content-center card">
        <div className="card-body">
          <div className="text-center">
            <h3 className="display-3">
              Email Activation{activated ? " Successful" : " Failed"}{" "}
            </h3>
            <p className="display-6 p-4 m-4">
              {" "}
              {activated
                ? "please SignIn and create shortUrls"
                : "please signIn again and check your mail"}
            </p>
          </div>
          <div className="p-sm-3 d-flex justify-content-end">
            <Link to="/signin" className="btn btn-outline-secondary">
              Click here here to proceed
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default EmailActivationCard;

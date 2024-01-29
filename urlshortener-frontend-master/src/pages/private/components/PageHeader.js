import React from "react";

const PageHeader = ({ email, name, textHeading }) => {
  return (
    <>
      <div className="d-flex flex-column flex-md-row justify-content-between p-2 m-5">
        <h2 className="display-4 p-3 m-4 card-body text-center text-info">
          {textHeading}
        </h2>
        <span className=" shadow border p-3 m-2 d-flex flex-column justify-content-center">
          <div className="lead text-primary">{email}</div>
          <div className=" display-5 text-primary">{name}</div>
        </span>
      </div>
    </>
  );
};

export default PageHeader;

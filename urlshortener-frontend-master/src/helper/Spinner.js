import React from "react";

const Spinner = () => {
  return (
    <div className="container m-5 p-5 position-absolute">
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ height: "250px" }}
      >
        <div
          className="spinner-border"
          role="status"
          style={{ height: "4rem", width: "4rem" }}
        ></div>
      </div>
    </div>
  );
};

export default Spinner;

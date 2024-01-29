import React from "react";

import urlShortsImg from "../../../images/urlShortsApp_img.png";

const LogoCard = () => {
  return (
    <>
      <div className=" d-none d-sm-none col-md-5 col-lg-4 d-md-flex align-items-center border ">
        <img
          src={urlShortsImg}
          alt="app-logo"
          className=" img-fluid rounded-start"
        />
      </div>
    </>
  );
};

export default LogoCard;

import React, { useState } from "react";
import * as yup from "yup";

import { toast } from "react-toastify";

import LogoCard from "../components/LogoCard";
import ForgotPasswordCard from "../components/ForgotPasswordCard";
import Spinner from "../../../helper/Spinner";

import ForgotPasswordFunc from "../functions/ForgotPasswordFunc.js";

const ForgotPassword = () => {
  const [loader, setLoader] = useState(false);

  const initialFormValues = {
    username: "",
  };
  const yupValidation = yup.object().shape({
    username: yup
      .string()
      .email()
      .required("Necessary,this is how we will know You are part of us"),
  });
  const submitForm = async (values) => {
    setLoader(true);
    console.log(values);
    const body = {
      email: values.username,
    };
    const { data } = await ForgotPasswordFunc(body);
    setLoader(false);
    if (data.type === "success") {
      toast.success(data.msg);
    } else {
      toast.error(data.msg);
    }
  };

  if (loader) {
    return <Spinner />;
  }

  return (
    <>
      <div className="container">
        <div className="row justify-content-center m-5">
          <LogoCard />
          <ForgotPasswordCard
            initialFormValues={initialFormValues}
            yupValidation={yupValidation}
            submitForm={submitForm}
          />
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;

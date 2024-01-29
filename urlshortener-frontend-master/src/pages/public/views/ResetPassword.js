import React, { useState } from "react";
import * as yup from "yup";
import { useParams } from "react-router";

import { toast } from "react-toastify";

import LogoCard from "../components/LogoCard";
import ResetPasswordCard from "../components/ResetPasswordCard";
import Spinner from "../../../helper/Spinner";

import ResetPasswordFunc from "../functions/ResetPasswordFunc";

const ResetPassword = () => {
  const [loader, setLoader] = useState(false);

  const { dataString } = useParams();

  const resetParamsFunc = () => {
    const dataArray = dataString.split("iHaveAmnesia");
    const resetCode = dataArray[0];
    const authToken = dataArray[1];
    console.log(dataArray, " dataArray");
    return { resetCode, authToken };
  };

  const initialFormValues = {
    secret: "",
    confirmSecret: "",
  };

  const yupValidation = yup.object().shape({
    secret: yup
      .string()
      .required("Necessary")
      .min(8, "Seriously, do you think this is secure?"),
    confirmSecret: yup
      .string()
      .required("Necessary")
      .min(8, "do you think this is it?")
      .oneOf([yup.ref("secret")], "Passwords are not same"),
  });

  const submitForm = async (values) => {
    setLoader(true);
    const { resetCode, authToken } = resetParamsFunc();
    console.log(values, resetCode, authToken);
    const body = {
      newPassword: values.confirmSecret,
      resetCode,
    };
    const { data } = await ResetPasswordFunc(body, authToken);
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
          <ResetPasswordCard
            initialFormValues={initialFormValues}
            yupValidation={yupValidation}
            submitForm={submitForm}
          />
        </div>
      </div>
    </>
  );
};

export default ResetPassword;

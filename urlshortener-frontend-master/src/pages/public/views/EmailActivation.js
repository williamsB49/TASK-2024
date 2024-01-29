import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

import { toast } from "react-toastify";

import useAuth from "../../../hooks/useAuth";

import LogoCard from "../components/LogoCard";
import EmailActivationCard from "../components/EmailActivationCard";
import Spinner from "../../../helper/Spinner";

import EmailActivationFunc from "../functions/EmailActivationFunc";

const EmailActivation = () => {
  const { activationId } = useParams();
  const [loader, setLoader] = useState(false);
  const [isSuccess, setisSuccess] = useState(null);

  const [, updateToken] = useAuth();

  useEffect(() => {
    const emailVerifyFunc = async () => {
      setLoader(true);
      const body = {
        activationId,
      };
      const { data } = await EmailActivationFunc(body);
      setLoader(false);
      if (data.type === "success") {
        toast.success(data.msg);
        setisSuccess(true);
        updateToken(null);
      } else {
        toast.error(data.msg);
      }
    };
    emailVerifyFunc();
  }, [activationId, updateToken]);

  if (loader) {
    return <Spinner />;
  }
  return (
    <>
      <div className="container">
        <div className="row justify-content-center m-5">
          <LogoCard />
          <EmailActivationCard activated={isSuccess} />
        </div>
      </div>
    </>
  );
};

export default EmailActivation;

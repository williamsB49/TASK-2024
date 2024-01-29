import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";
import * as yup from "yup";

import useAuth from "../../../hooks/useAuth";
import useUser from "../../../hooks/useUser";

import createShortUrl from "../functions/createShortUrl";

import PageHeader from "../components/PageHeader";
import ShortUrlFormCard from "../components/ShortUrlFormCard";

import Spinner from "../../../helper/Spinner";

const CreateShortUrl = () => {
  const [longUrlState, setLongUrlState] = useState("");
  const [err, setErr] = useState(false);
  const [success, setSuccess] = useState(null);
  const [loader, setLoader] = useState(false);

  const navigate = useNavigate();
  const [token, updateToken] = useAuth();
  const [{ idActivated, email, name }] = useUser();

  useEffect(() => {
    if (!token) {
      navigate("/");
    }
    if (!idActivated) {
      navigate("/dashboard");
    }
  }, [idActivated, navigate, token]);

  const getDataFunc = async (longUrl) => {
    setLoader(true);
    const body = {
      longUrl,
    };
    const { data } = await createShortUrl(body, token);
    setLoader(false);
    if (data.type === "success") {
      toast.success(data.msg);
      navigate("/summary");
    } else {
      toast.error(data.msg);
      navigate("/");
      updateToken(null);
    }
  };
  const yupValidation = yup.object().shape({
    url: yup.string().url().required(),
  });
  const checkValidity = {
    url: longUrlState,
  };

  const submitValue = (ev) => {
    ev.preventDefault();

    yupValidation
      .validate(checkValidity)
      .then((value) => {
        setSuccess(value.url);
      })
      .catch(function (error) {
        setErr(error.message);
      });

    if (success) {
      getDataFunc(success);
    }
    setErr(false);
    setSuccess(null);
  };

  if (loader) {
    return <Spinner />;
  }

  return (
    <div className="container-fluid ">
      <PageHeader email={email} name={name} textHeading="Create ShortUrl" />
      <div className="row mb-4 justify-content-center">
        <div className="col-md-6">
          <ShortUrlFormCard
            err={err}
            success={success}
            submitValue={submitValue}
            longUrlState={longUrlState}
            setLongUrlState={setLongUrlState}
          />
        </div>
      </div>
    </div>
  );
};

export default CreateShortUrl;

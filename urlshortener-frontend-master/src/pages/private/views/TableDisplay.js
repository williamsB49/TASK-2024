import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";

import useAuth from "../../../hooks/useAuth";
import useUser from "../../../hooks/useUser";

import getAllUrlData from "../functions/getAllUrlData";

import PageHeader from "../components/PageHeader";
import TableCard from "../components/TableCard.js";

import Spinner from "../../../helper/Spinner";

const TableDisplay = () => {
  const navigate = useNavigate();
  const [urlData, seturlData] = useState(null);
  const [loader, setLoader] = useState(false);
  const [token, updateToken] = useAuth();
  const [{ idActivated, email, name }] = useUser();

  useEffect(() => {
    if (!token) {
      navigate("/");
    }

    const getDataFunc = async () => {
      setLoader(true);
      const { data } = await getAllUrlData(token);
      if (data.type === "success") {
        toast.success(data.msg);
        seturlData(data.allUrls);
        setLoader(false);
      } else {
        toast.error(data.msg);
        navigate("/");
        updateToken(null);
      }
    };
    if (idActivated) {
      getDataFunc();
    } else {
      navigate("/dashboard");
    }
  }, [idActivated, navigate, token, updateToken]);

  if (loader) {
    return <Spinner />;
  }

  return (
    <div className="container-fluid ">
      <PageHeader email={email} name={name} textHeading="Table Summary" />

      {urlData && <TableCard urlData={urlData} />}
    </div>
  );
};

export default TableDisplay;

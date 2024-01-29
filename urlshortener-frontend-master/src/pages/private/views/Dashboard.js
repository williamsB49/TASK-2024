import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";

import useAuth from "../../../hooks/useAuth";
import useUser from "../../../hooks/useUser";

import getAnalysisData from "../functions/getAnalysisData";
import PageHeader from "../components/PageHeader";
import MonthlyChart from "../components/MonthlyChart";
import DailyChart from "../components/DailyChart";

import Spinner from "../../../helper/Spinner";

const Dashboard = () => {
  const [loader, setLoader] = useState(false);
  const [chartData, setChartData] = useState(null);

  const navigate = useNavigate();
  const [token, updateToken] = useAuth();
  const [{ idActivated, email, name }] = useUser();

  useEffect(() => {
    if (!token) {
      navigate("/");
    }
    const getAllData = async () => {
      setLoader(true);
      const { data } = await getAnalysisData(token);
      setLoader(false);
      if (data.type === "success") {
        toast.success(data.msg);
        const arr = data.dataArray.map((item) => {
          return {
            name: item.urlName,
            month: parseInt(item.month),
            day: parseInt(item.day),
          };
        });
        setChartData(arr);
      } else {
        toast.error(data.msg);
        navigate("/");
        updateToken(null);
      }
    };
    if (idActivated) {
      getAllData();
    }
  }, [idActivated, navigate, token, updateToken]);

  if (!idActivated) {
    return (
      <>
        <div className="card d-flex justify-content-center align-items-center m-5 p-5">
          <h3 className="lead text-warning display-2 p-5">
            Sorry your account is not activated...kindly Activate.
          </h3>
        </div>
      </>
    );
  }

  if (loader) {
    return <Spinner />;
  }

  return (
    <div className="container-fluid">
      <PageHeader email={email} name={name} textHeading="DashBoard" />
      {chartData && (
        <div className="row  my-5 justify-content-center">
          <MonthlyChart data={chartData} />
          <DailyChart data={chartData} />
        </div>
      )}
    </div>
  );
};

export default Dashboard;

import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const MonthlyChart = ({ data }) => {
  return (
    <div className="col-12 col-md-5 p-2 border m-2">
      <LineChart
        width={450}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="day" stroke="#82ca9d" />
      </LineChart>
    </div>
  );
};

export default MonthlyChart;

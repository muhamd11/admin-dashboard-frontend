import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  BarChart,
  CartesianGrid,
  Bar,
  Rectangle,
} from "recharts";

const data = [
  {
    name: "Sun",
    visit: 4000,
    click: 2400,
  },
  {
    name: "Mon",
    visit: 3000,
    click: 1398,
  },
  {
    name: "Tue",
    visit: 2000,
    click: 3800,
  },
  {
    name: "Wed",
    visit: 2780,
    click: 3908,
  },
  {
    name: "Thu",
    visit: 1890,
    click: 4800,
  },
  {
    name: "Fri",
    visit: 2390,
    click: 3800,
  },
  {
    name: "Sat",
    visit: 3490,
    click: 4300,
  },
];

const data2 = [
    { name: 'January', uv: 4000, pv: 2400, amt: 2400 },
    { name: 'February', uv: 3000, pv: 1398, amt: 2210 },
    { name: 'March', uv: 2000, pv: 9800, amt: 2290 },
    { name: 'April', uv: 2780, pv: 3908, amt: 2000 },
    { name: 'May', uv: 1890, pv: 4800, amt: 2181 },
    { name: 'June', uv: 2390, pv: 3800, amt: 2500 },
    { name: 'July', uv: 3490, pv: 4300, amt: 2100 },
    { name: 'August', uv: 2000, pv: 2400, amt: 2400 },
    { name: 'September', uv: 3000, pv: 1398, amt: 2210 },
    { name: 'October', uv: 2000, pv: 9800, amt: 2290 },
    { name: 'November', uv: 2780, pv: 3908, amt: 2000 },
    { name: 'December', uv: 1890, pv: 4800, amt: 2181 },
  ];

const Chart = () => {
  return (
    <div className="bg-white mt-5 rounded-lg p-5 shadow-lg">
      <h2 className="text-gray-400 text-lg mb-3">Weekly Recap</h2>
      <div className="flex">
        <div style={{ height: "500px", width: "50%" }}>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 20,
              }}
            >
              <XAxis dataKey="name" stroke="#555" />
              <YAxis stroke="#555" />
              <Tooltip
                contentStyle={{
                  background: "#333",
                  border: "none",
                  color: "#fff",
                }}
              />
              <Line
                type="monotone"
                dataKey="visit"
                stroke="#007bff"
                strokeWidth={2}
                dot={{ stroke: "#007bff", strokeWidth: 2, r: 4 }}
              />
              <Line
                type="monotone"
                dataKey="click"
                stroke="#28a745"
                strokeWidth={2}
                dot={{ stroke: "#28a745", strokeWidth: 2, r: 4 }}
              />
              <Legend />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div style={{ height: "500px", width: "50%" }}>
          <ResponsiveContainer width="100%" height='100%'>
            <BarChart
              data={data2}
              margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#ddd" />
              <XAxis dataKey="name" stroke="#555" />
              <YAxis stroke="#555" />
              <Tooltip
                contentStyle={{
                  background: "#333",
                  border: "none",
                  color: "#fff",
                }}
              />
              <Legend />
              <Bar dataKey="pv" fill="#007bff" />
              <Bar dataKey="uv" fill="#28a745" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Chart;

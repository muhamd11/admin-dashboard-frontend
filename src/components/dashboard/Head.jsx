// @ts-nocheck
import React from "react";
import user from "../../assets/users.png";
import inStock from "../../assets/in-stock.png";
import salary from "../../assets/salary.png";

const Head = () => {
  return (
    <div className="flex items-center justify-center gap-8">
      <div className="box bg-white flex gap-2 justify-around items-center flex-1 p-5 rounded-lg">
        <img src={inStock} alt="logo" className="w-[20%] h-[20%]" />
        <div>
          <h2 className="font-medium text-lg">Stock</h2>
          <h2 className="font-bold text-4xl mt-3">6,928</h2>
          <p className="text-base text-gray-500 mt-3">
            <span className="text-red-500">21%</span> more than previous week
          </p>
        </div>
      </div>
      <div className="box bg-white flex gap-2 justify-around items-center flex-1 p-5 rounded-lg">
        <img src={salary} alt="logo" className="w-[20%] h-[20%]" />
        <div>
          <h2 className="font-medium text-lg">Revenue</h2>
          <h2 className="font-bold text-4xl mt-3">20,100</h2>
          <p className="text-base text-gray-500 mt-3">
            <span className="text-green-500">40%</span> more than previous week
          </p>
        </div>
      </div>
      <div className="box bg-white flex gap-5 justify-around items-center flex-1 p-5 rounded-lg">
        <img src={user} alt="logo" className="w-[20%] h-[20%]" />
        <div>
          <h2 className="font-medium text-lg">Total Users</h2>
          <h2 className="font-bold text-4xl mt-3">10,928</h2>
          <p className="text-base text-gray-500 mt-3">
            <span className="text-green-500">12%</span> more than previous week
          </p>
        </div>
      </div>
    </div>
  );
};

export default Head;

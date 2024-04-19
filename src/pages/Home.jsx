// @ts-nocheck
import React from "react";
import SideMenu from "../components/SideMenu";
import { Outlet } from "react-router-dom";


const Home = () => {

  return  (
    <div className="flex w-full">
      <SideMenu />
      <div className="bg-slate-200 w-4/5 ml-auto p-5 min-h-screen">
        <Outlet />
      </div>
    </div>
  ) 
};

export default Home;

// @ts-nocheck
import avatar from "../assets/avatar.png";
import React from "react";
import { RiDashboardLine } from "react-icons/ri";
import { LuUsers2 } from "react-icons/lu";
import { FiShoppingBag } from "react-icons/fi";
import { GrTransaction } from "react-icons/gr";
import { PiMoneyDuotone } from "react-icons/pi";
import { BiSolidReport } from "react-icons/bi";
import { PiUsersFourLight } from "react-icons/pi";
import { FiSettings } from "react-icons/fi";
import { GiHelp } from "react-icons/gi";
import { TbLogout } from "react-icons/tb";
import { Link, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const SideMenu = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Logged User
  const loggedUser = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    Swal.fire({
      title: "Are you sure?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Logout !",
    }).then((result) => {
      if (result.isConfirmed) {
        navigate("/logout");
      }
    });
  };

  return (
    <div className="h-screen fixed top-0 left-0 w-1/5 p-5">
      {loggedUser && (
        <div className="flex gap-5 items-center mb-8">
          <div className="avatar">
            <div className="w-16 rounded-full">
              <img src={avatar} alt="User Avatar" />
            </div>
          </div>
          <div className="info">
            <h3 className="font-bold">
              {`${loggedUser.first_name.toUpperCase()} ${loggedUser.last_name.toUpperCase()}`}
            </h3>
            <p className="font-medium text-gray-500">{loggedUser.email}</p>
          </div>
        </div>
      )}
      <div className="mb-2">
        <p className="font-bold mb-1">Pages</p>
        <div className="flex flex-col">
          <Link
            to="/"
            className={`flex items-center font-medium p-4 gap-2 hover:bg-slate-200 transition ease-in-out duration-300 rounded-lg cursor-pointer mb-2 ${
              location.pathname === "/" && "bg-slate-200"
            }`}
          >
            <RiDashboardLine />
            Dashboard
          </Link>
          <Link
            to="/users"
            className={`flex items-center font-medium p-4 gap-2 hover:bg-slate-200 transition ease-in-out duration-300 rounded-lg cursor-pointer mb-2 ${
              location.pathname === "/users" && "bg-slate-200"
            }`}
          >
            <LuUsers2 />
            Users
          </Link>
          <Link
            to="/products"
            className={`flex items-center font-medium p-4 gap-2 hover:bg-slate-200 transition ease-in-out duration-300 rounded-lg cursor-pointer mb-2 ${
              location.pathname === "/products" && "bg-slate-200"
            }`}
          >
            <FiShoppingBag />
            Products
          </Link>
          <Link
            className={`flex items-center font-medium p-4 gap-2 hover:bg-slate-200 transition ease-in-out duration-300 rounded-lg cursor-pointer mb-2 ${
              location.pathname === "/transactions" && "bg-slate-200"
            }`}
          >
            <GrTransaction />
            Transactions
          </Link>
        </div>
      </div>
      <div className="mb-2">
        <p className="font-bold mb-1">Analytics</p>
        <div className="flex flex-col">
          <div className="flex items-center font-medium p-4 gap-2  hover:bg-slate-200 transition ease-in-out duration-300 rounded-lg cursor-pointer mb-2">
            <PiMoneyDuotone />
            Revenue
          </div>
          <div className="flex items-center font-medium p-4 gap-2  hover:bg-slate-200 transition ease-in-out duration-300 rounded-lg cursor-pointer mb-2">
            <BiSolidReport />
            Reports
          </div>
          <div className="flex items-center font-medium p-4 gap-2  hover:bg-slate-200 transition ease-in-out duration-300 rounded-lg cursor-pointer mb-2">
            <PiUsersFourLight />
            Teams
          </div>
        </div>
      </div>
      <div className="mb-2">
        <p className="font-bold mb-1">User</p>
        <div className="flex flex-col">
          <div className="flex items-center font-medium p-4 gap-2  hover:bg-slate-200 transition ease-in-out duration-300 rounded-lg cursor-pointer mb-2">
            <FiSettings />
            Settings
          </div>
          <div className="flex items-center font-medium p-4 gap-2  hover:bg-slate-200 transition ease-in-out duration-300 rounded-lg cursor-pointer mb-2">
            <GiHelp />
            Help
          </div>
          <button
            onClick={handleLogout}
            className="flex items-center font-medium p-4 gap-2  hover:bg-slate-200 transition ease-in-out duration-300 rounded-lg cursor-pointer mb-2"
          >
            <TbLogout />
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default SideMenu;

import React from "react";
import { AiOutlineUserAdd } from "react-icons/ai";
import UsersTable from "../../components/users/UsersTable";
import { Link } from "react-router-dom";
import NavLink from "../../components/NavLink";

const Users = () => {
  return (
    <>
      <NavLink navName="USERS" />
      <div className="bg-white mt-5 rounded-lg p-5 max-h-[86vh]">
        <div className="flex justify-between items-center">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered w-24 md:w-auto"
          />
          <Link to="/add_user" className="btn btn-wide btn-primary text-white">
            <AiOutlineUserAdd style={{ width: "25px", height: "25px" }} />
            <span>Add New</span>
          </Link>
        </div>
        <UsersTable />
      </div>
    </>
  );
};

export default Users;

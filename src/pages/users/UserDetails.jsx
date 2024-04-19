// @ts-nocheck
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../../rtk/users/usersSlice";
import Loader from "../../components/Loader";
import NavLink from "../../components/NavLink";
import { FaUserEdit } from "react-icons/fa";
import { Link } from "react-router-dom";
import Avatar from '../../assets/avatar.png'


const UserDetails = () => {
  const { userId } = useParams();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(getUser(userId));
  }, []);

  if (!user) {
    return <Loader />;
  }

  return (
    <>
      <NavLink navName="USER DETAILS" />
      <div className="flex gap-14">
        <div className="bg-white p-5 rounded-lg mt-8 h-fit">
          <img src={Avatar} alt="" className="w-[250px]"/>
        </div>
        <div className="bg-white mt-5 rounded-lg p-5 flex-1 ">
          <div className="flow-root">
            <dl className="-my-3 divide-y divide-gray-100 text-sm">
              <div className="grid grid-cols-1 gap-1 py-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
                <dt className="font-medium text-gray-900">Name</dt>
                <dd className="text-gray-700 sm:col-span-2">{`${user.first_name} ${user.last_name}`}</dd>
              </div>

              <div className="grid grid-cols-1 gap-1 py-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
                <dt className="font-medium text-gray-900">Email</dt>
                <dd className="text-gray-700 sm:col-span-2">{user.email}</dd>
              </div>

              <div className="grid grid-cols-1 gap-1 py-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
                <dt className="font-medium text-gray-900">Phone Number</dt>
                <dd className="text-gray-700 sm:col-span-2">{user.mobile}</dd>
              </div>

              <div className="grid grid-cols-1 gap-1 py-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
                <dt className="font-medium text-gray-900">Role</dt>
                <dd className="text-gray-700 sm:col-span-2">
                  {user.is_superuser ? "Admin" : "Client"}
                </dd>
              </div>
              <div className="grid grid-cols-1 gap-1 py-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
                <dd className="text-gray-700 sm:col-span-2">
                  <Link
                    to={`/edit_user/${user.id}`}
                    className="btn btn-wide btn-primary text-white"
                  >
                    <FaUserEdit style={{ width: "25px", height: "25px" }} />
                    <span>Edit User</span>
                  </Link>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserDetails;

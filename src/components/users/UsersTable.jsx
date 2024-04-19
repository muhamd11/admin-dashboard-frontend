// @ts-nocheck
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers } from "../../rtk/users/usersSlice";
import Loader from "../Loader";
import { deleteUser } from "../../rtk/auth/authSlice";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const UsersTable = () => {
  const dispatch = useDispatch();

  const { users } = useSelector((state) => state.users);
  const { isSuccess } = useSelector((state) => state.auth);
  const loggedUser = JSON.parse(localStorage.getItem('user'))

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = {
      year: "numeric",
      month: "short",
      day: "2-digit",
      timeZone: "UTC",
    };
    return date.toLocaleDateString("en-US", options);
  };

  const handleDelete = (userId) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deleteUser(userId));
        if (isSuccess) {
          Swal.fire("Deleted!", "Your item has been deleted.", "success");
        }
      }
    });
  };

  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch, isSuccess]);

  if (!users) {
    return <Loader />;
  }

  return (
    <div className="overflow-x-auto mt-5 ">
      <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
        <thead className="ltr:text-left rtl:text-right">
          <tr>
            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
              Name
            </th>
            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
              Email
            </th>
            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
              Created At
            </th>
            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
              Role
            </th>
            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900"></th>
            <th className="px-4 py-2"></th>
          </tr>
        </thead>

        <tbody className="divide-y divide-gray-200 ">
          {users.map((user) => {
            if (user.id !== loggedUser?.id) {
              return (
                <tr key={user.id}>
                  <td className="whitespace-nowrap px-4 text-center py-2 font-medium text-gray-900">
                    {user.first_name}
                  </td>
                  <td className="whitespace-nowrap px-4 text-center py-2 text-gray-700">
                    {user.email}
                  </td>
                  <td className="whitespace-nowrap px-4 text-center py-2 text-gray-700">
                    {formatDate(user.date_joined)}
                  </td>
                  <td className="whitespace-nowrap px-4 text-center py-2 text-gray-700">
                    {user.is_superuser ? "Admin" : "client"}
                  </td>
                  <td className="whitespace-nowrap px-4 text-center py-2">
                    <Link
                      to={`/user_details/${user.id}`}
                      className="inline-block mr-2 rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
                    >
                      View
                    </Link>
                    <button
                      onClick={() => handleDelete(user.id)}
                      className="inline-block rounded bg-red-600 px-4 py-2 text-xs font-medium text-white hover:bg-red-700"
                    >
                      delete
                    </button>
                  </td>
                </tr>
              );
            }
          })}
        </tbody>
      </table>
    </div>
  );
};

export default UsersTable;

// @ts-nocheck
import React, { useEffect, useState } from "react";
import NavLink from "../../components/NavLink";
import { FaUserEdit } from "react-icons/fa";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../components/Loader";
import { getUser, updateUser } from "../../rtk/users/usersSlice";
import Swal from "sweetalert2";

const EditUser = () => {
  const { userId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, isSuccess } = useSelector((state) => state.users);

  const [email, setEmail] = useState(user?.email);
  const [firstName, setFirstName] = useState(user?.first_name);
  const [lastName, setLastName] = useState(user?.last_name);
  const [mobile, setMobile] = useState(user?.mobile);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userData = {
      email,
      first_name: firstName,
      last_name: lastName,
      mobile,
    };
    try {
      dispatch(updateUser({ userId: userId, userData: userData }));
      if (isSuccess) {
        navigate(`/user_details/${userId}`);
        Swal.fire({
          title: "Success!",
          text: "Updated successfully",
          icon: "success",
          confirmButtonText: "Continue",
        });
      }
    } catch (error) {
      Swal.fire({
        text: error,
        icon: "error",
      });
    }
  };

  useEffect(() => {
    dispatch(getUser(userId));
  }, []);

  if (!user) {
    return <Loader />;
  }
  return (
    <div>
      <NavLink navName="EDIT USER" />
      <section className="bg-white mt-5 rounded-lg p-5">
        <div className="">
          <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
            <div className="max-w-xl lg:max-w-3xl">
              <h1 className="mt-6 flex items-center gap-2 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
                <FaUserEdit style={{ width: "45px", height: "45px" }} />
                Edit User
              </h1>

              <form
                onSubmit={handleSubmit}
                className="mt-8 grid grid-cols-6 gap-6"
              >
                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="FirstName"
                    className="block text-sm font-medium text-gray-700"
                  >
                    First Name
                  </label>

                  <input
                    type="text"
                    id="FirstName"
                    name="first_name"
                    className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="LastName"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Last Name
                  </label>

                  <input
                    type="text"
                    id="LastName"
                    name="last_name"
                    className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </div>

                <div className="col-span-6">
                  <label
                    htmlFor="Email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email
                  </label>

                  <input
                    type="email"
                    id="Email"
                    name="email"
                    className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div className="col-span-6">
                  <label
                    htmlFor="Phone"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Phone Number
                  </label>

                  <input
                    type="tel"
                    id="Phone"
                    name="phone"
                    className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
                  />
                </div>

                <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                  <button type="submit" className="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500">
                    Update User
                  </button>
                </div>
              </form>
            </div>
          </main>
        </div>
      </section>
    </div>
  );
};

export default EditUser;

// @ts-nocheck
import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import Loader from "../../components/Loader";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../../rtk/auth/authSlice";

const AddUser = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [mobile, setMobile] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { isSuccess, isLoading, error, isError } = useSelector(
    (state) => state.auth
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password === password2 && password.length >= 6) {
      const userData = {
        email,
        password,
        password2,
        first_name: firstName,
        last_name: lastName,
      };
      dispatch(registerUser(userData));
      if (isSuccess) {
        Swal.fire({
          title: "Registered Successfuly!",
          icon: "success",
        });
        navigate("/users");
      }
    } else {
      const text =
        password.length < 6
          ? "Password must be more than 6 characters"
          : "Passwords didn't match";
      Swal.fire({
        title: "Error!",
        text,
        icon: "error",
        confirmButtonText: "Try again",
      });
    }
  };

  if (isError) {
    console.log(error);
    const errorMessage = error;
    Swal.fire({
      title: "Error!",
      text: errorMessage.message,
      icon: "error",
      confirmButtonText: "Try again",
    });
  }

  return isLoading ? (
    <Loader />
  ) : (
    <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12 mt-8 w-[70%] mx-auto">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="sr-only" htmlFor="first_name">
            First Name
          </label>
          <input
            className="w-full rounded-lg border-gray-200 p-3 text-sm"
            placeholder="First Name"
            type="text"
            id="first_name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div>
          <label className="sr-only" htmlFor="last_name">
            Last Name
          </label>
          <input
            className="w-full rounded-lg border-gray-200 p-3 text-sm"
            placeholder="Last Name"
            type="text"
            id="last_name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-2">
          <div>
            <label className="sr-only" htmlFor="email">
              Email
            </label>
            <input
              className="w-full rounded-lg border-gray-200 p-3 text-sm"
              placeholder="Email address"
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <label className="sr-only" htmlFor="phone">
              Phone
            </label>
            <input
              className="w-full rounded-lg border-gray-200 p-3 text-sm"
              placeholder="Phone Number"
              type="tel"
              id="phone"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
            />
          </div>
          <div>
            <label className="sr-only" htmlFor="password">
              Password
            </label>
            <input
              className="w-full rounded-lg border-gray-200 p-3 text-sm"
              placeholder="Password"
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div>
            <label className="sr-only" htmlFor="password2">
              Password Confirmation
            </label>
            <input
              className="w-full rounded-lg border-gray-200 p-3 text-sm"
              placeholder="Password Confirmation"
              type="password"
              id="password2"
              value={password2}
              onChange={(e) => setPassword2(e.target.value)}
            />
          </div>
        </div>

        <div className="mt-4">
          <button
            type="submit"
            className="inline-block w-full rounded-lg bg-indigo-500 px-5 py-3 font-medium text-white sm:w-auto"
          >
            Add User
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddUser;

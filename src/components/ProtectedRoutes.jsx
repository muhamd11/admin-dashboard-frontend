// @ts-nocheck
import React, { useState, useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom"; // Import Navigate from react-router-dom
import { jwtDecode } from "jwt-decode";
import api from "../api";
import { REFRESH_TOKEN, ACCESS_TOKEN } from "../constants";

const ProtectedRoutes = () => {
  const [isAuth, setIsAuth] = useState(null);

  useEffect(() => {
    const authenticateUser = async () => {
      const token = localStorage.getItem(ACCESS_TOKEN);

      if (!token) {
        setIsAuth(false);
        return;
      }

      try {
        const decodedToken = jwtDecode(token);
        const tokenExpirationTime = decodedToken.exp * 1000; // Convert to milliseconds
        const currentTime = Date.now();

        if (tokenExpirationTime < currentTime) {
          await refreshAccessToken();
        } else {
          setIsAuth(true);
        }
      } catch (error) {
        console.error("Error decoding token:", error);
        setIsAuth(false);
      }
    };

    authenticateUser();
  }, []);

  const refreshAccessToken = async () => {
    const refreshToken = localStorage.getItem(REFRESH_TOKEN);
    const decodedRefreshToken = jwtDecode(refreshToken);
    const refreshTokenExpirationTime = decodedRefreshToken.exp * 1000;
    const currentTime = Date.now(); // Convert to milliseconds

    if (refreshTokenExpirationTime < currentTime) {
      localStorage.clear();
    } else {
      try {
        const response = await api.post("api/token/refresh/", {
          refresh: refreshToken,
        });

        if (response.status === 200) {
          localStorage.setItem(ACCESS_TOKEN, response.data.access);
          setIsAuth(true);
        } else {
          setIsAuth(false);
        }
      } catch (error) {
        console.error("Error refreshing access token:", error);
        setIsAuth(false);
      }
    }
  };

  if (isAuth === null) {
    return <div>Loading...</div>;
  }

  return isAuth ? <Outlet /> : <Navigate to="/login" replace />;
};

export default ProtectedRoutes;

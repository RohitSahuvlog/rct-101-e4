import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
const RequiredAuth = ({ children }) => {
  const state =useSelector((state)=>state.auth.data.isAuthenticated)

  if (!state) {
    return <Navigate to="/login" />;
  }
  return children;
};

export default RequiredAuth;
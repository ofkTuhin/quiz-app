import { useAuth } from "context/AuthContext";
import React from "react";
import { Outlet, Navigate } from "react-router-dom";

const PrivateOutLate = () => {
  const { currentUser } = useAuth();
  return currentUser ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateOutLate;

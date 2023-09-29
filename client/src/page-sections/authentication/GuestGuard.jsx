import useAuth from "hooks/useAuth";
import React, { Fragment } from "react";
import { Navigate } from "react-router-dom"; // component props interface

const GuestGuard = ({
  children
}) => {
  const {
    isAuthenticated
  } = useAuth();

  if (isAuthenticated) {
    return <Navigate to="/dashboard" />;
  }

  return <Fragment>{children}</Fragment>;
};

export default GuestGuard;
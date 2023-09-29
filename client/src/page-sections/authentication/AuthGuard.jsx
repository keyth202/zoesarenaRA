import useAuth from "hooks/useAuth";
import Login from "pages/authentication/login-v2";
import React, { Fragment, useState } from "react";
import { Navigate, useLocation } from "react-router-dom"; // component props interface

const AuthGuard = ({
  children
}) => {
  const {
    isAuthenticated
  } = useAuth();
  const {
    pathname
  } = useLocation();
  const [requestedLocation, setRequestedLocation] = useState(null);

  if (!isAuthenticated) {
    if (pathname !== requestedLocation) {
      setRequestedLocation(pathname);
    }

    return <Login />;
  }

  if (requestedLocation && pathname !== requestedLocation) {
    setRequestedLocation(null);
    return <Navigate to={requestedLocation} />;
  }

  return <Fragment>{children}</Fragment>;
};

export default AuthGuard;
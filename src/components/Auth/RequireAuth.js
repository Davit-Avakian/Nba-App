import React from 'react';
import { Outlet, Navigate, useLocation } from 'react-router-dom';

const RequireAuth = ({ signedIn }) => {
  const location = useLocation();

  return signedIn ? <Outlet /> : <Navigate to="/" state={{ from: location }} replace />;
};

export default RequireAuth;

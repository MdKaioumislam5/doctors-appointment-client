import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";
import Loading from "../../Shared/Loading";

const PrivateRoute = ({ children }) => {
  const location = useLocation();
  const { user, loading } = useContext(AuthContext);
//   if (loading) {
//     return <Loading></Loading>;
//   }
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace/>;
  }
  return children;
};

export default PrivateRoute;

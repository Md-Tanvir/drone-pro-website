import { CircularProgress } from "@mui/material";
import React from "react";
import { Redirect, Route } from "react-router";
import useAuth from "../../hooks/useAuth";

const AdminRoute = ({ children, ...rest }) => {
  const { user, isLoading,admin } = useAuth();
  if (isLoading) {
    return (
      <div className="justify-content-center d-flex my-5">
        <CircularProgress />
      </div>
    );
  

  }
  return (
    !admin ? <> </> : <><Route
    {...rest}
    render={({ location }) =>
      user.email && admin ? (
        children
      ) : (
        <Redirect
          to={{
            pathname: "/login",
            state: { from: location },
          }}
        />
      )
    }
  /></>
  );
};

export default AdminRoute;

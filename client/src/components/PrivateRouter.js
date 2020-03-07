import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import UserProvider from "./context/UserProvider";

function PrivateRoute({ children, ...rest }) {
  const userData = useContext(UserProvider.context);

  return userData?.loading ? (
    <div>Loading...</div>
  ) : (
    <Route
      {...rest}
      render={() =>
        userData?.user ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/"
            }}
          />
        )
      }
    />
  );
}

export default PrivateRoute;
